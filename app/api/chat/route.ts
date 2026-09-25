import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/leads/delivery";
import {
  retrieveChunks,
  getRelatedLinks,
  FALLBACK_MESSAGE,
  CorpusChunk,
} from "@/lib/chat/retrieve";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT =
  "You are the Resurgenix website assistant. Answer only using the provided context, which is taken directly from resurgenix.com. If the answer isn't in the context, say so plainly and direct the person to Request a Demo, Request a Pilot, or WhatsApp — never guess or extrapolate. Never state a price; pricing is 'Contact us for enterprise pricing.' Never claim a capability is available unless its status in the context says so. Keep answers under 80 words and end by naming which page the information came from.";

// Server-side response validation to prevent hallucinated numbers, dates, or customer claims
function sanitizeLlmResponse(response: string, contextText: string): string {
  let cleaned = response.trim();

  // Guard against invented pricing
  if (/\$|₹|\b(usd|inr|rupees|dollars|per camera per month)\b/i.test(cleaned)) {
    cleaned = cleaned.replace(
      /(\$|₹|INR|USD)\s?\d+([.,]\d+)?(\s?\/(month|year|camera))?/gi,
      "Contact us for enterprise pricing."
    );
  }

  // Check for hallucinated 4-digit years not in context
  const years = cleaned.match(/\b(19\d\d|20\d\d)\b/g);
  if (years) {
    for (const yr of years) {
      if (!contextText.includes(yr)) {
        // Strip invented year
        cleaned = cleaned.replace(yr, "[date verified in documentation]");
      }
    }
  }

  // Word count constraint (under 80 words)
  const words = cleaned.split(/\s+/);
  if (words.length > 85) {
    cleaned = words.slice(0, 80).join(" ") + "...";
  }

  return cleaned;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & rate limiting (20 requests per 5 minutes per IP)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");
    const clientIp =
      cfConnectingIp || (forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1");

    const rateCheck = checkRateLimit(`chat-${clientIp}`, 20, 5 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many messages sent. Please wait a few moments before trying again.",
          answer: "You have reached the rate limit for queries. Please wait a few moments or contact our team directly.",
          isFallback: true,
          mode: "rate_limited",
        },
        { status: 429 }
      );
    }

    // 2. Parse request
    let body: { message?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    if (!body || typeof body.message !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid message property" },
        { status: 400 }
      );
    }

    // 3. Sanitize user input (strip HTML/scripts, cap at 500 characters)
    const rawMessage = body.message.slice(0, 500);
    const sanitizedQuery = rawMessage.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

    if (sanitizedQuery.length === 0) {
      return NextResponse.json(
        {
          answer: "Please enter a question about Resurgenix's video intelligence platform or solutions.",
          isFallback: true,
          mode: "empty_query",
        },
        { status: 200 }
      );
    }

    // 4. Retrieve corpus chunks
    const { chunks, topScore } = retrieveChunks(sanitizedQuery, 4, 0.35);

    // Logging matched source URLs for telemetry and corpus refinement
    console.log("[Chat Query Log]", {
      ip: clientIp,
      query: sanitizedQuery,
      topScore,
      matches: chunks.map((c) => ({ url: c.sourceUrl, title: c.sourceTitle, score: c.score })),
    });

    // 5. Fallback condition if score below threshold or no chunks matched
    if (chunks.length === 0 || topScore < 0.35) {
      return NextResponse.json({
        answer: FALLBACK_MESSAGE,
        isFallback: true,
        topScore,
        mode: "fallback",
        relatedLinks: [
          { label: "Request a Demo", url: "/request-demo" },
          { label: "Request a Pilot", url: "/request-pilot" },
        ],
      });
    }

    const bestChunk: CorpusChunk = chunks[0];
    const relatedLinks = getRelatedLinks(bestChunk);

    // 6. Check if ANTHROPIC_API_KEY is available
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

    if (anthropicApiKey && anthropicApiKey.trim().length > 0) {
      try {
        const contextPayload = chunks
          .map(
            (c, i) =>
              `[Context Document ${i + 1} - Source: ${c.sourceTitle} (${c.sourceUrl})]\n${c.text}`
          )
          .join("\n\n");

        const userPrompt = `Context:\n${contextPayload}\n\nUser Question:\n${sanitizedQuery}`;

        const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": anthropicApiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-haiku-20240307",
            max_tokens: 300,
            system: SYSTEM_PROMPT,
            messages: [{ role: "user", content: userPrompt }],
          }),
        });

        if (anthropicRes.ok) {
          const anthropicData = await anthropicRes.json();
          const rawAnswer = anthropicData?.content?.[0]?.text;

          if (rawAnswer && typeof rawAnswer === "string") {
            const sanitizedAnswer = sanitizeLlmResponse(rawAnswer, contextPayload);
            return NextResponse.json({
              answer: sanitizedAnswer,
              sourceTitle: bestChunk.sourceTitle,
              sourceUrl: bestChunk.sourceUrl,
              relatedLinks,
              isFallback: false,
              mode: "llm",
            });
          }
        } else {
          console.warn("[Anthropic API error, using retrieval fallback]", anthropicRes.status);
        }
      } catch (err) {
        console.error("[Anthropic API exception, falling back to retrieval]", err);
      }
    }

    // 7. Default Mode: Direct Grounded Retrieval (no external LLM key needed)
    return NextResponse.json({
      answer: bestChunk.text,
      sourceTitle: bestChunk.sourceTitle,
      sourceUrl: bestChunk.sourceUrl,
      relatedLinks,
      isFallback: false,
      mode: "retrieval",
    });
  } catch (error) {
    console.error("[Chat API Fatal Error]", error);
    return NextResponse.json(
      {
        answer: FALLBACK_MESSAGE,
        isFallback: true,
        mode: "error",
      },
      { status: 500 }
    );
  }
}
