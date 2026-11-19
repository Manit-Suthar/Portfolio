"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronRight,
  ZoomIn,
  ChevronLeft,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA, FeaturedProject } from "@/data/portfolio";

export default function Projects() {
  const { featuredProjects, otherProjects } = PORTFOLIO_DATA;
  const [modalProject, setModalProject] = useState<FeaturedProject | null>(null);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
    isMobile: boolean;
  } | null>(null);

  // Per-project auto-cycling image index
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    const init: Record<string, number> = {};
    featuredProjects.forEach((p) => { init[p.id] = 0; });
    setActiveImageIndices(init);
  }, [featuredProjects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndices((prev) => {
        const next: Record<string, number> = {};
        featuredProjects.forEach((p) => {
          const current = prev[p.id] ?? 0;
          next[p.id] = (current + 1) % p.images.length;
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [featuredProjects]);

  // Lightbox navigation
  const lightboxNext = useCallback(() => {
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
    );
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") lightboxNext();
      else if (e.key === "ArrowLeft") lightboxPrev();
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lightboxNext, lightboxPrev]);

  const openLightbox = (project: FeaturedProject, startIndex: number) => {
    setLightbox({
      images: project.images,
      index: startIndex,
      title: project.title,
      isMobile: (project as any).mobileImages === true,
    });
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="mb-12">
        <div className="text-xs font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-2">
          Featured Engineering Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight mb-3">
          Projects
        </h2>
        <p className="text-sm text-[#9298A7] max-w-2xl">
          Real application interfaces, on-device AI models, and mission-critical distributed systems.
        </p>
      </div>

      {/* 2-COLUMN FEATURED PROJECT CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16">
        {featuredProjects.map((project, idx) => {
          const currentImgIndex = activeImageIndices[project.id] ?? 0;
          const currentImage = project.images[currentImgIndex];
          const isMobile = (project as any).mobileImages === true;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-[#22C55E]/40 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* IMAGE AREA — top of card */}
              <div className="relative bg-[#08090D] border-b border-white/5">
                {/* Browser / Phone chrome header */}
                <div className="px-3 py-2 bg-[#151720] flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[9px] font-mono text-[#9298A7]/60 truncate max-w-[180px]">
                    {project.demoUrl
                      ? project.demoUrl.replace("https://", "")
                      : `${project.id}.systems.local`}
                  </span>
                  <span className="text-[9px] font-mono text-[#22C55E]">
                    {currentImgIndex + 1}/{project.images.length}
                  </span>
                </div>

                {/* Image container — click to open lightbox */}
                <div
                  className={`relative w-full overflow-hidden cursor-zoom-in group/img ${
                    isMobile ? "flex justify-center py-4 bg-[#0C0E14]" : "aspect-[16/9]"
                  }`}
                  onClick={() => openLightbox(project, currentImgIndex)}
                >
                  {isMobile ? (
                    /* Phone frame centered for mobile images */
                    <div
                      className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/12 bg-[#101116] shadow-2xl"
                      style={{ width: "180px", aspectRatio: "1272/2772" }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={currentImage}
                            alt={`${project.title} screen ${currentImgIndex + 1}`}
                            fill
                            sizes="180px"
                            className="object-contain"
                            priority={idx === 0}
                          />
                        </motion.div>
                      </AnimatePresence>
                      {/* Home bar */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/30 rounded-full z-10" />
                    </div>
                  ) : (
                    /* Desktop browser image — object-contain so nothing cuts */
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentImage}
                          alt={`${project.title} view ${currentImgIndex + 1}`}
                          fill
                          sizes="(max-width: 1280px) 100vw, 50vw"
                          className="object-contain object-center"
                          priority={idx === 0}
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}

                  {/* Zoom hint overlay */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <div className="p-1.5 rounded-lg bg-[#08090D]/80 backdrop-blur-sm border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    </div>
                  </div>
                </div>

                {/* Dot nav */}
                <div className="flex items-center gap-1.5 justify-center py-2.5">
                  {project.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() =>
                        setActiveImageIndices((prev) => ({ ...prev, [project.id]: dotIdx }))
                      }
                      className={`h-1 rounded-full transition-all ${
                        dotIdx === currentImgIndex
                          ? "w-6 bg-[#22C55E]"
                          : "w-1.5 bg-white/15 hover:bg-white/35"
                      }`}
                      aria-label={`Image ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] font-mono font-medium text-[#22C55E] uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-[#9298A7] leading-relaxed mb-3">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-3">
                  {project.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[11px] text-[#F5F5F5]">
                      <CheckCircle2 className="w-3 h-3 text-[#22C55E] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#151720] text-[#9298A7] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#22C55E] text-[#08090D] font-bold text-[11px] hover:bg-[#16A34A] transition-colors shadow-sm"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151720] border border-white/10 text-white font-medium text-[11px] hover:bg-[#1A1D28] transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>GitHub</span>
                    </a>
                  )}
                  <button
                    onClick={() => setModalProject(project)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#9298A7] hover:text-[#22C55E] transition-colors ml-auto"
                  >
                    <span>Case Study</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MORE PROJECTS SECTION */}
      <div>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white mb-1">More Projects</h3>
          <p className="text-xs text-[#9298A7]">
            Specialized microservices, multithreaded systems, and applied tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass-card rounded-xl p-5 flex flex-col justify-between hover:border-[#22C55E]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase text-[#22C55E]">
                    {proj.category}
                  </span>
                  {proj.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#22C55E]/10 text-[#22C55E]">
                      {proj.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{proj.title}</h4>
                <p className="text-xs text-[#9298A7] leading-relaxed mb-4">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-white/5">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151720] text-[#9298A7] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs">
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#22C55E] hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#9298A7] hover:text-white transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── IMAGE LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="absolute inset-0 bg-[#08090D]/92 backdrop-blur-lg"
            />

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex flex-col items-center"
              style={{
                maxWidth: lightbox.isMobile ? "380px" : "90vw",
                maxHeight: "90vh",
                width: lightbox.isMobile ? "380px" : "auto",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-[#151720] border border-white/10 text-[#9298A7] hover:text-white transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Counter */}
              <div className="absolute -top-10 left-0 text-xs font-mono text-[#9298A7]">
                {lightbox.index + 1} / {lightbox.images.length} — {lightbox.title}
              </div>

              {/* Main image */}
              <div
                className={`relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#08090D] ${
                  lightbox.isMobile
                    ? "w-full aspect-[1272/2772] max-h-[85vh]"
                    : "w-[90vw] max-w-5xl aspect-[16/10] max-h-[80vh]"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox.index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={lightbox.images[lightbox.index]}
                      alt={`${lightbox.title} image ${lightbox.index + 1}`}
                      fill
                      sizes={lightbox.isMobile ? "380px" : "90vw"}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next */}
              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                    className="absolute left-[-48px] top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#151720] border border-white/10 text-white hover:border-[#22C55E]/40 hover:text-[#22C55E] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                    className="absolute right-[-48px] top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#151720] border border-white/10 text-white hover:border-[#22C55E]/40 hover:text-[#22C55E] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Dot nav */}
              <div className="flex items-center gap-2 mt-4">
                {lightbox.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox((prev) => prev ? { ...prev, index: i } : null)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === lightbox.index ? "w-6 bg-[#22C55E]" : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── CASE STUDY MODAL ── */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              className="fixed inset-0 bg-[#08090D]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#101116] border border-white/10 shadow-2xl z-10 overflow-hidden my-8"
            >
              <div className="p-6 border-b border-white/10 flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-[#22C55E] mb-1">{modalProject.category}</div>
                  <h3 className="text-xl font-bold text-white">{modalProject.title}</h3>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="p-1.5 rounded-lg text-[#9298A7] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#9298A7] mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    Problem Space
                  </h4>
                  <p className="text-sm text-[#F5F5F5] bg-[#151720] p-4 rounded-xl border border-white/5 leading-relaxed">
                    {modalProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#22C55E] mb-2">
                    Architectural Solution
                  </h4>
                  <p className="text-sm text-[#9298A7] leading-relaxed mb-3">{modalProject.solution}</p>
                  <div className="space-y-2">
                    {modalProject.highlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#F5F5F5] bg-[#151720] p-3 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#9298A7] mb-2">Stack & Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {modalProject.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#151720] text-[#9298A7] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-white/10 bg-[#08090D] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {modalProject.demoUrl && (
                    <a
                      href={modalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#22C55E] hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {modalProject.githubUrl && (
                    <a
                      href={modalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#9298A7] hover:text-white"
                    >
                      <Github className="w-3 h-3" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="px-4 py-1.5 rounded-full bg-[#151720] border border-white/10 text-xs text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
