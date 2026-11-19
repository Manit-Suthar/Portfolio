"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code2,
  FileDown,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AchievementsContact() {
  const { achievements, identity } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      {/* Achievements Section */}
      <div className="mb-20">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-2">
            Competitive Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight mb-3">
            Achievements & Milestones
          </h2>
          <p className="text-sm text-[#9298A7]">
            Hackathon recognitions, finalist challenges, and algorithmic benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.organizationOrEvent + idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#22C55E]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#9298A7]">
                    {item.organizationOrEvent}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9298A7] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.highlight && (
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#9298A7]">
                  <span>Status:</span>
                  <span className="text-[#22C55E] font-semibold">{item.highlight}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5425A6]/15 blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-2">
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Available for Engineering Internships.
          </h2>
          <p className="text-sm sm:text-base text-[#9298A7] leading-relaxed mb-8">
            Looking for software development, full-stack, backend, or applied AI roles. If you have an exciting team, a tough technical problem, or would like to discuss distributed systems, reach out directly.
          </p>

          {/* Email Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22C55E] text-[#08090D] font-bold text-xs sm:text-sm hover:bg-[#16A34A] transition-all shadow-md shadow-[#22C55E]/20"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#151720] border border-white/10 text-white text-xs sm:text-sm hover:border-[#22C55E]/40 transition-all"
            >
              <Mail className="w-4 h-4 text-[#22C55E]" />
              <span className="font-mono text-xs">{identity.email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#9298A7]" />
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 text-xs">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9298A7] hover:text-[#22C55E] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#9298A7]/50" />
            </a>

            <span className="text-white/10">•</span>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9298A7] hover:text-[#22C55E] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#9298A7]/50" />
            </a>

            <span className="text-white/10">•</span>

            <a
              href={identity.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9298A7] hover:text-[#22C55E] transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-[#9298A7]/50" />
            </a>

            <span className="text-white/10">•</span>

            <a
              href={identity.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9298A7] hover:text-[#22C55E] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9298A7]">
        <div>
          © {new Date().getFullYear()} {identity.name}. Built with Next.js App Router & Tailwind CSS.
        </div>
        <div>
          <a href="#" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
