import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https:;
  font-src 'self' https://fonts.gstatic.com data:;
  connect-src 'self' https://challenges.cloudflare.com;
  frame-src 'self' https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
      {
        // Static assets long-lived caching
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy thank-you route redirects
      {
        source: "/request-demo/thank-you",
        destination: "/thank-you/demo",
        permanent: true,
      },
      {
        source: "/request-pilot/thank-you",
        destination: "/thank-you/pilot",
        permanent: true,
      },
      {
        source: "/contact/thank-you",
        destination: "/thank-you/contact",
        permanent: true,
      },
      // Comparison route aliases
      {
        source: "/compare/ai-cctv-vs-traditional-cctv",
        destination: "/compare/traditional-cctv-vs-ai-video-analytics",
        permanent: true,
      },
      {
        source: "/compare/on-premise-vs-cloud-video-analytics",
        destination: "/compare/on-premise-vs-cloud-vs-edge-video-analytics",
        permanent: true,
      },
      // Resource guide aliases
      {
        source: "/resources/how-ai-video-analytics-works",
        destination: "/resources/how-to-add-ai-to-existing-cctv-cameras",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
