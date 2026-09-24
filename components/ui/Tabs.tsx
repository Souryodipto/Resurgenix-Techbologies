"use client";

import React, { useState, useRef, KeyboardEvent } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

/**
 * Accessible Tabs component complying with WAI-ARIA Tabs design pattern.
 */
export function Tabs({ tabs, defaultTabId, className = "" }: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || (tabs[0] ? tabs[0].id : ""));
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let targetIndex = currentIndex;
    if (e.key === "ArrowRight") {
      targetIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      targetIndex = 0;
    } else if (e.key === "End") {
      targetIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveTabId(tabs[targetIndex].id);
    tabRefs.current[targetIndex]?.focus();
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex items-center gap-2 border-b border-[#E2E8F0] overflow-x-auto pb-px"
      >
        {tabs.map((tab, idx) => {
          const isSelected = tab.id === activeTabId;
          const tabId = `tab-${tab.id}`;
          const panelId = `panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-[8px] transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                isSelected
                  ? "text-[#2563EB] border-b-2 border-[#2563EB] bg-blue-50/50"
                  : "text-[#5B6B7F] hover:text-[#0B1F3A] hover:bg-[#F7F9FC]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {activeTab && (
        <div
          id={`panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.id}`}
          tabIndex={0}
          className="pt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-[8px]"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}

export default Tabs;
