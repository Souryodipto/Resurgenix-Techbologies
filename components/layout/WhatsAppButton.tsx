"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site.config";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Global Floating WhatsApp Button
 * Links to https://wa.me/916290985464 with URL-encoded prefilled message
 * including current page context. Automatically coordinates vertical positioning
 * on mobile to prevent overlapping the MobileStickyCta bar.
 * Fires "whatsapp_click" analytics hook event (no-op until Step 14).
 */
export function WhatsAppButton() {
  const pathname = usePathname();
  const [isPastHero, setIsPastHero] = useState(false);

  // Form routes where MobileStickyCta is hidden
  const isFormPage =
    pathname.startsWith("/request-demo") ||
    pathname.startsWith("/request-pilot") ||
    pathname.startsWith("/contact");

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageLabel =
    pathname === "/" ? "Homepage" : pathname.replace(/^\//, "").split("/")[0].replace(/-/g, " ");

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(pathname);
  };

  const prefilledText = encodeURIComponent(
    `Hello Resurgenix Technologies, I am inquiring about AI video intelligence solutions for our organization (Page: ${pageLabel}).`
  );

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${prefilledText}`;

  // If on mobile and past hero on non-form pages, raise button by 68px to clear sticky CTA bar
  const bottomPositionClass =
    !isFormPage && isPastHero
      ? "bottom-[76px] sm:bottom-6 right-4 sm:right-6"
      : "bottom-4 sm:bottom-6 right-4 sm:right-6";

  return (
    <aside aria-label="Direct messaging contact">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className={`fixed z-45 flex items-center gap-2 px-3.5 sm:px-4 py-3 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 select-none group ${bottomPositionClass}`}
        aria-label="Chat with Resurgenix via WhatsApp (opens in new window)"
      >
        {/* Official WhatsApp Vector Icon */}
        <svg
          className="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.031 0C5.395 0 0 5.395 0 12.031c0 2.115.549 4.179 1.594 5.992L.062 24l6.156-1.503c1.745.952 3.714 1.534 5.813 1.534 6.636 0 12.031-5.395 12.031-12.031C24.062 5.395 18.667 0 12.031 0zm.001 22.012c-1.897 0-3.753-.512-5.367-1.482l-.385-.232-3.66.893.98-3.567-.253-.404a9.98 9.98 0 01-1.533-5.189c0-5.514 4.486-10 10-10 5.514 0 10 4.486 10 10 0 5.514-4.486 10-10 10zm5.485-7.493c-.301-.151-1.782-.88-2.058-.98-.276-.101-.477-.151-.678.151-.2.301-.778.98-.954 1.181-.176.2-.352.226-.653.075-.301-.151-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.151-.176.201-.301.301-.502.101-.2.05-.377-.025-.527-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.517l-.578-.01c-.2 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512s1.079 2.913 1.23 3.114c.151.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352z" />
        </svg>

        {/* Desktop Text Label */}
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">WhatsApp us</span>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
