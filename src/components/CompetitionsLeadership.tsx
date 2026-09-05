'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function CompetitionsLeadership() {
  return (
    <section className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Competitions Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>// 06. COMPETITIONS & SPRINTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                HACKATHONS & INNOVATION SPRINTS
              </h2>
            </div>

            <div className="space-y-6 relative border-l border-slate-800 ml-4 pl-6">
              {RESUME_DATA.competitions.map((comp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative p-6 rounded-2xl glass-panel border border-slate-800 space-y-3"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#07090e]" />

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span>{comp.title}</span>
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-[10px] font-mono-code text-blue-300">
                      {comp.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-mono-code">
                    ORGANIZER: {comp.organizer}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {comp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Beyond Code (Leadership & Volunteering) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>// 07. BEYOND CODE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                LEADERSHIP & COMMUNITY
              </h2>
            </div>

            {/* Leadership Card */}
            <div className="space-y-4">
              {RESUME_DATA.leadership.map((lead, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{lead.title}</h3>
                      <span className="text-xs text-indigo-400 font-mono-code block">
                        {lead.role} • {lead.organization}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-code">
                    {lead.skills.map((s, i) => (
                      <div key={i} className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                        • {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Volunteering Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-bold font-mono-code text-white uppercase tracking-wider">
                  COMMUNITY VOLUNTEERING
                </h3>
              </div>

              <div className="space-y-2 text-xs font-mono-code text-slate-300">
                {RESUME_DATA.volunteering.map((v, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
