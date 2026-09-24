"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResourceArticle, ComparisonEntry } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

interface ResourcesListProps {
  articles: ResourceArticle[];
  comparisons: ComparisonEntry[];
}

export function ResourcesList({ articles, comparisons }: ResourcesListProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [selectedStage, setSelectedStage] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const topics = ["All", "architecture", "technology", "compliance", "guide", "strategy"];
  const stages = ["All", "TOFU", "MOFU", "BOFU"];

  const filteredArticles = articles.filter((art) => {
    const matchesTopic = selectedTopic === "All" || art.category === selectedTopic;
    const matchesStage = selectedStage === "All" || art.funnelStage === selectedStage;
    const matchesSearch =
      searchQuery.trim() === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTopic && matchesStage && matchesSearch;
  });

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="bg-[#F7F9FC] border border-[#E2E8F0] p-5 rounded-2xl mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles, guides, topics (e.g. RTSP, pilot, restricted zone, ANPR, DPDP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#5B6B7F] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
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

        {/* Filter Rows */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#E2E8F0]">
          {/* Topic Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-[#0B1F3A] mr-1">Topic:</span>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                  selectedTopic === t
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "bg-white text-[#5B6B7F] border border-[#E2E8F0] hover:bg-[#F7F9FC] hover:text-[#0B1F3A]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Funnel Stage Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-[#0B1F3A] mr-1">Stage:</span>
            {stages.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStage(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition ${
                  selectedStage === st
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "bg-white text-[#5B6B7F] border border-[#E2E8F0] hover:bg-[#F7F9FC] hover:text-[#0B1F3A]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count Summary */}
      <div className="text-xs text-[#5B6B7F] mb-6 flex items-center justify-between">
        <span>
          Showing <strong>{filteredArticles.length}</strong> of {articles.length} publications
        </span>
        {(selectedTopic !== "All" || selectedStage !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedTopic("All");
              setSelectedStage("All");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-[#2563EB] hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-[#F7F9FC] rounded-2xl border border-[#E2E8F0] text-xs text-[#5B6B7F]">
            No publications match your filter criteria. Try adjusting your search or filters.
          </div>
        ) : (
          filteredArticles.map((art) => (
            <article
              key={art.slug}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="blue" size="sm">
                    {art.category.toUpperCase()}
                  </Badge>
                  <span className="font-mono text-[10px] font-bold text-[#5B6B7F] bg-[#F7F9FC] px-2 py-0.5 rounded border border-[#E2E8F0]">
                    {art.funnelStage}
                  </span>
                </div>

                <h2 className="text-base font-extrabold text-[#0B1F3A] leading-snug mb-2 line-clamp-2">
                  <Link href={`/resources/${art.slug}`} className="hover:text-[#2563EB] transition-colors">
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#5B6B7F] leading-relaxed line-clamp-3 mb-4">
                  {art.shortSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F9FC] flex items-center justify-between text-[11px] text-[#5B6B7F]">
                <span>{art.readTime}</span>
                <Link
                  href={`/resources/${art.slug}`}
                  className="font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Architectural Comparisons Section */}
      <section className="mb-14">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
            Objective Side-by-Side Evaluations
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
            Architectural &amp; Technology Comparisons
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6B7F] mt-1">
            Neutral, criteria-based comparisons evaluating features, deployment, security, scalability, and TCO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((comp) => (
            <div
              key={comp.slug}
              className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-white px-2 py-0.5 rounded border border-[#E2E8F0] inline-block mb-3">
                  Comparison
                </span>
                <h3 className="text-base font-extrabold text-[#0B1F3A] leading-snug mb-2">
                  <Link href={`/compare/${comp.slug}`} className="hover:text-[#2563EB] transition-colors">
                    {comp.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed line-clamp-3 mb-4">
                  {comp.shortSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0]">
                <Link
                  href={`/compare/${comp.slug}`}
                  className="text-xs font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                >
                  View Side-by-Side Matrix &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
