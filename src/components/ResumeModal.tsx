'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Shield, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d111a] border border-slate-800 rounded-xl shadow-2xl text-slate-200"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d111a]/95 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono-code tracking-wide">
                  RESUME // {RESUME_DATA.personal.shortName}
                </h3>
                <p className="text-xs text-slate-400 font-mono-code">
                  DOCUMENT_ID: VERIFIED_CANDIDATE_SUMMARY
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume asset ready for replacement. Link token: REPLACE_WITH_RESUME_PDF_PATH");
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono-code transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 md:p-8 space-y-8 text-sm">
            {/* Header / Contact Banner */}
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {RESUME_DATA.personal.fullName}
                  </h1>
                  <p className="text-sm font-semibold text-blue-400 font-mono-code mt-1">
                    {RESUME_DATA.personal.headline}
                  </p>
                </div>
                <div className="text-xs text-slate-400 space-y-1 font-mono-code">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{RESUME_DATA.personal.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{RESUME_DATA.personal.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Chennai, India • SRM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // PROFESSIONAL PROFILE
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {RESUME_DATA.about.story}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // ACADEMIC RECORD
              </h2>
              <div className="space-y-2">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                    <div>
                      <div className="font-semibold text-white">{edu.degree}</div>
                      <div className="text-xs text-slate-400">{edu.institution}</div>
                    </div>
                    <div className="mt-1 sm:mt-0 text-left sm:text-right font-mono-code text-xs text-blue-400 font-medium">
                      <div>{edu.year}</div>
                      <div>{edu.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // TECHNICAL CORE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="font-mono-code text-blue-400 font-semibold block mb-1">PROGRAMMING</span>
                  <span className="text-slate-300">{RESUME_DATA.skills.programming.join(" • ")}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="font-mono-code text-blue-400 font-semibold block mb-1">CYBERSECURITY</span>
                  <span className="text-slate-300">{RESUME_DATA.skills.cybersecurity.join(" • ")}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="font-mono-code text-blue-400 font-semibold block mb-1">DEVELOPMENT</span>
                  <span className="text-slate-300">{RESUME_DATA.skills.development.join(" • ")}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="font-mono-code text-blue-400 font-semibold block mb-1">DATA & SYSTEMS</span>
                  <span className="text-slate-300">{[...RESUME_DATA.skills.dataAndDb, ...RESUME_DATA.skills.systemsAndTools].slice(0, 8).join(" • ")}</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // FEATURED PROJECTS
              </h2>
              <div className="space-y-3">
                {RESUME_DATA.projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-bold text-white">{proj.name}</div>
                      <div className="text-xs font-mono-code text-slate-400">{proj.timeline}</div>
                    </div>
                    <div className="text-xs text-blue-400 font-mono-code">{proj.domain}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono-code text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Vault */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // CERTIFICATIONS & CREDENTIALS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-slate-900/40 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">{cert.title}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer} • {cert.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-code transition-colors"
              >
                CLOSE
              </button>
              <a
                href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume asset ready for replacement. Link token: REPLACE_WITH_RESUME_PDF_PATH");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono-code transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF RESUME</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
