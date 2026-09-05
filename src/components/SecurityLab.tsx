'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, ShieldAlert, Radar, Code2, ArrowRight, CheckCircle2, Cpu, Wrench } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function SecurityLab() {
  const [activeModuleId, setActiveModuleId] = useState<string>('net-sec');

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Radar':
        return <Radar className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      default:
        return <Radar className="w-5 h-5 text-blue-400" />;
    }
  };

  const activeModule = RESUME_DATA.securityLab.find((m) => m.id === activeModuleId) || RESUME_DATA.securityLab[0];

  return (
    <section id="security-lab" className="py-20 relative bg-[#07090e] border-t border-slate-800/60 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>// 04. SIGNATURE FEATURE // SECURITY LAB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SECURITY DOMAIN & LAB OPERATIONS INTERFACE
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Interactive breakdown of domain specializations, packet inspection pipelines, Linux system hardening, and threat classification algorithms.
          </p>
        </div>

        {/* Security Lab Modules Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Interactive Module Cards */}
          <div className="lg:col-span-5 space-y-4">
            {RESUME_DATA.securityLab.map((module) => {
              const isSelected = activeModuleId === module.id;
              return (
                <div
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        {getModuleIcon(module.icon)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white font-mono-code tracking-wider">
                          {module.title}
                        </h3>
                        <span className="text-[11px] text-cyan-400 font-mono-code block">
                          CONNECTED: {module.connectedProject}
                        </span>
                      </div>
                    </div>

                    <div className={`p-1 rounded-full ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-600'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
                    {module.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono-code text-slate-300 border border-slate-800"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Module Pipeline & Execution Flow */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d111a] to-slate-950 border border-cyan-500/30 shadow-2xl space-y-6"
            >
              {/* Module Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    {getModuleIcon(activeModule.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-cyan-400 font-bold block uppercase">
                      ACTIVE LAB MODULE
                    </span>
                    <h3 className="text-lg font-extrabold text-white">
                      {activeModule.title}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-800/60 text-[11px] font-mono-code text-cyan-300">
                  PIPELINE VERIFIED
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModule.details}
              </p>

              {/* Execution Flow Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                  // EXPOSED PROCESS PIPELINE
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-code text-xs">
                  {activeModule.flow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-200 font-semibold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tools */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono-code text-slate-500 block uppercase">
                  ASSOCIATED TOOLS & LIBRARIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModule.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-mono-code text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
