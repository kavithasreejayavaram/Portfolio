'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Layers, Database, Wrench, GitFork, ArrowRight, Check } from 'lucide-react';
import { RESUME_DATA } from '@/data/resumeData';

export default function EngineeringStackMap() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedRelationship, setSelectedRelationship] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'ALL STACK', icon: <Code className="w-4 h-4" /> },
    { id: 'programming', label: 'PROGRAMMING', icon: <Code className="w-4 h-4 text-blue-400" /> },
    { id: 'cybersecurity', label: 'CYBERSECURITY', icon: <Shield className="w-4 h-4 text-cyan-400" /> },
    { id: 'development', label: 'DEVELOPMENT', icon: <Layers className="w-4 h-4 text-indigo-400" /> },
    { id: 'dataAndDb', label: 'DATA & DATABASE', icon: <Database className="w-4 h-4 text-violet-400" /> },
    { id: 'systemsAndTools', label: 'SYSTEMS & TOOLS', icon: <Wrench className="w-4 h-4 text-emerald-400" /> },
  ];

  const skillGroups = [
    { key: 'programming', name: 'PROGRAMMING', items: RESUME_DATA.skills.programming, color: 'border-blue-500/40 text-blue-400' },
    { key: 'cybersecurity', name: 'CYBERSECURITY', items: RESUME_DATA.skills.cybersecurity, color: 'border-cyan-500/40 text-cyan-400' },
    { key: 'development', name: 'DEVELOPMENT', items: RESUME_DATA.skills.development, color: 'border-indigo-500/40 text-indigo-400' },
    { key: 'dataAndDb', name: 'DATA & DATABASE', items: RESUME_DATA.skills.dataAndDb, color: 'border-violet-500/40 text-violet-400' },
    { key: 'systemsAndTools', name: 'SYSTEMS & TOOLS', items: RESUME_DATA.skills.systemsAndTools, color: 'border-emerald-500/40 text-emerald-400' },
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.key === activeCategory);

  return (
    <section id="stack" className="py-20 relative bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>// 02. TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ENGINEERING STACK & TOOL MAP
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            A comprehensive mapping of technologies, security frameworks, and development libraries grounded in actual project execution.
          </p>
        </div>

        {/* Relationship Pipeline Viewer (Signature Feature) */}
        <div className="mb-12 p-6 rounded-2xl glass-panel border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-blue-400" />
              <h3 className="text-xs font-bold font-mono-code text-white uppercase tracking-wider">
                TECHNOLOGY DEPENDENCY & PIPELINE TREE
              </h3>
            </div>
            <span className="text-[11px] font-mono-code text-slate-500">
              SELECT NODE PIPELINE
            </span>
          </div>

          {/* Relationship Buttons */}
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.relationshipMap.map((rel, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRelationship(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                  selectedRelationship === idx
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {rel.root}
              </button>
            ))}
          </div>

          {/* Active Relationship Render */}
          {(() => {
            const rel = RESUME_DATA.skills.relationshipMap[selectedRelationship];
            return (
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4 font-mono-code">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bold text-xs">
                    {rel.root}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <span className="text-xs text-slate-400">CONNECTS TO PROJECT LIBRARIES</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2">
                  {rel.children.map((child, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center hover:border-blue-400/50 transition-colors"
                    >
                      <span className="text-xs text-slate-200 font-semibold block">{child}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                  {rel.description}
                </p>
              </div>
            );
          })()}
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-800 text-white font-bold border border-blue-500/40 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl glass-panel border border-slate-800 hover:border-slate-700 transition-colors space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className={`text-xs font-mono-code font-bold uppercase tracking-wider ${group.color}`}>
                  {group.name}
                </span>
                <span className="text-[10px] font-mono-code text-slate-500">
                  {group.items.length} ITEMS
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-slate-200 text-xs font-mono-code flex items-center gap-2 hover:border-blue-400/40 hover:text-white transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
