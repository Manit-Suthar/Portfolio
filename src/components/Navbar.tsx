"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      const sections = navItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto nav-pill-glass rounded-full px-3.5 py-2 flex items-center justify-between gap-6 max-w-2xl w-full">
        {/* Monogram */}
        <Link
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full bg-[#151720] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-[#22C55E]/60 transition-colors">
            {PORTFOLIO_DATA.identity.monogram}
          </div>
          <span className="font-semibold text-xs tracking-tight text-white hidden sm:inline-block">
            {PORTFOLIO_DATA.identity.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30"
                    : "text-[#9298A7] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href={PORTFOLIO_DATA.identity.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1 rounded-full text-xs font-medium text-[#08090D] bg-[#22C55E] hover:bg-[#16A34A] transition-colors shadow-sm font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden p-1.5 rounded-full text-[#9298A7] hover:text-white hover:bg-white/5 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto nav-pill-glass rounded-2xl p-4 flex flex-col gap-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-[#9298A7] hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href={PORTFOLIO_DATA.identity.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-2 rounded-lg text-xs font-semibold text-[#08090D] bg-[#22C55E]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
