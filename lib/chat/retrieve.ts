import rawCorpus from "@/content/generated/chat-corpus.json";

export interface CorpusChunk {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  text: string;
  type:
    | "solution"
    | "industry"
    | "faq"
    | "glossary"
    | "fact"
    | "capability"
    | "resource"
    | "comparison";
}

export interface ScoredChunk extends CorpusChunk {
  score: number;
  matchedTerms: string[];
}

export interface RelatedLink {
  label: string;
  url: string;
}

export const FALLBACK_MESSAGE =
  "I can only answer from what's published on resurgenix.com, and I don't have that specific detail — want to talk to the team instead?";

const STOP_WORDS = new Set([
  "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are",
  "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both",
  "but", "by", "can", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does",
  "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had",
  "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "her", "here", "hers", "herself",
  "him", "himself", "his", "how", "i", "if", "in", "into", "is", "isn't", "it", "its", "itself",
  "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off",
  "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over",
  "own", "same", "shan't", "she", "should", "shouldn't", "so", "some", "such", "than", "that",
  "the", "their", "theirs", "them", "themselves", "then", "there", "these", "they", "this",
  "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "were",
  "weren't", "what", "when", "where", "which", "while", "who", "whom", "why", "with", "won't",
  "would", "wouldn't", "you", "your", "yours", "yourself", "yourselves", "tell", "please", "give"
]);

// Patterns that identify queries definitely out of scope (coding help, chit-chat, jailbreak, poems, etc.)
const OUT_OF_SCOPE_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior)\s+instructions/i,
  /system\s+prompt/i,
  /roleplay|pretend\s+(you\s+are|to\s+be)/i,
  /jailbreak|dan\s+mode/i,
  /write\s+(a\s+)?(python|javascript|typescript|c\+\+|java|react|html|css|php|rust|go)\s+(code|script|function|program)/i,
  /how\s+to\s+code\b/i,
  /tell\s+me\s+a\s+(joke|story|poem|riddle)/i,
  /weather\s+in\b/i,
  /recipe\s+for\b/i,
  /crypto|bitcoin|ethereum|stock\s+price/i,
  /who\s+won\s+the\b/i,
  /as\s+an\s+ai\s+language\s+model/i,
];

export function isOutOfScopeQuery(query: string): boolean {
  const trimmed = query.trim();
  if (trimmed.length < 3) return true;
  for (const pattern of OUT_OF_SCOPE_PATTERNS) {
    if (pattern.test(trimmed)) return true;
  }
  return false;
}

// Stemming/normalizing helper for common technical terms
function normalizeWord(word: string): string {
  const w = word.toLowerCase().trim();
  if (w.endsWith("ies") && w.length > 4) return w.slice(0, -3) + "y";
  if (w.endsWith("ing") && w.length > 5) return w.slice(0, -3);
  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 3) return w.slice(0, -1);
  if (w.endsWith("ed") && w.length > 4) return w.slice(0, -2);
  if (w.endsWith("tion") && w.length > 5) return w.slice(0, -4);
  return w;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

// Corpus caching and BM25 index precomputation
const corpus: CorpusChunk[] = (rawCorpus as CorpusChunk[]) || [];

interface DocMetadata {
  chunk: CorpusChunk;
  docLen: number;
  termFreqs: Map<string, number>;
  titleTerms: Set<string>;
}

let isIndexInitialized = false;
let docMetadata: DocMetadata[] = [];
const docFreqs: Map<string, number> = new Map();
let avgDocLen = 0;

function ensureIndex() {
  if (isIndexInitialized) return;

  let totalLen = 0;
  docMetadata = corpus.map((chunk) => {
    const rawTokens = tokenize(`${chunk.sourceTitle} ${chunk.sourceTitle} ${chunk.text}`);
    const normalizedTokens = rawTokens.map(normalizeWord);
    const termFreqs = new Map<string, number>();

    normalizedTokens.forEach((term) => {
      termFreqs.set(term, (termFreqs.get(term) || 0) + 1);
    });

    const uniqueTerms = new Set(normalizedTokens);
    uniqueTerms.forEach((term) => {
      docFreqs.set(term, (docFreqs.get(term) || 0) + 1);
    });

    const titleTokens = new Set(tokenize(chunk.sourceTitle).map(normalizeWord));

    const docLen = normalizedTokens.length;
    totalLen += docLen;

    return {
      chunk,
      docLen,
      termFreqs,
      titleTerms: titleTokens,
    };
  });

  avgDocLen = docMetadata.length > 0 ? totalLen / docMetadata.length : 1;
  isIndexInitialized = true;
}

// BM25 parameters
const K1 = 1.2;
const B = 0.75;

export function retrieveChunks(
  query: string,
  topK = 4,
  relevanceThreshold = 0.35
): { chunks: ScoredChunk[]; topScore: number } {
  if (isOutOfScopeQuery(query)) {
    return { chunks: [], topScore: 0 };
  }

  ensureIndex();

  const queryRawTokens = tokenize(query);
  const queryTerms = queryRawTokens.map(normalizeWord);

  if (queryTerms.length === 0) {
    return { chunks: [], topScore: 0 };
  }

  const N = docMetadata.length;
  const scored: ScoredChunk[] = [];

  // Check if query is looking for pricing or cost
  const isPricingQuery = queryTerms.some((t) =>
    ["price", "pricing", "cost", "fee", "rate", "quote", "charge"].includes(t)
  );

  for (const doc of docMetadata) {
    let score = 0;
    const matchedTerms: string[] = [];

    for (let i = 0; i < queryTerms.length; i++) {
      const term = queryTerms[i];
      const tf = doc.termFreqs.get(term) || 0;

      if (tf > 0) {
        matchedTerms.push(queryRawTokens[i]);
        const df = docFreqs.get(term) || 1;
        // IDF with floor at 0.1
        const idf = Math.max(0.1, Math.log(1 + (N - df + 0.5) / (df + 0.5)));

        // BM25 term score
        const numerator = tf * (K1 + 1);
        const denominator = tf + K1 * (1 - B + B * (doc.docLen / avgDocLen));
        let termScore = idf * (numerator / denominator);

        // Boost if term appears in title
        if (doc.titleTerms.has(term)) {
          termScore *= 2.0;
        }

        score += termScore;
      }
    }

    // Special exact phrase or synonym boosts
    const queryLower = query.toLowerCase();
    const docTextLower = doc.chunk.text.toLowerCase();
    const titleLower = doc.chunk.sourceTitle.toLowerCase();

    // Exact query string in text
    if (queryLower.length > 8 && (docTextLower.includes(queryLower) || titleLower.includes(queryLower))) {
      score += 2.5;
    }

    // Pricing query boost towards company facts with enterprise pricing
    if (isPricingQuery && doc.chunk.text.toLowerCase().includes("pricing")) {
      score += 3.5;
    }

    // Term coverage penalty: if query has multiple terms, require high coverage
    const matchRatio = matchedTerms.length / queryTerms.length;
    if (queryTerms.length >= 2 && matchRatio < 0.5) {
      score *= 0.15; // heavy penalty for queries where most terms are absent
    } else {
      score *= Math.pow(matchRatio, 1.2);
    }

    if (score > 0) {
      // Normalize to 0.0 - 1.0 range based on calibrated max BM25 score
      const normalizedScore = Math.min(1.0, Math.round((score / 14.0) * 100) / 100);
      scored.push({
        ...doc.chunk,
        score: normalizedScore,
        matchedTerms: Array.from(new Set(matchedTerms)),
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  const topScore = scored.length > 0 ? scored[0].score : 0;
  const filtered = scored.filter((c) => c.score >= relevanceThreshold).slice(0, topK);

  return {
    chunks: filtered,
    topScore,
  };
}

export function getRelatedLinks(chunk: CorpusChunk): RelatedLink[] {
  const links: RelatedLink[] = [];

  if (chunk.sourceUrl.startsWith("/solutions/")) {
    links.push({ label: "Request a 14-Day Pilot", url: "/request-pilot" });
    links.push({ label: "Platform Architecture", url: "/how-it-works" });
  } else if (chunk.sourceUrl.startsWith("/industries/")) {
    links.push({ label: "Explore Pilot Scope", url: "/request-pilot" });
    links.push({ label: "View All Solutions", url: "/solutions" });
  } else if (chunk.sourceUrl === "/about" || chunk.sourceUrl === "/faq") {
    links.push({ label: "Explore Solutions", url: "/solutions" });
    links.push({ label: "Request a Demo", url: "/request-demo" });
  } else if (chunk.sourceUrl.startsWith("/resources/")) {
    links.push({ label: "Technical FAQs", url: "/faq" });
    links.push({ label: "Request a Pilot", url: "/request-pilot" });
  } else {
    links.push({ label: "Request a Demo", url: "/request-demo" });
    links.push({ label: "Request a Pilot", url: "/request-pilot" });
  }

  return links.slice(0, 2);
}

export function getCorpus(): CorpusChunk[] {
  return corpus;
}
