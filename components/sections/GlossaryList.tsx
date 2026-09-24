"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlossaryTerm } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

export function GlossaryList({ terms }: GlossaryListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI & Computer Vision",
    "Surveillance Hardware",
    "Compliance & Standards",
  ];

  const filteredTerms = terms.filter((term) => {
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (term.acronym && term.acronym.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search & Category Filter Controls */}
      <div className="bg-[#F7F9FC] border border-[#E2E8F0] p-4 sm:p-5 rounded-2xl mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search terms, acronyms, definitions (e.g. RTSP, ONVIF, Edge AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#5B6B7F] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5B6B7F] hover:text-[#0B1F3A]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "bg-white text-[#5B6B7F] border border-[#E2E8F0] hover:bg-[#F7F9FC] hover:text-[#0B1F3A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-[#5B6B7F] mb-4 flex items-center justify-between">
        <span>
          Showing <strong>{filteredTerms.length}</strong> of {terms.length} terms
        </span>
        {selectedCategory !== "All" && (
          <span className="font-medium text-[#2563EB]">Filtered by: {selectedCategory}</span>
        )}
      </div>

      {/* Term Cards */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <div className="p-8 text-center bg-[#F7F9FC] rounded-2xl border border-[#E2E8F0] text-xs text-[#5B6B7F]">
            No glossary terms match your search &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
          </div>
        ) : (
          filteredTerms.map((term) => (
            <div
              key={term.slug}
              id={term.slug}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#F7F9FC]">
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A]">{term.term}</h2>
                  {term.acronym && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] font-bold border border-blue-100">
                      {term.acronym}
                    </span>
                  )}
                </div>
                <Badge
                  variant={
                    term.category === "AI & Computer Vision"
                      ? "blue"
                      : term.category === "Compliance & Standards"
                        ? "emerald"
                        : "neutral"
                  }
                  size="sm"
                >
                  {term.category}
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed mb-4">
                {term.shortDefinition}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E2E8F0] text-xs text-[#5B6B7F]">
                <span className="font-semibold text-[#0B1F3A]">Related Capabilities:</span>
                {term.relatedSolutionSlugs.map((sSlug) => (
                  <Link
                    key={sSlug}
                    href={`/solutions/${sSlug}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F7F9FC] border border-[#E2E8F0] text-[11px] font-medium text-[#2563EB] hover:border-[#2563EB] transition-colors"
                  >
                    {sSlug.replace(/-/g, " ")} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
