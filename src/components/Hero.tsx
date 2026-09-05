'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Terminal, CheckCircle2, ExternalLink } from 'lucide-react';
import HeroNodeMap from './HeroNodeMap';
import SystemStatusBadge from './SystemStatusBadge';
import { RESUME_DATA } from '@/data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center tech-grid radial-glow overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & System Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Operator Identifier */}
            <div className="flex flex-wrap items-center gap-3">
              <SystemStatusBadge status="OPEN TO OPPORTUNITIES" />
              <span className="text-xs font-mono-code text-slate-400 border-l border-slate-800 pl-3">
                SRM IST // CSE (CYBER SECURITY) '27
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-white">{RESUME_DATA.personal.shortName}</span>
                <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">{RESUME_DATA.personal.headline}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
                {RESUME_DATA.personal.tagline}
              </p>
            </div>

            {/* Identity Tags Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {RESUME_DATA.personal.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono-code text-blue-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* System Profile Panel (SaaS / SOC Style Widget) */}
            <div className="p-5 rounded-xl bg-[#0d111a]/90 border border-slate-800/90 backdrop-blur-md shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold font-mono-code text-slate-200 tracking-wider">
                    TECHNICAL PROFILE
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
                  ONLINE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">ROLE</span>
                  <span className="text-slate-200 font-medium">
                    {RESUME_DATA.personal.statusProfile.role}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">FOCUS</span>
                  <span className="text-slate-200 font-medium">
                    {RESUME_DATA.personal.statusProfile.focus}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">PRIMARY STACK</span>
                  <span className="text-blue-400 font-medium">
                    {RESUME_DATA.personal.statusProfile.primaryStack}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">CURRENT STATUS</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    OPEN TO INTERNSHIPS / ENGINEERING OPPORTUNITIES
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-code text-xs font-bold tracking-wider shadow-xl shadow-blue-600/25 border border-blue-400/40 transition-all hover:scale-105 active:scale-95"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={RESUME_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-mono-code text-xs font-bold tracking-wider text-slate-200 transition-all hover:scale-105 hover:border-blue-400/50 hover:bg-slate-800 active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                <span>GITHUB</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-mono-code text-xs font-bold tracking-wider border border-slate-700 hover:border-blue-400/50 transition-all hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Node Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroNodeMap />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
