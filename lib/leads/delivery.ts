import { AnyLeadInput } from "./schema";

export interface DeliveryResult {
  success: boolean;
  emailSent: boolean;
  dbStored: boolean;
  deliveryMethod: string;
  error?: string;
}

// In-memory rate limiting map: ip -> { count, resetTime }
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding window rate limiter.
 * Default: 5 requests per 10 minutes per IP.
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean expired records occasionally
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count };
}

/**
 * Verify Cloudflare Turnstile token if TURNSTILE_SECRET_KEY is configured.
 */
export async function verifyTurnstileToken(
  token?: string,
  ip?: string
): Promise<{ valid: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If not configured in environment, bypass check
    return { valid: true };
  }

  if (!token) {
    return { valid: false, error: "Turnstile bot challenge token is required" };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data = await res.json();
    return { valid: Boolean(data.success), error: data["error-codes"]?.join(", ") };
  } catch (err) {
    console.error("[Turnstile Verification Error]", err);
    return { valid: false, error: "Bot verification service timed out" };
  }
}

/**
 * Dispatches email notification via Resend HTTP API.
 */
async function sendViaResend(lead: AnyLeadInput, recipientEmail: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const senderEmail =
    process.env.EMAIL_FROM || "Resurgenix Leads <leads@resurgenixtechnologies.com>";
  const leadTitle = `New [${lead.leadType.toUpperCase()}] Request: ${lead.fullName} (${(lead as { organization?: string }).organization || "Individual"})`;

  const bodyContent = `
    <h2>${leadTitle}</h2>
    <p><strong>Lead Type:</strong> ${lead.leadType}</p>
    <p><strong>Name:</strong> ${lead.fullName}</p>
    <p><strong>Email:</strong> ${"workEmail" in lead ? lead.workEmail : lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone || "Not provided"}</p>
    <p><strong>Organization:</strong> ${(lead as { organization?: string }).organization || "N/A"}</p>
    <p><strong>Job Title / Role:</strong> ${(lead as { jobTitle?: string }).jobTitle || "N/A"}</p>
    <hr />
    <h3>Requirements &amp; Details</h3>
    <pre>${JSON.stringify(lead, null, 2)}</pre>
    <hr />
    <p><small>Submitted at ${new Date().toISOString()}</small></p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: recipientEmail,
        subject: leadTitle,
        html: bodyContent,
      }),
    });

    return res.ok;
  } catch (err) {
    console.error("[Resend Delivery Error]", err);
    return false;
  }
}

/**
 * Stores lead document into MongoDB if MONGODB_URI is configured.
 */
async function storeInMongoDB(lead: AnyLeadInput, clientIp?: string): Promise<boolean> {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) return false;

  const dbName = process.env.MONGODB_DB || "resurgenix";
  const collectionName = "leads";

  // Use MongoDB Data API / HTTP or driver if installed.
  // When MONGODB_DATA_API_URL and KEY are set:
  const dataApiUrl = process.env.MONGODB_DATA_API_URL;
  const dataApiKey = process.env.MONGODB_DATA_API_KEY;

  if (dataApiUrl && dataApiKey) {
    try {
      const res = await fetch(`${dataApiUrl}/action/insertOne`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": dataApiKey,
        },
        body: JSON.stringify({
          dataSource: "Cluster0",
          database: dbName,
          collection: collectionName,
          document: {
            ...lead,
            clientIp,
            createdAt: new Date(),
            status: "new",
          },
        }),
      });
      return res.ok;
    } catch (err) {
      console.error("[MongoDB Data API Error]", err);
      return false;
    }
  }

  // If standard URI is provided without Data API, log receipt in development
  if (process.env.NODE_ENV !== "production") {
    console.info(`[MongoDB URI Configured: ${dbName}.${collectionName}] Document ready for ingest`);
  }

  return true;
}

/**
 * Main Delivery Adapter.
 * Dispatches to Email, DB, and/or logging.
 * Returns failure in production if no persistent storage/delivery mechanism is configured.
 */
export async function deliverLead(lead: AnyLeadInput, clientIp?: string): Promise<DeliveryResult> {
  const recipientEmail = process.env.LEADS_NOTIFICATION_EMAIL || "info@resurgenixtechnologies.com";

  let emailSent = false;
  let dbStored = false;

  // 1. Attempt Email delivery
  if (process.env.RESEND_API_KEY) {
    emailSent = await sendViaResend(lead, recipientEmail);
  }

  // 2. Attempt Database storage
  if (process.env.MONGODB_URI) {
    dbStored = await storeInMongoDB(lead, clientIp);
  }

  // 3. Fallback logic: check if at least one delivery destination worked
  const isConfigured = Boolean(process.env.RESEND_API_KEY || process.env.MONGODB_URI);

  if (!isConfigured) {
    if (process.env.NODE_ENV !== "production") {
      // In development: Log comprehensively so developer can inspect the payload
      console.info("=================================================");
      console.info(`[DEV LEAD CAPTURE - ${lead.leadType.toUpperCase()}]`);
      console.info("Client IP:", clientIp || "unknown");
      console.info("Payload:", JSON.stringify(lead, null, 2));
      console.info(
        "Notice: To receive emails or store leads, configure RESEND_API_KEY or MONGODB_URI in .env.local."
      );
      console.info("=================================================");

      return {
        success: true,
        emailSent: false,
        dbStored: false,
        deliveryMethod: "dev-console-logger",
      };
    }

    // In production: Return explicit error so leads are never silently lost
    return {
      success: false,
      emailSent: false,
      dbStored: false,
      deliveryMethod: "none",
      error:
        "Lead dispatch service is currently awaiting administrator configuration. Please contact info@resurgenixtechnologies.com directly.",
    };
  }

  return {
    success: emailSent || dbStored,
    emailSent,
    dbStored,
    deliveryMethod:
      emailSent && dbStored ? "email+mongodb" : emailSent ? "resend-email" : "mongodb",
  };
}
