# Image & Visual Asset SEO Specification

This document details the visual asset registry, optical dimensions, formats, alt text specifications, and loading strategies across the Resurgenix platform in compliance with technical SEO and Core Web Vitals best practices.

---

## Visual Asset Inventory

| Asset Path / Route | Asset Type & Purpose | Target Dimensions | Native Format | Descriptive Alt Text / Accessibility Label | Loading Strategy & Caching Policy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/images/resurgenix-video-poster.jpg` | **Master Video Explainer Poster Frame**<br>Displayed as the initial visual state of the corporate video player on the homepage and as fallback social thumbnail. | 1920 × 1080 px (16:9) | Progressive JPEG | *"Resurgenix AI video intelligence platform monitoring multi-camera CCTV feeds in an enterprise security operations control room."* | **Priority Preload:** Cached with long-lived header (`Cache-Control: public, max-age=31536000, immutable`). Preloaded on homepage above-the-fold viewport. |
| `/api/og?title={title}&category={category}` | **Dynamic Open Graph & Twitter Social Image**<br>Generated on-demand via `@vercel/og` (`next/og`) for every page, article, solution, and comparison. | 1200 × 630 px (1.91:1 standard OG) | PNG (Edge Rendered) | *"{Page Title} — Resurgenix AI Video Intelligence"* | **Edge Generated & Cached:** Dynamically synthesized at the edge with white background (`#FFFFFF`), navy typography (`#0B1F3A`), and electric blue accent (`#2563EB`). |
| Inline SVG: `PipelineDiagram` (`/components/ui/PipelineDiagram.tsx`) | **5-Stage Edge Video Analytics Pipeline Architecture Graphic**<br>Illustrates RTSP Ingestion, Frame Decoding, Preprocessing, Neural Inference, and Alert Dispatch. | Responsive Scalable Vector | Inline SVG | Semantic `<figure>` with `aria-label="Five-stage edge AI video analytics processing pipeline from RTSP stream to instant alert dispatch"`. | **Zero Network Request:** Embedded directly in server-rendered HTML for instantaneous First Contentful Paint (FCP). |
| Inline SVG: `IllustrativeDashboard` (`/components/ui/IllustrativeDashboard.tsx`) | **Multi-Stream Enterprise Video Control Room Dashboard**<br>Demonstrates real-time zone boundary polygons, bounding boxes, and camera health indicators. | Responsive Scalable Vector | Inline SVG | Semantic `<figure>` with `aria-label="Illustrative control room dashboard displaying real-time video intelligence feeds and security alerts"`. | **Zero Network Request:** Embedded directly in server-rendered HTML. Scalable across high-DPI displays without pixelation. |
| Inline SVG: Brand Aperture Icon (`/components/layout/Header.tsx` & `/api/og`) | **Resurgenix Optical Monogram**<br>Represents machine perception and optical understanding ("Dekhe Bhi, Samjhe Bhi"). | 32 × 32 px / 40 × 40 px | Inline SVG | Hidden from screen readers via `aria-hidden="true"`; accompanied by semantic text wordmark `RESURGENIX`. | Inline DOM inclusion. |

---

## Technical Performance & Core Web Vitals Rules

1. **Explicit Dimensions & Layout Stability:**
   - All visual elements and video containers explicitly define width and height aspect ratios (`aspect-video` or explicit CSS aspect-ratio) to ensure zero Cumulative Layout Shift (CLS = 0).
2. **Bandwidth Efficiency:**
   - Raster images are compressed and served over HTTP/2 with gzip/brotli compression enabled.
   - Vector graphics (SVG) are minimized to avoid unnecessary DOM node bloat.
3. **HTTP Cache Control:**
   - Static raster files under `/images/*` are served with immutable 1-year cache headers (`max-age=31536000`).
   - Technical PDF documents under `/public/docs/*` are configured with 24-hour freshness and 7-day stale-while-revalidate headers.
