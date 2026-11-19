"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Github,
  Code2,
  ArrowUpRight,
  BookOpen,
  Flame,
  Star,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutEducation() {
  const { education, stats, identity, leetcodeLiveFallback } = PORTFOLIO_DATA;
  const [leetcodeData, setLeetcodeData] = useState(leetcodeLiveFallback);
  const [leetcardError, setLeetcardError] = useState(false);

  // GitHub live stats state
  const [githubData, setGithubData] = useState({
    publicRepos: 19,
    followers: 0,
    following: 0,
    recentRepos: [
      { name: "EcoVision---Smart-Waste-Segregation-Circular-Economy", language: "Dart", stars: 0 },
      { name: "fleetFlow_odoo_X_vidhyapith", language: "JavaScript", stars: 0 },
      { name: "Edutrack", language: "JavaScript", stars: 0 },
      { name: "GlobeTrotter_Odoo", language: "Python", stars: 0 },
      { name: "miniflow", language: "TypeScript", stars: 0 },
    ] as { name: string; language: string; stars: number }[],
  });

  // Fetch live GitHub data
  useEffect(() => {
    // Fetch user profile
    fetch(`https://api.github.com/users/${identity.githubUsername}`)
      .then((r) => r.json())
      .then((u) => {
        if (u && u.public_repos !== undefined) {
          setGithubData((prev) => ({
            ...prev,
            publicRepos: u.public_repos,
            followers: u.followers,
            following: u.following,
          }));
        }
      })
      .catch(() => {});

    // Fetch recent repos
    fetch(`https://api.github.com/users/${identity.githubUsername}/repos?sort=pushed&per_page=5`)
      .then((r) => r.json())
      .then((repos) => {
        if (Array.isArray(repos) && repos.length > 0) {
          setGithubData((prev) => ({
            ...prev,
            recentRepos: repos.map((r: any) => ({
              name: r.name,
              language: r.language || "—",
              stars: r.stargazers_count || 0,
            })),
          }));
        }
      })
      .catch(() => {});
  }, [identity.githubUsername]);

  // Live LeetCode data retrieval on client side with reliable fallback
  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${identity.leetcodeUsername}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (data && data.totalSolved) {
          setLeetcodeData({
            totalSolved: data.totalSolved || leetcodeLiveFallback.totalSolved,
            easySolved: data.easySolved || leetcodeLiveFallback.easySolved,
            mediumSolved: data.mediumSolved || leetcodeLiveFallback.mediumSolved,
            hardSolved: data.hardSolved || leetcodeLiveFallback.hardSolved,
            ranking: data.ranking || leetcodeLiveFallback.ranking,
            contributionPoint: data.contributionPoint || leetcodeLiveFallback.contributionPoint,
            recentAcceptances:
              data.recentSubmissions && data.recentSubmissions.length > 0
                ? data.recentSubmissions.slice(0, 5).map((s: any) => s.title)
                : leetcodeLiveFallback.recentAcceptances,
          });
        }
      })
      .catch(() => {
        // Fallback already pre-populated with verified API statistics
      });
  }, [identity.leetcodeUsername, leetcodeLiveFallback]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      {/* Two-Column Section Header & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
        {/* Left Column: Heading & Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Building software with algorithmic clarity.
          </h2>
          <p className="text-sm text-[#9298A7] leading-relaxed">
            I am an undergraduate engineer in Ahmedabad, India, specializing in
            the intersection of full-stack engineering, distributed systems, and applied
            machine learning.
          </p>
          <p className="text-sm text-[#9298A7] leading-relaxed">
            From designing relational schemas that resist race conditions to
            deploying zero-overhead on-device vision models, my focus is always
            on building practical systems that scale reliably.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#22C55E] hover:underline"
            >
              <span>GitHub profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-white/20">•</span>

            <a
              href={identity.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#22C55E] hover:underline"
            >
              <span>LeetCode profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: LDCE Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#22C55E]/40 transition-colors">
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#151720] border border-white/10 text-[#22C55E]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">
                    {education.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9298A7]">
                    {education.degree}
                  </p>
                  <p className="text-xs text-[#9298A7]/70 font-mono mt-0.5">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="bg-[#151720] px-3 py-1.5 rounded-lg border border-white/10 text-right shrink-0">
                <span className="text-[9px] uppercase font-mono tracking-wider text-[#9298A7] block">
                  CPI
                </span>
                <span className="text-base font-bold font-mono text-[#22C55E]">
                  {education.cpi}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#9298A7] mb-2.5">
                <BookOpen className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Rigorous Core Coursework:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#151720] text-[#9298A7] border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DUAL LIVE FEEDS ROW (GREEN COLOR ACCENT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* LeetCode Live Feed in Green */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#22C55E]/40 transition-colors flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                <Code2 className="w-4 h-4 text-[#22C55E]" />
                <span>LeetCode Live Statistics</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-[#22C55E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                <span>Live Feed</span>
              </div>
            </div>

            {/* Scoreboard metrics */}
            <div className="grid grid-cols-4 gap-2 mb-4 text-center">
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Total</div>
                <div className="text-xl font-bold font-mono text-[#22C55E]">
                  {leetcodeData.totalSolved}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Easy</div>
                <div className="text-lg font-bold font-mono text-emerald-400">
                  {leetcodeData.easySolved}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Medium</div>
                <div className="text-lg font-bold font-mono text-amber-400">
                  {leetcodeData.mediumSolved}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Hard</div>
                <div className="text-lg font-bold font-mono text-rose-400">
                  {leetcodeData.hardSolved}
                </div>
              </div>
            </div>

            {/* Real Live LeetCode Submission Heatmap */}
            <div className="mb-4">
              <div className="text-[10px] font-mono text-[#9298A7] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#22C55E]" />
                  <span>Real LeetCode Submissions Heatmap:</span>
                </span>
                <span className="text-[9px] text-[#22C55E]/80">@{identity.leetcodeUsername}</span>
              </div>

              {!leetcardError ? (
                <div className="overflow-x-auto py-1">
                  <div className="min-w-[480px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://leetcard.jacoblin.cool/${identity.leetcodeUsername}?ext=heatmap&theme=dark&font=JetBrains%20Mono`}
                      alt="Manit Suthar LeetCode Submission Heatmap"
                      className="w-full h-auto filter brightness-105 opacity-95 rounded-xl border border-white/5"
                      loading="lazy"
                      onError={() => setLeetcardError(true)}
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#08090D] border border-white/5 text-center">
                  <div className="text-xs font-mono text-[#22C55E] mb-1">
                    {leetcodeData.totalSolved} DSA Problems Verified on LeetCode
                  </div>
                  <div className="text-[11px] font-mono text-[#9298A7]">
                    Global Rank #{leetcodeData.ranking.toLocaleString()} • Top Percentile Rating
                  </div>
                </div>
              )}
            </div>

            {/* Recent Submissions */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-[#9298A7] uppercase tracking-wider mb-1">
                Recent Accepted Solutions:
              </div>
              {leetcodeData.recentAcceptances.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-[#08090D] border border-white/5 text-xs font-mono text-[#F5F5F5]"
                >
                  <span className="truncate pr-2">{item}</span>
                  <span className="text-[10px] text-[#22C55E] shrink-0 font-bold">✓</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono text-[#9298A7]">
            <span>Global Rank: #{leetcodeData.ranking.toLocaleString()}</span>
            <a
              href={identity.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22C55E] hover:underline flex items-center gap-1"
            >
              <span>Verify Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* GitHub Live Stats in Green */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#22C55E]/40 transition-colors flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                <Github className="w-4 h-4 text-[#22C55E]" />
                <span>GitHub Live Statistics</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-[#22C55E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                <span>Live Feed</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Repos</div>
                <div className="text-xl font-bold font-mono text-[#22C55E]">
                  {githubData.publicRepos}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Followers</div>
                <div className="text-xl font-bold font-mono text-emerald-400">
                  {githubData.followers}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151720] border border-white/5">
                <div className="text-[10px] font-mono text-[#9298A7] uppercase">Following</div>
                <div className="text-xl font-bold font-mono text-emerald-400">
                  {githubData.following}
                </div>
              </div>
            </div>

            {/* Contribution Chart */}
            <div className="mb-3">
              <div className="text-[10px] font-mono text-[#9298A7] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>GitHub Contribution Stream:</span>
                <span className="text-[9px] text-[#22C55E]/80">@{identity.githubUsername}</span>
              </div>
              <div className="overflow-x-auto py-1">
                <div className="min-w-[480px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://ghchart.rshah.org/22C55E/${identity.githubUsername}`}
                    alt="GitHub Contributions Chart"
                    className="w-full h-auto filter brightness-105 opacity-95"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Recent Repos */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-[#9298A7] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#22C55E]" />
                <span>Recently Active Repositories:</span>
              </div>
              {githubData.recentRepos.slice(0, 3).map((repo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-[#08090D] border border-white/5 text-xs font-mono"
                >
                  <span className="text-[#F5F5F5] truncate pr-2 max-w-[65%]">{repo.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-[#9298A7]">{repo.language}</span>
                    <span className="flex items-center gap-0.5 text-[10px] text-[#22C55E] font-bold">
                      <Star className="w-2.5 h-2.5" />
                      {repo.stars}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono text-[#9298A7]">
            <span>{githubData.publicRepos} Public Repositories</span>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22C55E] hover:underline flex items-center gap-1"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="glass-card rounded-xl p-4 sm:p-5 border border-white/5"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#22C55E] mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-white mb-0.5">
              {stat.label}
            </div>
            <div className="text-[11px] font-mono text-[#9298A7]">
              {stat.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
