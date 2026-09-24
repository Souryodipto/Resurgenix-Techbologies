"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

/**
 * Accessible Accordion component following WAI-ARIA Accordion pattern.
 */
export function Accordion({ items, allowMultiple = false, className = "" }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `accordion-btn-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={index} className="py-4 sm:py-5">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#0B1F3A] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded-[6px] py-1 cursor-pointer"
              >
                <span className="pr-4">{item.question}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-center text-xs text-[#5B6B7F] transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#2563EB] border-blue-200" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`mt-3 text-xs sm:text-sm text-[#5B6B7F] leading-relaxed pr-6 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
