import fs from "fs";
import path from "path";
import { solutions } from "../content/solutions";
import { industries } from "../content/industries";
import { faqsData as faqGroups } from "../content/faqs";
import { glossaryTerms } from "../content/glossary";
import { companyFacts } from "../content/facts";
import { capabilities } from "../content/capabilities";
import { allArticles, comparisons } from "../content/resources";
import { recognitionData } from "../content/recognition";
import { teamMembers } from "../content/team";

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

function cleanText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function buildCorpus(): CorpusChunk[] {
  const corpus: CorpusChunk[] = [];

  // 1. Facts & Company Ground Truth
  corpus.push({
    id: "fact-company-overview",
    sourceTitle: "About Resurgenix Technologies",
    sourceUrl: "/about",
    type: "fact",
    text: cleanText(`
      Resurgenix Technologies Pvt. Ltd. is an AI video intelligence company founded by Souryodipto Debnath.
      Headquarters: ${companyFacts.headquarters.locality}, ${companyFacts.headquarters.region}, ${companyFacts.headquarters.country}.
      Focus region: Eastern India, Kolkata, West Bengal, and Kalyani industrial corridors.
      Mission: Building practical AI systems that transform physical infrastructure into intelligent systems.
      Stage: Early commercial and pilot stage, actively seeking enterprise pilot customers, government and smart-city conversations, and system integrator channel partners.
      Pricing: Contact us for enterprise pricing. Custom pilot and subscription terms are scoped per camera count and deployment topology.
      Contact: Email ${companyFacts.contact.email}, Phone ${companyFacts.contact.phone}.
    `),
  });

  corpus.push({
    id: "fact-technical-specs",
    sourceTitle: "Platform Specifications & Protocols",
    sourceUrl: "/how-it-works",
    type: "fact",
    text: cleanText(`
      Technical Architecture: Zero camera replacement required. Ingests standard RTSP and ONVIF Profile S/T video streams from existing IP cameras, NVRs, and DVRs.
      Codecs supported: H.264, H.265 / HEVC.
      Supported resolutions: 1080p Full HD, 720p HD, 4MP, 4K.
      Inference Latency: Sub-second edge inference (typically 30ms to 80ms per frame).
      Deployment Models: On-premise Edge Micro-server, Local Rackmount Appliance, Air-Gapped Network, and Hybrid Cloud Telemetry.
      Data Sovereignty: Compliant with India's Digital Personal Data Protection (DPDP) Act 2023. Raw video streams never leave the customer's on-premise local area network.
    `),
  });

  corpus.push({
    id: "fact-pilot-protocol",
    sourceTitle: "14-Day On-Site Pilot Protocol",
    sourceUrl: "/request-pilot",
    type: "fact",
    text: cleanText(`
      14-Day Pilot Protocol: Evaluates 3 to 5 camera streams on existing infrastructure.
      Pre-requisites: Working RTSP stream credentials, stable local network switch, designated optical view angle, and agreed KPI benchmarks.
      Deliverables: Real-time alert calibration, false-positive elimination rate analysis, latency verification report, and executive proof-of-value summary.
    `),
  });

  // Verified Recognition & Credentials
  recognitionData.forEach((rec) => {
    corpus.push({
      id: `recognition-${rec.id}`,
      sourceTitle: `Company Recognition: ${rec.title}`,
      sourceUrl: "/about#recognition",
      type: "fact",
      text: cleanText(`
        Official Credential: ${rec.title}.
        Issuer: ${rec.issuer}.
        Programme: ${rec.programme}.
        Certificate Number: ${rec.certificateNumber}.
        Details: ${rec.description}
      `),
    });
  });

  // Team & Leadership
  teamMembers.forEach((member) => {
    corpus.push({
      id: `team-${member.id}`,
      sourceTitle: `Leadership & Team: ${member.name} (${member.role})`,
      sourceUrl: "/about#leadership",
      type: "fact",
      text: cleanText(`
        Team Member: ${member.name}.
        Role: ${member.role} at Resurgenix Technologies.
        Summary: ${member.bio}
        Focus: ${member.focus}.
      `),
    });
  });

  // 2. Capabilities (with exact life-cycle status)
  capabilities.forEach((cap) => {
    corpus.push({
      id: `capability-${cap.slug}`,
      sourceTitle: `${cap.name} (${cap.status.toUpperCase()})`,
      sourceUrl: `/solutions/${cap.slug}`,
      type: "capability",
      text: cleanText(`
        Capability: ${cap.name}.
        Category: ${cap.category}.
        Status: ${cap.status === "pilot" ? "Pilot Ready (actively deployable for enterprise pilot trials on compatible existing CCTV)" : cap.status === "in-development" ? "In Active Engineering Development" : "On Strategic Product Roadmap"}.
        Description: ${cap.shortDescription}.
        Status Note: ${cap.statusNote}.
      `),
    });
  });

  // 3. Solutions (9 Core Offerings)
  solutions.forEach((sol) => {
    // Solution Overview Chunk
    corpus.push({
      id: `solution-${sol.slug}`,
      sourceTitle: `${sol.title} - Solution Overview`,
      sourceUrl: `/solutions/${sol.slug}`,
      type: "solution",
      text: cleanText(`
        Solution: ${sol.title}.
        Short Answer: ${sol.shortAnswer}
        Operational Problem: ${sol.problem}
        Key Capabilities: ${sol.capabilities.map((c) => `${c.title}: ${c.description}`).join("; ")}.
        Operator Deliverables: ${sol.operatorReceives.map((d) => `${d.item}: ${d.detail}`).join("; ")}.
        Hardware & Protocol Requirements: ${sol.requirementsTable.map((r) => `${r.parameter}: ${r.specification}`).join("; ")}.
        Operational Limitations: ${sol.limitations.join("; ")}.
        Status: ${sol.status}.
      `),
    });

    // Solution Specific FAQs
    sol.faqs.forEach((faq, idx) => {
      corpus.push({
        id: `solution-faq-${sol.slug}-${idx}`,
        sourceTitle: `${sol.title} - FAQ: ${faq.question}`,
        sourceUrl: `/solutions/${sol.slug}`,
        type: "faq",
        text: cleanText(`Question about ${sol.title}: ${faq.question} Answer: ${faq.answer}`),
      });
    });
  });

  // 4. Industry Verticals (7 Sectors)
  industries.forEach((ind) => {
    corpus.push({
      id: `industry-${ind.slug}`,
      sourceTitle: `${ind.title} - Industry Video Intelligence`,
      sourceUrl: `/industries/${ind.slug}`,
      type: "industry",
      text: cleanText(`
        Industry Sector: ${ind.title}.
        Overview: ${ind.shortAnswer}
        Operational Struggles Addressed: ${ind.struggles.map((s) => `${s.title}: ${s.description}`).join("; ")}.
        Applied Solutions: ${ind.relevantSolutions.map((r) => `${r.title} (${r.oneLiner})`).join("; ")}.
        Pilot Scope: Focus Area: ${ind.pilotScope.focusArea}; Camera Footprint: ${ind.pilotScope.cameraFootprint}; Objectives: ${ind.pilotScope.objectives.join("; ")}; Assessment Note: ${ind.pilotScope.assessmentNote}.
        Privacy & Operations: Considerations: ${ind.privacyAndOperations.considerations.join("; ")}; Policy Note: ${ind.privacyAndOperations.policyNote}.
      `),
    });

    ind.faqs.forEach((faq, idx) => {
      corpus.push({
        id: `industry-faq-${ind.slug}-${idx}`,
        sourceTitle: `${ind.title} - FAQ: ${faq.question}`,
        sourceUrl: `/industries/${ind.slug}`,
        type: "faq",
        text: cleanText(`Question about ${ind.title}: ${faq.question} Answer: ${faq.answer}`),
      });
    });
  });

  // 5. Global FAQs (Grouped Categories)
  faqGroups.forEach((group) => {
    group.items.forEach((faq, idx) => {
      corpus.push({
        id: `global-faq-${group.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${idx}`,
        sourceTitle: `FAQ (${group.category}): ${faq.question}`,
        sourceUrl: "/faq",
        type: "faq",
        text: cleanText(`Category: ${group.category}. Question: ${faq.question} Answer: ${faq.answer}`),
      });
    });
  });

  // 6. Glossary Terms (Technical Definitions)
  glossaryTerms.forEach((term) => {
    corpus.push({
      id: `glossary-${term.slug}`,
      sourceTitle: `Glossary: What is ${term.term}?`,
      sourceUrl: "/glossary",
      type: "glossary",
      text: cleanText(`
        Term: ${term.term}.
        Definition: ${term.shortDefinition}
        Category: ${term.category}
      `),
    });
  });

  // 7. Resource Articles (Pillar + Clusters + Guides)
  allArticles.forEach((art) => {
    // Main Article Summary & Short Answer Chunk
    const takeaways = art.keyTakeaways ? `Key Takeaways: ${art.keyTakeaways.join("; ")}.` : "";
    corpus.push({
      id: `article-${art.slug}`,
      sourceTitle: art.title,
      sourceUrl: `/resources/${art.slug}`,
      type: "resource",
      text: cleanText(`
        Article Title: ${art.title}.
        Short Answer: ${art.shortAnswer}
        Summary: ${art.shortSummary}
        ${takeaways}
      `),
    });

    // Content sections for detailed knowledge
    if (art.contentSections && art.contentSections.length > 0) {
      art.contentSections.forEach((section, sIdx) => {
        const paragraphs = section.paragraphs ? section.paragraphs.slice(0, 3).join(" ") : "";
        const subsections = section.subsections
          ? section.subsections.map((sub) => `${sub.subtitle}: ${sub.text}`).join(" ")
          : "";
        if (paragraphs || subsections) {
          corpus.push({
            id: `article-${art.slug}-sec-${sIdx}`,
            sourceTitle: `${art.title} - ${section.title}`,
            sourceUrl: `/resources/${art.slug}`,
            type: "resource",
            text: cleanText(`From ${art.title} (${section.title}): ${paragraphs} ${subsections}`),
          });
        }
      });
    }

    // Article FAQs if present
    if (art.faqs) {
      art.faqs.forEach((faq, fIdx) => {
        corpus.push({
          id: `article-faq-${art.slug}-${fIdx}`,
          sourceTitle: `${art.title} - FAQ: ${faq.question}`,
          sourceUrl: `/resources/${art.slug}`,
          type: "faq",
          text: cleanText(`Question from ${art.title}: ${faq.question} Answer: ${faq.answer}`),
        });
      });
    }
  });

  // 8. Comparisons
  comparisons.forEach((comp) => {
    corpus.push({
      id: `comparison-${comp.slug}`,
      sourceTitle: comp.title,
      sourceUrl: `/compare/${comp.slug}`,
      type: "comparison",
      text: cleanText(`
        Comparison: ${comp.title}.
        Executive Summary: ${comp.shortSummary}
        Verdict: ${comp.verdict}
      `),
    });
  });

  // 9. Inspect any local .mdx files under content/resources if present in the future
  const mdxDir = path.join(process.cwd(), "content", "resources");
  if (fs.existsSync(mdxDir)) {
    const files = fs.readdirSync(mdxDir);
    files.forEach((file) => {
      if (file.endsWith(".mdx")) {
        const fullPath = path.join(mdxDir, file);
        const content = fs.readFileSync(fullPath, "utf-8");
        // Simple frontmatter extractor
        const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (match) {
          const body = match[2];
          const slug = file.replace(/\.mdx$/, "");
          corpus.push({
            id: `mdx-${slug}`,
            sourceTitle: slug.replace(/-/g, " "),
            sourceUrl: `/resources/${slug}`,
            type: "resource",
            text: cleanText(body.slice(0, 1000)),
          });
        }
      }
    });
  }

  return corpus;
}

function main() {
  const corpus = buildCorpus();
  const outputDir = path.join(process.cwd(), "content", "generated");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, "chat-corpus.json");
  fs.writeFileSync(outputPath, JSON.stringify(corpus, null, 2), "utf-8");

  console.log(`[build-chat-corpus] Compiled ${corpus.length} chunks into ${outputPath}`);
}

main();
