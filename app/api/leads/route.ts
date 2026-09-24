import { NextRequest, NextResponse } from "next/server";
import { AnyLeadSchema } from "@/lib/leads/schema";
import { checkRateLimit, verifyTurnstileToken, deliverLead } from "@/lib/leads/delivery";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // 1. Extract client IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");
    const clientIp =
      cfConnectingIp || (forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1");

    // 2. Check rate limit per IP (5 requests per 10 minutes)
    const rateCheck = checkRateLimit(clientIp, 5, 10 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        }
      );
    }

    // 3. Parse JSON body
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid JSON payload" }, { status: 400 });
    }

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        { success: false, error: "Malformed request data" },
        { status: 400 }
      );
    }

    const payload = rawBody as Record<string, unknown>;

    // 4. Honeypot check: If the hidden honeypot field is filled, silently discard without notifying the bot
    if (
      payload.honeypot &&
      typeof payload.honeypot === "string" &&
      payload.honeypot.trim().length > 0
    ) {
      console.warn(`[Bot Detected - Honeypot Triggered] IP: ${clientIp}`);
      // Return 200 OK so the automated bot does not alter its attack vector
      return NextResponse.json({
        success: true,
        message: "Request received successfully",
      });
    }

    // 5. Time-to-submit verification: Enforce minimum human interaction time (3000ms)
    const renderedAt = typeof payload.renderedAt === "number" ? payload.renderedAt : 0;
    const elapsedMs = Date.now() - renderedAt;
    if (renderedAt > 0 && elapsedMs < 3000) {
      console.warn(`[Bot Detected - Fast Submission: ${elapsedMs}ms] IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: false,
          error:
            "Submission rejected: Form was completed unnaturally fast. Please review your input.",
        },
        { status: 400 }
      );
    }

    // 6. Optional Cloudflare Turnstile token verification
    if (payload.turnstileToken && typeof payload.turnstileToken === "string") {
      const turnstile = await verifyTurnstileToken(payload.turnstileToken, clientIp);
      if (!turnstile.valid) {
        return NextResponse.json(
          {
            success: false,
            error: "Security verification failed. Please refresh the page and try again.",
          },
          { status: 400 }
        );
      }
    }

    // 7. Validate full payload using Zod discriminated schema
    const parseResult = AnyLeadSchema.safeParse(payload);
    if (!parseResult.success) {
      const issue = parseResult.error.issues[0];
      const errorMessage = issue
        ? `${issue.path.join(".")}: ${issue.message}`
        : "Validation failed";
      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
          issues: parseResult.error.issues,
        },
        { status: 422 }
      );
    }

    const validatedLead = parseResult.data;

    // 8. Deliver lead through adapter layer (Email, DB, or Dev Logger)
    const delivery = await deliverLead(validatedLead, clientIp);

    if (!delivery.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            delivery.error ||
            "Unable to deliver your request at this moment. Please email info@resurgenixtechnologies.com directly.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      method: delivery.deliveryMethod,
    });
  } catch (error) {
    console.error("[Lead API Route Exception]", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An internal server error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
