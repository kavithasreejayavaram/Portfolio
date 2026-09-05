'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Shield, Calendar, Layers, AlertTriangle } from 'lucide-react';
import { Project } from '@/data/resumeData';
import ArchitectureDiagram from './ArchitectureDiagram';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d111a] border border-slate-800 rounded-2xl shadow-2xl text-slate-200"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d111a]/95 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-400 font-mono-code text-xs font-bold">
                {project.number}
              </span>
              <div>
                <h3 className="text-base font-bold text-white font-mono-code tracking-wide">
                  {project.name}
                </h3>
                <span className="text-xs text-blue-400 font-mono-code block">
                  {project.domain}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8 text-sm">
            
            {/* Timeline & Subtitle Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>TIMELINE: {project.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>STATUS: ARCHIVED & VERIFIED</span>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>// PROBLEM STATEMENT</span>
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {project.problem}
              </p>
            </div>

            {/* Engineering Approach */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>// ENGINEERING APPROACH</span>
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {project.solution}
              </p>
            </div>

            {/* Interactive Architecture Diagram */}
            {project.architecture && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                  // INTERACTIVE SYSTEM ARCHITECTURE
                </h4>
                <ArchitectureDiagram
                  nodes={project.architecture.nodes}
                  connections={project.architecture.connections}
                  title={`${project.name} ARCHITECTURE FLOW`}
                />
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // TECHNOLOGIES & LIBRARIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-300 font-mono-code text-xs font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes & Resume Grounded Key Functionality */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                // KEY FUNCTIONALITY & OUTCOMES
              </h4>
              <div className="space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 font-mono-code text-xs">
              <a
                href="#github-placeholder"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`GitHub repository link placeholder: ${project.githubUrl}`);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW SOURCE REPOSITORY</span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
