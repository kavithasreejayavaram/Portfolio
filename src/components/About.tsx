'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Award, BookOpen, Lock, Terminal, Cpu } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function About() {
  const pillars = [
    { title: "System Security & OS", desc: "Linux system administration, RHCSA principles, permission management & kernel auditing.", icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { title: "Threat & Forensics", desc: "Packet analysis, 802.11 wireless frame inspection & vulnerability assessment.", icon: <Shield className="w-4 h-4 text-blue-400" /> },
    { title: "Secure Software Dev", desc: "FastAPI REST microservices, Python automation, Scapy sniffing & MySQL database security.", icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>// 01. CANDIDATE PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ENGINEERING SECURE & INTELLIGENT SYSTEMS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-800 space-y-4">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                {RESUME_DATA.about.story}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                With a rigorous focus on software engineering fundamentals and offensive/defensive cybersecurity techniques, I specialize in dissecting systems from network packets to backend APIs—ensuring software is resilient by design rather than retrofitted for security.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xs font-bold text-white font-mono-code leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Academic Record & Credentials Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0d111a] border border-blue-500/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono-code uppercase tracking-wider">
                      ACADEMIC CREDENTIAL
                    </h3>
                    <span className="text-[11px] font-mono-code text-slate-400 block">
                      VERIFIED INSTITUTIONAL RECORD
                    </span>
                  </div>
                </div>
              </div>

              {/* Institution details */}
              <div className="space-y-4 font-mono-code">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">DEGREE & SPECIALIZATION</span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {RESUME_DATA.about.currentDegree}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">INSTITUTION</span>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    {RESUME_DATA.about.institution}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">GRADUATION YEAR</span>
                    <div className="text-base font-extrabold text-blue-400 mt-0.5">
                      {RESUME_DATA.about.gradYear}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">ACADEMIC CGPA</span>
                    <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                      {RESUME_DATA.about.cgpa}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-xs font-mono-code text-blue-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  <span>CYBER SECURITY SPECIALIZATION</span>
                </span>
                <span className="text-emerald-400 font-bold">8.53 CGPA</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
