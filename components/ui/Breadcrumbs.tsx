import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  includeJsonLd?: boolean;
}

/**
 * Accessible Breadcrumbs component complying with WAI-ARIA breadcrumb pattern.
 * Supports automated Schema.org BreadcrumbList JSON-LD generation for search engines and GEO.
 */
export function Breadcrumbs({ items, className = "", includeJsonLd = true }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  // Schema.org BreadcrumbList structure
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${siteConfig.siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <nav aria-label="Breadcrumb" className={`text-xs text-[#5B6B7F] mb-6 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
          <li>
            <Link
              href="/"
              className="hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
            >
              Home
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                <span className="text-[#CBD5E1]" aria-hidden="true">
                  /
                </span>
                {isLast || !item.href ? (
                  <span className="font-semibold text-[#0B1F3A]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
