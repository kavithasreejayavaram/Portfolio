'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>// 05. CREDENTIALS VAULT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            VERIFIED CERTIFICATIONS & ACCREDITATIONS
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Industry and institutional certifications in system administration, networking, software development, and cybersecurity.
          </p>
        </div>

        {/* Grid of Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-panel border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950/70 border border-blue-800/50 text-[10px] font-mono-code text-blue-300 font-semibold">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-code mt-1">
                    ISSUER: {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono-code text-xs">
                <span className="text-slate-500 text-[11px]">
                  DATE: {cert.date}
                </span>

                <button
                  onClick={() => alert(`Verification link placeholder for ${cert.title}`)}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-[11px] hover:underline"
                >
                  <span>VERIFY CREDENTIAL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
