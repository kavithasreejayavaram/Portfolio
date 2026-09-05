'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, ArrowRight, Shield, Code, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const socials = [
    { name: 'LinkedIn', token: RESUME_DATA.personal.socialLinks.linkedin, icon: <LinkedinIcon className="w-4 h-4 text-blue-400" /> },
    { name: 'GitHub', token: RESUME_DATA.personal.socialLinks.github, icon: <GithubIcon className="w-4 h-4 text-slate-300" /> },
    { name: 'LeetCode', token: RESUME_DATA.personal.socialLinks.leetcode, icon: <Code className="w-4 h-4 text-amber-400" /> },
    { name: 'CodeChef', token: RESUME_DATA.personal.socialLinks.codechef, icon: <Code className="w-4 h-4 text-indigo-400" /> },
    { name: 'HackerRank', token: RESUME_DATA.personal.socialLinks.hackerrank, icon: <Code className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-slate-800/60 tech-grid radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* CTA Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-mono-code text-blue-300">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>OPERATIONAL CONTACT CHANNEL</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              LET'S BUILD SOMETHING SECURE.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Open to opportunities in cybersecurity, software engineering and related technical roles.
            </p>
          </div>

          {/* Contact Direct Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto font-mono-code">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-center gap-3 text-slate-200 hover:text-blue-400 group"
            >
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 uppercase block">EMAIL</span>
                <span className="text-xs font-bold">{RESUME_DATA.personal.email}</span>
              </div>
            </a>

            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-center gap-3 text-slate-200 hover:text-blue-400 group"
            >
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 uppercase block">PHONE</span>
                <span className="text-xs font-bold">{RESUME_DATA.personal.phone}</span>
              </div>
            </a>
          </div>

          {/* Social Profiles with Placeholders */}
          <div className="space-y-3 pt-4">
            <span className="text-xs font-mono-code text-slate-400 block uppercase">
              TECHNICAL PROFILES & REPOSITORIES
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((soc) => (
                <button
                  key={soc.name}
                  onClick={() => alert(`Profile placeholder URL: ${soc.token}`)}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-400/50 text-slate-300 hover:text-white font-mono-code text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  {soc.icon}
                  <span>{soc.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Resume CTA */}
          <div className="pt-6 border-t border-slate-800/80">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-code text-xs font-bold tracking-wider shadow-2xl shadow-blue-600/30 border border-blue-400/40 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW FULL CANDIDATE RESUME</span>
            </button>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-code text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.personal.fullName}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-slate-400">
            SECURE SYSTEM // PERSONAL OPERATIONS INTERFACE
          </div>
        </div>

      </div>
    </section>
  );
}
