'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, ExternalLink, Cpu, Layers, Calendar, Sparkles } from 'lucide-react';
import { RESUME_DATA, Project } from '@/data/resumeData';
import ProjectModal from './ProjectModal';
import ArchitectureDiagram from './ArchitectureDiagram';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = RESUME_DATA.projects.find((p) => p.featured) || RESUME_DATA.projects[0];
  const secondaryProjects = RESUME_DATA.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>// 03. PROJECT INTELLIGENCE ARCHIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            FEATURED ENGINEERING & SECURITY PROJECTS
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Detailed case studies exposing system architectures, security heuristics, data pipelines, and application logic.
          </p>
        </div>

        {/* Dominant Featured Project Card (Wireless Intrusion Detection) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d111a] to-slate-950 border border-blue-500/40 shadow-2xl space-y-6 relative overflow-hidden group"
        >
          {/* Subtle Glow Overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

          {/* Card Top Identifier */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold tracking-wider">
                FLAGSHIP PROJECT // {featuredProject.number}
              </span>
              <span className="text-xs font-mono-code text-blue-400 font-semibold">
                {featuredProject.domain}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{featuredProject.timeline}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Problem/Solution */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {featuredProject.name}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-mono-code text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Expand Case Study CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-code text-xs font-bold tracking-wider shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                >
                  <span>EXPLORE CASE STUDY & ARCHITECTURE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Embedded Interactive Architecture Diagram */}
            <div className="lg:col-span-6">
              <ArchitectureDiagram
                nodes={featuredProject.architecture.nodes}
                connections={featuredProject.architecture.connections}
                title="WIRELESS INTRUSION PIPELINE ARCHITECTURE"
              />
            </div>

          </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl glass-panel border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono-code font-bold text-blue-400">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-500">
                    {project.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <span className="text-xs text-slate-400 font-mono-code block mt-0.5">
                      {project.subtitle}
                    </span>
                  )}
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-[10px] font-mono-code text-blue-400">
                    {project.domain}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono-code text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white font-mono-code text-xs font-bold transition-all border border-slate-800 hover:border-blue-400"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Expansion Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
