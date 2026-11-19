"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;
  const currentExp = experience[0];
  const [photoIndex, setPhotoIndex] = useState(0);

  // Slow automatic cycling of photos on the right side
  useEffect(() => {
    if (!currentExp.images || currentExp.images.length <= 1) return;
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % currentExp.images.length);
    }, 4500); // changes smoothly every 4.5 seconds

    return () => clearInterval(interval);
  }, [currentExp.images]);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-2">
          Career Milestone
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight mb-3">
          Experience
        </h2>
        <p className="text-sm text-[#9298A7]">
          Production software engineering engagements delivering real client platforms.
        </p>
      </div>

      {/* Experience Display: Left details + Right slow auto-changing live site photos */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#22C55E]/40 transition-colors shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Description & Responsibilities */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[#22C55E] font-semibold bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
                    {currentExp.role}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-[#9298A7]">
                    <Calendar className="w-3.5 h-3.5" />
                    {currentExp.period}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {currentExp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#9298A7]">
                    <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{currentExp.location} ({currentExp.mode})</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#9298A7] mb-6 leading-relaxed">
                  {currentExp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#22C55E] mt-1 text-xs font-bold">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Verified Site Action */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {currentExp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#151720] text-[#9298A7] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {currentExp.demoUrl && (
                  <a
                    href={currentExp.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-[#22C55E] hover:underline"
                  >
                    <span>Visit Live Storefront</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Auto-changing Photos of Live Website */}
            <div className="lg:col-span-5 bg-[#08090D] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-[#9298A7]">
                  <span className="text-[#22C55E] flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    LIVE PRODUCTION PREVIEW
                  </span>
                  <span>View {photoIndex + 1} of {currentExp.images.length}</span>
                </div>

                {/* Browser Frame with Auto-fading Screenshots */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#101116] shadow-xl">
                  {/* Browser chrome header */}
                  <div className="px-3 py-2 bg-[#151720] border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-[#9298A7]/70 truncate max-w-[180px]">
                      shreeboutique.vercel.app
                    </span>
                    <span className="w-4" />
                  </div>

                  {/* Auto-cycling Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08090D]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={photoIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentExp.images[photoIndex]}
                          alt="Shree Boutique Deployed Interface"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-top"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex items-center gap-2">
                  {currentExp.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === photoIndex
                          ? "w-8 bg-[#22C55E]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Show photo ${i + 1}`}
                    />
                  ))}
                </div>
                {/* <span className="text-[10px] font-mono text-[#9298A7]">
                  Auto-rotates every 4.5s
                </span> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
