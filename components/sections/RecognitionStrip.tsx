"use client";

import React, { useState } from "react";
import Image from "next/image";
import { recognitionData, RecognitionItem } from "@/content/recognition";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";

export interface RecognitionStripProps {
  size?: "compact" | "large";
  id?: string;
  className?: string;
  showHeading?: boolean;
}

export function RecognitionStrip({
  size = "compact",
  id,
  className = "",
  showHeading = false,
}: RecognitionStripProps) {
  const [selectedItem, setSelectedItem] = useState<RecognitionItem | null>(null);

  const isLarge = size === "large";

  return (
    <section
      id={id}
      aria-label="Verified Company Recognition & Programs"
      className={`${isLarge ? "py-14 sm:py-16" : "py-8"} bg-white ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Verified Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Company Recognition &amp; Programs
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7F] mt-2 leading-relaxed">
              Official government recognition and trade expo participation credentials.
            </p>
          </div>
        )}

        {/* Centered 2-Card Row (No Awkward 3rd Gap) */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-5 sm:gap-6 max-w-3xl mx-auto">
          {recognitionData.map((item) => (
            <Card
              key={item.id}
              variant="white"
              hoverable
              className={`flex-1 flex flex-col justify-between cursor-pointer border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-md transition-all group focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:ring-offset-2 ${
                isLarge ? "p-6" : "p-4 sm:p-5"
              }`}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View full certificate: ${item.title}`}
            >
              <div className="flex items-start gap-3.5">
                {/* Small Certificate Preview Thumbnail */}
                <div className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden border border-[#E2E8F0] shrink-0 bg-[#F7F9FC]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={160}
                    height={110}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/10 transition-colors flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card Header & Title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant={item.id === "dpiit" ? "blue" : "cyan"} size="sm">
                      {item.programme}
                    </Badge>
                    <span className="text-[10px] font-mono text-[#5B6B7F]">
                      #{item.certificateNumber}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] leading-snug group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#5B6B7F] mt-1 line-clamp-2 leading-relaxed">
                    {item.issuer}
                  </p>
                </div>
              </div>

              {/* Extended info for Large variant */}
              {isLarge && (
                <p className="text-xs text-[#1F2937] mt-4 pt-3 border-t border-[#F1F5F9] leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* View Certificate Action Hint */}
              <div className="mt-3.5 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-semibold text-[#2563EB]">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Click to view full certificate
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Exact Required Disclaimer */}
        <p className="text-center text-[11px] text-[#5B6B7F] max-w-2xl mx-auto mt-6 leading-relaxed">
          Participation in programs, expos and recognitions listed here does not imply endorsement,
          procurement or partnership with any government body.
        </p>
      </div>

      {/* Accessible Full-Certificate Modal */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          maxWidth="xl"
        >
          <div className="space-y-4">
            {/* Full High-Resolution Certificate Image */}
            <div className="rounded-lg overflow-hidden border border-[#E2E8F0] shadow-xs bg-[#F7F9FC]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                width={1024}
                height={selectedItem.id === "dpiit" ? 708 : 724}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Certificate Caption & Metadata */}
            <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#E2E8F0] space-y-2">
              <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="pt-2 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-[#5B6B7F]">
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Issuer:</span> {selectedItem.issuer}
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Certificate Number:</span>{" "}
                  <span className="font-mono text-[#2563EB] font-bold">
                    {selectedItem.certificateNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default RecognitionStrip;
