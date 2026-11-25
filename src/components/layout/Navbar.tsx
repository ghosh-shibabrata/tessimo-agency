"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TessimoIcon } from "@/components/brand/TessimoIcon";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Automation", href: "#approach" },
  { name: "Pricing", href: "#pricing" },
  { name: "Founder", href: "#founder" },
  { name: "Insights", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-xl border-b border-[#E2DFD7] shadow-[0_4px_24px_rgba(25,25,25,0.02)]"
          : "bg-[#FAF9F5]/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 h-12 flex items-center justify-between">
        {/* Left: Pure Logo Only (No text, as requested) */}
        <Link
          href="/"
          className="group inline-flex items-center focus:outline-none p-1 rounded-md"
          aria-label="Tessimo Home"
        >
          <TessimoIcon
            size={24}
            variant="teal"
            className="transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center: Apple-style Minimal Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Apple-style Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] font-normal tracking-[-0.01em] text-[#66635E] hover:text-[#191919] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Apple Pill Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-tessimo-ai"));
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D9488]/10 hover:bg-[#0D9488]/20 border border-[#0D9488]/25 text-[11px] font-semibold text-[#0D9488] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#0D9488]" />
            <span>Tessimo AI</span>
          </button>

          <Link
            href="#contact"
            className="text-[12px] font-medium text-[#66635E] hover:text-[#191919] px-2.5 py-1 transition-colors"
          >
            Book demo
          </Link>

          <Link
            href="#contact"
            className="btn-apple-white text-[12px] !py-1 !px-3.5"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full text-[#1D1D1F] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-4 h-3 flex flex-col justify-between">
            <span
              className={`block w-full h-[1.5px] bg-[#1D1D1F] transition-transform duration-200 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-full h-[1.5px] bg-[#1D1D1F] transition-transform duration-200 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-[#E2DFD7] bg-[#FAF9F5]/98 backdrop-blur-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3 text-lg font-medium tracking-tight text-[#191919] border-b border-[#E2DFD7] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#0D9488] opacity-70" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    window.dispatchEvent(new CustomEvent("open-tessimo-ai"));
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/20 text-xs font-semibold text-[#0D9488] hover:bg-[#0D9488]/15 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <TessimoIcon size={18} variant="teal" />
                    <span>Tessimo AI Assistant</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#FAF9F5] px-2 py-0.5 rounded-full border border-[#0D9488]/20">
                    Instant
                  </span>
                </button>

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-apple-white w-full text-center flex items-center justify-center gap-1.5 !py-3"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-apple-secondary w-full text-center flex items-center justify-center gap-1.5 !py-3"
                >
                  <Calendar className="w-4 h-4 text-[#0D9488]" />
                  <span>Book a 15-min demo</span>
                </Link>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#66635E]">
                <span>TESSIMO TECHNOLOGY</span>
                <span className="text-[#0D9488]">WEBSITES & AUTOMATION</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
