import React from "react";

export interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Server-rendered Schema.org JSON-LD component.
 * Safely stringifies structured data without executing client-side scripts.
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, process.env.NODE_ENV === "development" ? 2 : undefined),
      }}
    />
  );
}
