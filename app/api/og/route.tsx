import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "AI Video Intelligence for Existing CCTV";
    const category = searchParams.get("category") || "Enterprise Physical Security";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            padding: "64px 80px",
            border: "16px solid #F7F9FC",
          }}
        >
          {/* Top Bar: Wordmark and Category Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Resurgenix Wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px",
                    border: "3px solid #FFFFFF",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "#0B1F3A",
                  letterSpacing: "-0.5px",
                }}
              >
                RESURGENIX
              </span>
            </div>

            {/* Category Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EEF2F7",
                padding: "8px 18px",
                borderRadius: "9999px",
                border: "1px solid #E2E8F0",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#2563EB",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {category}
              </span>
            </div>
          </div>

          {/* Main Hero: Title with Electric Blue Accent Bar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1000px" }}>
            <div
              style={{
                width: "80px",
                height: "6px",
                backgroundColor: "#2563EB",
                borderRadius: "3px",
              }}
            />
            <h1
              style={{
                fontSize: title.length > 50 ? "46px" : "56px",
                fontWeight: 900,
                color: "#0B1F3A",
                lineHeight: 1.18,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Bar: Value Proposition & Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "2px solid #E2E8F0",
              paddingTop: "24px",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px", color: "#5B6B7F", fontWeight: 500 }}>
                Your cameras already see. Resurgenix helps them understand.
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px", color: "#2563EB", fontWeight: 700 }}>
                resurgenixtechnologies.com
              </span>
              <span style={{ fontSize: "14px", color: "#94A3B8" }}>•</span>
              <span style={{ fontSize: "14px", color: "#5B6B7F", fontWeight: 500 }}>
                Kolkata, India
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Failed to generate OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
