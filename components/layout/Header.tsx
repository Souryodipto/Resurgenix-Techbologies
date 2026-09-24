"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { headerNav } from "@/content/nav";
import { siteConfig } from "@/content/site.config";

/**
 * Resurgenix SVG Wordmark + Monogram Component
 * Temporary vector placeholder until official master SVG logo asset is provided.
 */
export function ResurgenixLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Camera/AI Monogram Icon */}
      <svg
        className="w-8 h-8 flex-shrink-0"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="8" fill="#0B1F3A" />
        {/* Optical Sensor Aperture */}
        <circle cx="18" cy="18" r="11" stroke="#2563EB" strokeWidth="2" strokeDasharray="3 2" />
        <circle
          cx="18"
          cy="18"
          r="6"
          fill="#06B6D4"
          fillOpacity="0.25"
          stroke="#06B6D4"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="18" r="2.5" fill="#2563EB" />
        {/* Precision Target Accents */}
        <path
          d="M18 4V8M18 28V32M4 18H8M28 18H32"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-[1.125rem] leading-none tracking-tight text-[#0B1F3A]">
          {siteConfig.company.brandName}
        </span>
        <span className="font-mono text-[0.625rem] tracking-wider text-[#5B6B7F] uppercase mt-0.5">
          Video Intelligence
        </span>
      </div>
    </div>
  );
}

/**
 * Sticky Header with accessible dropdowns and full-height mobile drawer.
 * Strict white theme: no blur, no glassmorphism, crisp borders on scroll.
 */
export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Monitor scroll for clean crisp border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change by tracking previous pathname during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }

  // Close desktop dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleDesktopMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const toggleMobileAccordion = (sectionName: string) => {
    setMobileAccordion((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-40 bg-white transition-colors duration-150 ${
        isScrolled ? "border-b border-[#E2E8F0] shadow-xs" : "border-b border-transparent"
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
            aria-label={`${siteConfig.company.brandName} Homepage`}
          >
            <ResurgenixLogo />
          </Link>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* 1. Solutions Mega Menu Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopMenu("solutions")}
                onMouseEnter={() => setActiveMenu("solutions")}
                aria-expanded={activeMenu === "solutions"}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${
                  activeMenu === "solutions"
                    ? "text-[#2563EB] bg-[#F7F9FC]"
                    : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F7F9FC]"
                }`}
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === "solutions" ? "rotate-180 text-[#2563EB]" : "text-[#5B6B7F]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Solutions Mega Menu Dropdown */}
              {activeMenu === "solutions" && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[840px] bg-white border border-[#E2E8F0] rounded-[12px] shadow-lg p-6 z-50 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="Solutions Menu"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* Column 1: Core Video Intelligence */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] mb-3 pb-1 border-b border-[#E2E8F0]">
                        Core Video Intelligence
                      </div>
                      <div className="space-y-2.5">
                        {headerNav.solutionsMegaMenu[0].items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="group block p-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors">
                                {item.label}
                              </span>
                              <StatusBadge
                                status={
                                  item.badge === "Pilot"
                                    ? "pilot"
                                    : item.badge === "In Dev"
                                      ? "in-development"
                                      : "roadmap"
                                }
                                size="sm"
                              />
                            </div>
                            <p className="text-[11px] text-[#5B6B7F] line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Security & Access */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] mb-3 pb-1 border-b border-[#E2E8F0]">
                        Security &amp; Access
                      </div>
                      <div className="space-y-2.5">
                        {headerNav.solutionsMegaMenu[1].items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="group block p-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors">
                                {item.label}
                              </span>
                              <StatusBadge
                                status={
                                  item.badge === "Pilot"
                                    ? "pilot"
                                    : item.badge === "In Dev"
                                      ? "in-development"
                                      : "roadmap"
                                }
                                size="sm"
                              />
                            </div>
                            <p className="text-[11px] text-[#5B6B7F] line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Government & City */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] mb-3 pb-1 border-b border-[#E2E8F0]">
                        Government &amp; City
                      </div>
                      <div className="space-y-2.5">
                        {headerNav.solutionsMegaMenu[2].items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="group block p-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors">
                                {item.label}
                              </span>
                              <StatusBadge
                                status={
                                  item.badge === "Pilot"
                                    ? "pilot"
                                    : item.badge === "In Dev"
                                      ? "in-development"
                                      : "roadmap"
                                }
                                size="sm"
                              />
                            </div>
                            <p className="text-[11px] text-[#5B6B7F] line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mega Menu Footer Strip */}
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between bg-[#F7F9FC] -mx-6 -mb-6 p-4 rounded-b-[11px]">
                    <div className="text-xs text-[#5B6B7F]">
                      <span className="font-semibold text-[#0B1F3A]">
                        Existing Camera Evaluation:
                      </span>{" "}
                      Test AI detection modules on your current RTSP feeds without rip-and-replace.
                    </div>
                    <Link
                      href="/request-pilot"
                      className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 focus:outline-none focus:underline"
                    >
                      Request Pilot Program &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Industries Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopMenu("industries")}
                onMouseEnter={() => setActiveMenu("industries")}
                aria-expanded={activeMenu === "industries"}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${
                  activeMenu === "industries"
                    ? "text-[#2563EB] bg-[#F7F9FC]"
                    : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F7F9FC]"
                }`}
              >
                Industries
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === "industries" ? "rotate-180 text-[#2563EB]" : "text-[#5B6B7F]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Industries Dropdown */}
              {activeMenu === "industries" && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className="absolute left-0 top-full mt-2 w-72 bg-white border border-[#E2E8F0] rounded-[12px] shadow-lg p-3 z-50 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="Industries Menu"
                >
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] px-3 py-1 mb-1">
                    Industry Verticals
                  </div>
                  <div className="space-y-1">
                    {headerNav.industriesDropdown.map((ind) => (
                      <Link
                        key={ind.href}
                        href={ind.href}
                        role="menuitem"
                        className="block px-3 py-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#0B1F3A] hover:text-[#2563EB]">
                          {ind.label}
                        </div>
                        <div className="text-[11px] text-[#5B6B7F] truncate">{ind.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. How It Works Direct Link */}
            <Link
              href="/how-it-works"
              className={`px-3 py-2 text-sm font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${
                pathname === "/how-it-works"
                  ? "text-[#2563EB] font-semibold bg-[#F7F9FC]"
                  : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F7F9FC]"
              }`}
            >
              How It Works
            </Link>

            {/* 4. Resources Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopMenu("resources")}
                onMouseEnter={() => setActiveMenu("resources")}
                aria-expanded={activeMenu === "resources"}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${
                  activeMenu === "resources"
                    ? "text-[#2563EB] bg-[#F7F9FC]"
                    : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F7F9FC]"
                }`}
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === "resources" ? "rotate-180 text-[#2563EB]" : "text-[#5B6B7F]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Resources Dropdown */}
              {activeMenu === "resources" && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className="absolute left-0 top-full mt-2 w-72 bg-white border border-[#E2E8F0] rounded-[12px] shadow-lg p-3 z-50 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="Resources Menu"
                >
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] px-3 py-1 mb-1">
                    Knowledge &amp; Comparisons
                  </div>
                  <div className="space-y-1">
                    {headerNav.resourcesDropdown.map((res) => (
                      <Link
                        key={res.href}
                        href={res.href}
                        role="menuitem"
                        className="block px-3 py-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#0B1F3A] hover:text-[#2563EB]">
                          {res.label}
                        </div>
                        <div className="text-[11px] text-[#5B6B7F] truncate">{res.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. About Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopMenu("about")}
                onMouseEnter={() => setActiveMenu("about")}
                aria-expanded={activeMenu === "about"}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${
                  activeMenu === "about"
                    ? "text-[#2563EB] bg-[#F7F9FC]"
                    : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F7F9FC]"
                }`}
              >
                About
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === "about" ? "rotate-180 text-[#2563EB]" : "text-[#5B6B7F]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* About Dropdown */}
              {activeMenu === "about" && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className="absolute right-0 top-full mt-2 w-72 bg-white border border-[#E2E8F0] rounded-[12px] shadow-lg p-3 z-50 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="About Menu"
                >
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] px-3 py-1 mb-1">
                    Company &amp; Governance
                  </div>
                  <div className="space-y-1">
                    {headerNav.aboutDropdown.map((ab) => (
                      <Link
                        key={ab.href}
                        href={ab.href}
                        role="menuitem"
                        className="block px-3 py-2 rounded-[8px] hover:bg-[#F7F9FC] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#0B1F3A] hover:text-[#2563EB]">
                          {ab.label}
                        </div>
                        <div className="text-[11px] text-[#5B6B7F] truncate">{ab.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Primary Conversion Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <LinkButton
              href="/request-demo"
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
            >
              Request a Demo
            </LinkButton>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2.5 rounded-[10px] text-[#0B1F3A] hover:bg-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer (Slide-Down Full Panel) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-50 flex flex-col justify-between border-t border-[#E2E8F0] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="p-4 sm:p-6 space-y-4">
            {/* Solutions Accordion */}
            <div className="border border-[#E2E8F0] rounded-[10px] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("solutions")}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between bg-white text-left font-bold text-sm text-[#0B1F3A]"
              >
                <span>Solutions (9 Capabilities)</span>
                <svg
                  className={`w-4 h-4 text-[#5B6B7F] transition-transform ${
                    mobileAccordion === "solutions" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileAccordion === "solutions" && (
                <div className="p-3 bg-[#F7F9FC] border-t border-[#E2E8F0] space-y-2">
                  {headerNav.solutionsMegaMenu
                    .flatMap((g) => g.items)
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-2.5 rounded-lg bg-white border border-[#E2E8F0]/60 min-h-[44px]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#0B1F3A]">{item.label}</span>
                          <StatusBadge
                            status={
                              item.badge === "Pilot"
                                ? "pilot"
                                : item.badge === "In Dev"
                                  ? "in-development"
                                  : "roadmap"
                            }
                            size="sm"
                          />
                        </div>
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border border-[#E2E8F0] rounded-[10px] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("industries")}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between bg-white text-left font-bold text-sm text-[#0B1F3A]"
              >
                <span>Industries</span>
                <svg
                  className={`w-4 h-4 text-[#5B6B7F] transition-transform ${
                    mobileAccordion === "industries" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileAccordion === "industries" && (
                <div className="p-3 bg-[#F7F9FC] border-t border-[#E2E8F0] space-y-2">
                  {headerNav.industriesDropdown.map((ind) => (
                    <Link
                      key={ind.href}
                      href={ind.href}
                      className="block p-2.5 rounded-lg bg-white border border-[#E2E8F0]/60 text-xs font-bold text-[#0B1F3A] min-h-[44px]"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* How It Works Link */}
            <Link
              href="/how-it-works"
              className="flex items-center justify-between px-4 py-3 min-h-[48px] border border-[#E2E8F0] rounded-[10px] font-bold text-sm text-[#0B1F3A] hover:bg-[#F7F9FC]"
            >
              <span>How It Works</span>
              <span className="text-[#2563EB]">&rarr;</span>
            </Link>

            {/* Resources Accordion */}
            <div className="border border-[#E2E8F0] rounded-[10px] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("resources")}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between bg-white text-left font-bold text-sm text-[#0B1F3A]"
              >
                <span>Resources &amp; Comparisons</span>
                <svg
                  className={`w-4 h-4 text-[#5B6B7F] transition-transform ${
                    mobileAccordion === "resources" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileAccordion === "resources" && (
                <div className="p-3 bg-[#F7F9FC] border-t border-[#E2E8F0] space-y-2">
                  {headerNav.resourcesDropdown.map((res) => (
                    <Link
                      key={res.href}
                      href={res.href}
                      className="block p-2.5 rounded-lg bg-white border border-[#E2E8F0]/60 text-xs font-bold text-[#0B1F3A] min-h-[44px]"
                    >
                      {res.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Accordion */}
            <div className="border border-[#E2E8F0] rounded-[10px] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("about")}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between bg-white text-left font-bold text-sm text-[#0B1F3A]"
              >
                <span>Company &amp; Governance</span>
                <svg
                  className={`w-4 h-4 text-[#5B6B7F] transition-transform ${
                    mobileAccordion === "about" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileAccordion === "about" && (
                <div className="p-3 bg-[#F7F9FC] border-t border-[#E2E8F0] space-y-2">
                  {headerNav.aboutDropdown.map((ab) => (
                    <Link
                      key={ab.href}
                      href={ab.href}
                      className="block p-2.5 rounded-lg bg-white border border-[#E2E8F0]/60 text-xs font-bold text-[#0B1F3A] min-h-[44px]"
                    >
                      {ab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pinned Bottom Actions */}
          <div className="p-4 border-t border-[#E2E8F0] bg-white space-y-2.5 shadow-lg">
            <LinkButton
              href="/request-demo"
              variant="primary"
              size="lg"
              className="w-full justify-center min-h-[48px]"
            >
              Request a Demo
            </LinkButton>
            <LinkButton
              href="/request-pilot"
              variant="secondary"
              size="lg"
              className="w-full justify-center min-h-[48px]"
            >
              Request a Pilot Program
            </LinkButton>
            <div className="text-center pt-1">
              <span className="text-[11px] text-[#5B6B7F]">
                Kolkata HQ &bull; Contact: {siteConfig.contact.displayPhone}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
