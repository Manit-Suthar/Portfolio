"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const { identity } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 overflow-hidden">
      {/* Hero section ambient glows — complement the Matrix background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft green ambient top-left */}
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[#22C55E]/8 blur-[120px]" />
        {/* Soft purple ambient top-right */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#5425A6]/10 blur-[120px]" />
        {/* Center radial vignette to keep text readable */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-[#08090D]/60" />
      </div>

      <div className="w-full text-center max-w-3xl mx-auto space-y-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151720]/80 border border-[#22C55E]/30 text-xs text-[#9298A7] shadow-lg shadow-[#22C55E]/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-white font-medium">{identity.statusBadge}</span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1 text-[#F5F5F5]">
            <MapPin className="w-3 h-3 text-[#22C55E]" />
            {identity.location}
          </span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.08]"
        >
          {identity.name}
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl font-mono text-[#22C55E] font-medium"
        >
          {identity.title}
        </motion.p>

        {/* Introduction Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg text-[#9298A7] max-w-2xl mx-auto leading-relaxed"
        >
          &ldquo;{identity.headline}&rdquo;
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#22C55E] text-[#08090D] font-bold text-xs sm:text-sm hover:bg-[#16A34A] transition-all shadow-lg shadow-[#22C55E]/20"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={identity.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#151720] border border-white/10 text-[#F5F5F5] text-xs sm:text-sm hover:border-[#22C55E]/40 hover:bg-[#1A1D28] transition-all"
          >
            <FileDown className="w-4 h-4 text-[#22C55E]" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#151720] border border-white/10 text-[#9298A7] hover:text-[#22C55E] hover:border-[#22C55E]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#151720] border border-white/10 text-[#9298A7] hover:text-[#22C55E] hover:border-[#22C55E]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
