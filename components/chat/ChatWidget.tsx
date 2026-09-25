"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site.config";
import {
  trackChatOpen,
  trackChatMessageSent,
  trackChatFallbackShown,
  trackChatSourceClick,
  trackChatCtaClick,
  trackChatCallbackSubmitted,
} from "@/lib/analytics";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  sourceTitle?: string;
  sourceUrl?: string;
  relatedLinks?: { label: string; url: string }[];
  isFallback?: boolean;
  timestamp: string;
}

const STARTER_CHIPS = [
  "What is Resurgenix Technologies?",
  "Will we need to replace all our existing cameras?",
  "Can the system operate completely offline in an air-gapped facility?",
];

const INITIAL_BOT_MESSAGE: ChatMessage = {
  id: "welcome-msg",
  sender: "bot",
  text: "Hello! I am the Resurgenix website assistant. I can answer questions about our AI video intelligence capabilities, architecture, camera compatibility, and pilot protocols directly from published resurgenix.com documentation.",
  sourceTitle: "Resurgenix Overview",
  sourceUrl: "/about",
  relatedLinks: [
    { label: "Platform Architecture", url: "/how-it-works" },
    { label: "14-Day Pilot Protocol", url: "/request-pilot" },
  ],
  timestamp: "Just now",
};

// Prefers reduced motion via useSyncExternalStore (eliminates set-state-in-effect)
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

let globalMessageSeq = 0;
function createMessageId(prefix: string): string {
  globalMessageSeq += 1;
  return `${prefix}-${globalMessageSeq}`;
}

/**
 * Z-INDEX ORDER HIERARCHY (Single Source of Truth):
 * 1. Header / Navigation: z-40
 * 2. Mobile Sticky CTA Bar & WhatsApp Button: z-45
 * 3. Chatbot FAB & Nudge Bubble: z-[46]
 * 4. Chatbot Open Dialog Panel: z-[48]
 * 5. Fullscreen Modals / Video Lightboxes: z-50 to z-[100]
 */

export function ChatWidget() {
  const pathname = usePathname();
  const isFormPage =
    pathname.startsWith("/request-demo") ||
    pathname.startsWith("/request-pilot") ||
    pathname.startsWith("/contact");

  const [isOpen, setIsOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // Callback form state
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackEmail, setCallbackEmail] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackMessage, setCallbackMessage] = useState("");
  const [callbackSubmitting, setCallbackSubmitting] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [callbackError, setCallbackError] = useState("");

  // Chat message history (session-scoped)
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_MESSAGE]);

  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll detection for non-collision with mobile sticky CTA bar
  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SessionStorage-gated nudge bubble (1.4s after first load)
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const hasSeenNudge = sessionStorage.getItem("resurgenix_chat_nudge_seen");
      if (!hasSeenNudge) {
        const timer = setTimeout(() => {
          setShowNudge(true);
          sessionStorage.setItem("resurgenix_chat_nudge_seen", "true");
        }, 1400);
        return () => clearTimeout(timer);
      }
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  // Auto-scroll messages list
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen, scrollToBottom]);

  // Focus management on open/close
  useEffect(() => {
    if (isOpen) {
      trackChatOpen();
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      fabRef.current?.focus();
    }
  }, [isOpen]);

  // Keyboard accessibility: Escape to close and focus trap inside panel
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => {
      if (!prev) {
        setShowNudge(false);
      }
      return !prev;
    });
  };

  const handleOpenFromNudge = () => {
    setShowNudge(false);
    setIsOpen(true);
  };

  // Send message handler
  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputMessage).trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: createMessageId("user"),
      sender: "user",
      text: messageText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    trackChatMessageSent(messageText.length);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();

      // Respect prefers-reduced-motion for typing delay
      if (!prefersReducedMotion) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      const botMessage: ChatMessage = {
        id: createMessageId("bot"),
        sender: "bot",
        text: data.answer || "I could not retrieve an answer. Please contact our team directly.",
        sourceTitle: data.sourceTitle,
        sourceUrl: data.sourceUrl,
        relatedLinks: data.relatedLinks,
        isFallback: data.isFallback,
        timestamp: "Just now",
      };

      if (data.isFallback) {
        trackChatFallbackShown(messageText);
        setCallbackMessage(`Question: "${messageText}"\nFollow-up requested from Resurgenix Assistant.`);
      }

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: createMessageId("err"),
        sender: "bot",
        text: "I can only answer from what's published on resurgenix.com, and I don't have that specific detail — want to talk to the team instead?",
        isFallback: true,
        relatedLinks: [
          { label: "Request a Demo", url: "/request-demo" },
          { label: "Request a Pilot", url: "/request-pilot" },
        ],
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Submit inline callback lead form
  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName.trim() || !callbackEmail.trim()) {
      setCallbackError("Please provide your name and work email.");
      return;
    }

    setCallbackSubmitting(true);
    setCallbackError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          fullName: callbackName.trim(),
          workEmail: callbackEmail.trim(),
          phone: callbackPhone.trim() || undefined,
          company: "Chatbot Inquiry",
          notes: callbackMessage,
          source: "chatbot_callback_miniform",
        }),
      });

      const resData = await res.json();
      if (res.ok && resData.success) {
        setCallbackSuccess(true);
        trackChatCallbackSubmitted();
      } else {
        setCallbackError(resData.error || "Submission failed. Please try again.");
      }
    } catch {
      setCallbackError("Network error. Please reach us directly via WhatsApp.");
    } finally {
      setCallbackSubmitting(false);
    }
  };

  // Dynamic positioning for FAB (clears mobile sticky CTA bar when active)
  const fabBottomClass =
    !isFormPage && isPastHero
      ? "bottom-[76px] sm:bottom-6 left-4 sm:left-6"
      : "bottom-4 sm:bottom-6 left-4 sm:left-6";

  return (
    <>
      {/* 1. DISMISSIBLE NUDGE BUBBLE */}
      {showNudge && !isOpen && (
        <aside
          aria-label="Resurgenix Assistant Nudge"
          className={`fixed z-[46] ${fabBottomClass} mb-[70px] max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300`}
        >
          <div className="relative bg-[#0B1F3A] text-white p-3.5 rounded-2xl shadow-xl border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setShowNudge(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-[#0B1F3A] flex items-center justify-center text-xs font-bold shadow-md hover:bg-slate-100 transition-colors"
              aria-label="Dismiss message"
            >
              &times;
            </button>
            <p className="font-medium pr-3">
              Ask me anything about Resurgenix
            </p>
            <button
              type="button"
              onClick={handleOpenFromNudge}
              className="mt-2 text-[11px] font-semibold text-[#06B6D4] hover:underline flex items-center gap-1"
            >
              Start conversation &rarr;
            </button>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-2 left-6 w-3 h-3 bg-[#0B1F3A] rotate-45 border-r border-b border-white/10" />
          </div>
        </aside>
      )}

      {/* 2. FLOATING ACTION BUTTON (58px Navy Circle with Pulsing Cyan Dot) */}
      <button
        ref={fabRef}
        type="button"
        id="chat-fab-toggle"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="resurgenix-chat-panel"
        aria-label={isOpen ? "Close Resurgenix Assistant" : "Open Resurgenix Assistant"}
        className={`fixed z-[46] ${fabBottomClass} w-[58px] h-[58px] rounded-full bg-[#0B1F3A] hover:bg-[#071426] text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#06B6D4]/40 select-none group`}
      >
        {/* Pulsing Cyan 'New' Indicator Dot */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#06B6D4] ring-2 ring-white" />
          </span>
        )}

        {isOpen ? (
          // Close 'X' Icon
          <svg
            className="w-6 h-6 text-white transition-transform group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat Bubble Icon
          <svg
            className="w-6 h-6 text-white transition-transform group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* 3. CHAT DIALOG PANEL */}
      {isOpen && (
        <div
          ref={panelRef}
          id="resurgenix-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Resurgenix Assistant Chat"
          className="fixed z-[48] inset-x-2 bottom-2 top-14 sm:inset-auto sm:bottom-20 sm:left-6 sm:w-[376px] sm:h-[540px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-[#0B1F3A] text-white px-4 py-3 flex items-center justify-between border-b border-[#1E293B] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="text-sm font-bold tracking-tight text-white">Resurgenix Assistant</h2>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" title="Online" />
                </div>
                <p className="text-[11px] text-slate-300">Answers from resurgenix.com</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-300 hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
              aria-label="Close chat window"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Message List */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8FAFC]"
            aria-live="polite"
            role="log"
          >
            {/* Starter Suggestion Chips (visible when 1 message) */}
            {messages.length === 1 && (
              <div className="pt-1 pb-2">
                <p className="text-[11px] font-semibold text-[#64748B] mb-2 uppercase tracking-wider">
                  Popular Inquiries:
                </p>
                <div className="flex flex-col gap-1.5">
                  {STARTER_CHIPS.map((chip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(chip)}
                      className="text-left text-xs bg-white hover:bg-[#EEF2F6] text-[#0B1F3A] font-medium p-2.5 rounded-xl border border-[#E2E8F0] shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Rendered Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#2563EB] text-white rounded-2xl rounded-br-xs shadow-xs font-medium"
                      : "bg-white text-[#1E293B] border border-[#E2E8F0] rounded-2xl rounded-bl-xs shadow-xs"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* Fallback Action Buttons */}
                  {msg.isFallback && (
                    <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] flex flex-wrap gap-2">
                      <Link
                        href="/request-demo"
                        onClick={() => trackChatCtaClick("Request a Demo", "/request-demo")}
                        className="inline-flex items-center justify-center min-h-[36px] px-3 rounded-lg bg-[#2563EB] text-white text-[11px] font-bold hover:bg-[#1D4ED8] transition-colors focus:ring-2 focus:ring-[#2563EB]"
                      >
                        Request a Demo
                      </Link>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackChatCtaClick("WhatsApp", siteConfig.contact.whatsappUrl)}
                        className="inline-flex items-center justify-center min-h-[36px] px-3 rounded-lg bg-[#25D366] text-white text-[11px] font-bold hover:bg-[#20BD5C] transition-colors focus:ring-2 focus:ring-[#25D366]"
                      >
                        WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => setShowCallbackForm(true)}
                        className="inline-flex items-center justify-center min-h-[36px] px-3 rounded-lg bg-[#F1F5F9] text-[#0B1F3A] text-[11px] font-bold hover:bg-[#E2E8F0] transition-colors border border-[#CBD5E1]"
                      >
                        Request a Callback
                      </button>
                    </div>
                  )}

                  {/* Grounded Source Link */}
                  {msg.sourceTitle && msg.sourceUrl && (
                    <div className="mt-2 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#64748B]">
                      <span>Source:</span>
                      <Link
                        href={msg.sourceUrl}
                        onClick={() => trackChatSourceClick(msg.sourceTitle || "", msg.sourceUrl || "")}
                        className="font-semibold text-[#2563EB] hover:underline truncate max-w-[190px]"
                        title={msg.sourceTitle}
                      >
                        {msg.sourceTitle}
                      </Link>
                    </div>
                  )}

                  {/* Related Links */}
                  {msg.relatedLinks && msg.relatedLinks.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.relatedLinks.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          href={link.url}
                          onClick={() => trackChatCtaClick(link.label, link.url)}
                          className="text-[10px] bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] px-2 py-1 rounded-md font-medium transition-colors"
                        >
                          {link.label} &rarr;
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-[#94A3B8] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-[#E2E8F0] rounded-2xl rounded-bl-xs w-16 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            )}

            {/* Inline Callback Mini-Form Modal/Sheet inside chat panel */}
            {showCallbackForm && (
              <div className="p-3.5 bg-white border border-[#CBD5E1] rounded-xl shadow-md animate-in fade-in duration-150">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-[#0B1F3A]">Request a Callback</h3>
                  <button
                    type="button"
                    onClick={() => setShowCallbackForm(false)}
                    className="text-[#64748B] hover:text-[#0B1F3A] text-sm font-bold"
                    aria-label="Close callback form"
                  >
                    &times;
                  </button>
                </div>

                {callbackSuccess ? (
                  <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs leading-relaxed">
                    Thank you! Our technical team has received your inquiry and will reach out to your work email shortly.
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-2">
                    {callbackError && (
                      <p className="text-[11px] text-red-600 font-medium">{callbackError}</p>
                    )}
                    <div>
                      <label className="block text-[10px] font-semibold text-[#64748B] uppercase">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#CBD5E1] focus:ring-1 focus:ring-[#2563EB] outline-none"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#64748B] uppercase">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={callbackEmail}
                        onChange={(e) => setCallbackEmail(e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#CBD5E1] focus:ring-1 focus:ring-[#2563EB] outline-none"
                        placeholder="rahul@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#64748B] uppercase">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#CBD5E1] focus:ring-1 focus:ring-[#2563EB] outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={callbackSubmitting}
                      className="w-full min-h-[44px] bg-[#0B1F3A] hover:bg-[#1E293B] text-white font-bold text-xs rounded-lg transition-colors disabled:opacity-50"
                    >
                      {callbackSubmitting ? "Submitting..." : "Submit Callback Request"}
                    </button>
                  </form>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E2E8F0] flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about Resurgenix..."
              maxLength={500}
              disabled={isLoading}
              className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Send question"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Persistent Grounding Footer */}
          <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-3 py-1.5 text-center shrink-0">
            <p className="text-[10px] text-[#64748B]">
              Trained only on resurgenix.com — not a substitute for a technical conversation.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
