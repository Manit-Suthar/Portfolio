"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Skills() {
  const { allTechnologies } = PORTFOLIO_DATA;

  // Split 31 technologies into 4 rows (~8, 8, 8, 7)
  const row1 = allTechnologies.slice(0, 8);
  const row2 = allTechnologies.slice(8, 16);
  const row3 = allTechnologies.slice(16, 24);
  const row4 = allTechnologies.slice(24);

  const pillClass =
    "glass-card-subtle px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2.5 border border-white/5 hover:border-[#22C55E]/50 hover:bg-[#1A1D28] transition-all cursor-default shadow-sm select-none group";

  const renderRow = (
    items: typeof row1,
    animClass: string,
    dotOpacity = ""
  ) => (
    <div
      className={`flex w-max ${animClass} hover:[animation-play-state:paused] gap-3`}
    >
      {[...items, ...items].map((tech, idx) => (
        <div key={tech.name + idx} className={pillClass}>
          <span
            className={`block w-2 h-2 shrink-0 rounded-full bg-[#22C55E] ${dotOpacity} group-hover:scale-125 transition-transform`}
          />

          <span className="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-white">
            {tech.name}
          </span>

          <span className="text-[10px] font-mono text-[#9298A7]/70 bg-white/5 px-2 py-0.5 rounded-full">
            {tech.category}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="tech-stack" className="py-24 max-w-7xl mx-auto z-10 relative overflow-hidden">
      <div className="mb-14 text-center max-w-2xl mx-auto px-4">
        <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-2">
          Engineering Arsenal
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight mb-3">
          Technologies &amp; Systems
        </h2>
        <p className="text-sm text-[#9298A7]">
          Unified floating stack: runtime environments, distributed protocols, databases, and applied AI libraries.
        </p>
      </div>

      {/* 4-Row Floating Marquee */}
      <div className="relative py-4 space-y-5">
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#08090D] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#08090D] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Forward fast */}
        {renderRow(row1, "animate-marquee-slow")}
        {/* Row 2: Reverse fast */}
        {renderRow(row2, "animate-marquee-reverse", "opacity-80")}
        {/* Row 3: Forward slow */}
        {renderRow(row3, "animate-marquee-slow")}
        {/* Row 4: Reverse slow */}
        {renderRow(row4, "animate-marquee-reverse", "opacity-80")}
      </div>
    </section>
  );
}
