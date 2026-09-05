'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function Education() {
  return (
    <section className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>// 08. ACADEMIC CHRONOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            EDUCATION TIMELINE & ACADEMIC STANDING
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-8">
          {RESUME_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl glass-panel border border-slate-800 space-y-3 group hover:border-blue-500/40 transition-colors"
            >
              {/* Year Label on the left margin for desktop */}
              <div className="hidden md:block absolute -left-36 top-6 w-28 text-right font-mono-code text-sm font-bold text-blue-400">
                {edu.year}
              </div>

              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-[#07090e] group-hover:scale-125 transition-transform" />

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <span>{edu.degree}</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-code mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="text-right">
                  <span className="md:hidden text-xs font-mono-code text-blue-400 font-bold block">
                    {edu.year}
                  </span>
                  <span className="px-3 py-1 rounded bg-emerald-950/70 border border-emerald-800/60 font-mono-code text-xs font-bold text-emerald-400 inline-block mt-1">
                    {edu.grade}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-code pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>OFFICIAL INSTITUTIONAL RECORD</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
