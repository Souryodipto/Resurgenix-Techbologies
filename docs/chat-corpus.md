# Resurgenix Chatbot Knowledge Corpus & Retrieval Engine

> **Architectural Guardrail**: This chatbot must **ONLY** answer from content that already exists on `resurgenix.com`. It must **never invent** capabilities, pricing, customers, certifications, or numbers, even if asked directly.

---

## 1. Overview & Single Source of Truth

The Resurgenix website assistant utilizes a build-time grounded knowledge corpus compiled directly from the site's TypeScript content definitions:

- `/content/solutions.ts` — 9 core enterprise solutions (capabilities, requirements, limitations, FAQs).
- `/content/industries.ts` — 7 industry sectors (struggles, pilot scope, privacy notes, sector FAQs).
- `/content/faqs.ts` — Categorized platform, hardware compatibility, and deployment FAQs.
- `/content/glossary.ts` — Technical definitions, acronyms, and practical context.
- `/content/facts.ts` — Verified company entity attributes, headquarters, protocols, and founding context.
- `/content/capabilities.ts` — Explicit feature statuses (`pilot` | `in-development` | `roadmap`).
- `/content/resources/*.ts` and `/content/resources/*.mdx` — Guides, architecture teardowns, and comparison matrices.

Compiling from the active code guarantees that the assistant never diverges from what is actually published on the site. There is **zero separate content** to maintain.

---

## 2. Corpus Generation Pipeline

### Build Script: `scripts/build-chat-corpus.ts`

The corpus builder iterates through all content modules, standardizes the text, associates exact `sourceTitle` and canonical `sourceUrl` links, and outputs `/content/generated/chat-corpus.json`.

Each chunk adheres to the `CorpusChunk` interface:
```typescript
export interface CorpusChunk {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  text: string;
  type: "solution" | "industry" | "faq" | "glossary" | "fact" | "capability" | "resource" | "comparison";
}
```

### Automation via `prebuild`

In `package.json`:
```json
"scripts": {
  "prebuild": "tsx scripts/build-chat-corpus.ts",
  "build": "next build"
}
```
Whenever `npm run build` runs, `prebuild` automatically recompiles the corpus JSON prior to Next.js compilation.

### Manual Re-compilation
To update the corpus immediately after editing any `/content/*.ts` file during local development:
```bash
npx tsx scripts/build-chat-corpus.ts
```

---

## 3. Retrieval Architecture (`/lib/chat/retrieve.ts`)

The retrieval system is completely **dependency-free** and requires no vector databases or external embedding services:

1. **Tokenization & Stopword Filtering**: Normalizes user input and filters common conversational filler words.
2. **Normalized Stemming**: Matches common surveillance vocabulary across singular/plural and verb conjugations (e.g., `detection` matches `detect`, `cameras` matches `camera`).
3. **BM25 Scorer**: Precomputes inverse document frequency (IDF) and term frequency across all corpus chunks with length normalization ($k_1=1.2, b=0.75$).
4. **Title & Domain Boosts**: Chunks matching title tokens receive a 2.0x boost; queries mentioning "pricing" or "cost" strongly boost verified enterprise pricing statements.
5. **Coverage Ratio Penalty**: Multi-term queries require at least 50% term overlap to prevent random single-word keyword false-positives.
6. **Out-of-Scope Filtering**: Immediately filters out adversarial prompts, prompt-injection attempts, coding assistance requests, and unrelated general chit-chat.
7. **Threshold Gating**: Queries with top score $< 0.35$ immediately trigger the strict fallback message.

---

## 4. Response Modes & Strict Guardrails

The system automatically switches response modes based on environment configuration:

### Mode A: Grounded Retrieval Mode (Default, `ANTHROPIC_API_KEY` not set)
- Returns the single best-matching chunk directly.
- Attaches the verified `Source: [Page Name]` canonical link and 1-2 related next-step links (e.g., `/request-pilot`, `/how-it-works`).
- Never blends or paraphrases disparate chunks.
- If below threshold, returns the standard fallback message:
  > *"I can only answer from what's published on resurgenix.com, and I don't have that specific detail — want to talk to the team instead?"*
  with direct CTA buttons for **Request a Demo** and **WhatsApp**.

### Mode B: Anthropic LLM Mode (`ANTHROPIC_API_KEY` set)
- Sends **only** the top retrieved corpus chunks (no ungrounded system memory) to Claude with a strict system prompt:
  > *"You are the Resurgenix website assistant. Answer only using the provided context, which is taken directly from resurgenix.com. If the answer isn't in the context, say so plainly and direct the person to Request a Demo, Request a Pilot, or WhatsApp — never guess or extrapolate. Never state a price; pricing is 'Contact us for enterprise pricing.' Never claim a capability is available unless its status in the context says so. Keep answers under 80 words and end by naming which page the information came from."*
- **Server-Side Validation**: Sanitizes model output before returning to the client:
  - Strips any invented dollar, rupee, or subscription amounts.
  - Ensures answers do not exceed 80 words.
  - Verifies dates and entity names exist in the retrieved context.

---

## 5. UI Architecture & Z-Index Hierarchy

The widget floats at the **bottom-left** of the screen (`left-4 sm:left-6`), keeping the bottom-right reserved for the WhatsApp button and mobile sticky conversion bar:

```
Z-INDEX ORDER HIERARCHY:
1. Header / Navigation:                z-40
2. Mobile Sticky CTA Bar & WhatsApp:   z-45
3. Chatbot FAB & Nudge Bubble:         z-[46]
4. Chatbot Open Dialog Panel:          z-[48]
5. Fullscreen Modals & Lightboxes:     z-50 to z-[100]
```

- **Mobile Non-Collision**: When scrolling past hero on mobile devices (< 768px), the FAB raises by `bottom-[76px]` to clear the sticky CTA bar.
- **Nudge Bubble**: Appears ~1.4s on first visit only (sessionStorage-gated: `resurgenix_chat_nudge_seen`).
- **Accessibility**: ARIA `dialog`, `aria-live="polite"`, focus trapping with Tab/Shift+Tab, Escape key to close, 44px touch targets, `prefers-reduced-motion` compliance.
- **Privacy**: History is strictly session-only. Leads are generated **only** if the user explicitly submits the inline "Request a Callback" mini-form.

---

## 6. How to Maintain & Extend

1. **Adding a New FAQ**: Add the entry to `content/faqs.ts` under the appropriate category.
2. **Adding a New Solution**: Add the solution object to `content/solutions.ts`.
3. **Updating Entity Facts**: Update `content/facts.ts`.
4. **Rebuild Corpus**: Run `npx tsx scripts/build-chat-corpus.ts`.
5. **Verify**: Test query via `npx tsx -e "const { retrieveChunks } = require('./lib/chat/retrieve.ts'); console.log(retrieveChunks('your new query'));"`
