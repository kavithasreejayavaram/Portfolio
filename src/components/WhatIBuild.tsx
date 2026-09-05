'use client';

import React from 'react';
import { BrainCircuit, Code2, Database, ShieldCheck } from 'lucide-react';

const areas = [
  { title: 'SECURITY SYSTEMS', description: 'Threat detection, network monitoring, security analysis, and system security.', icon: ShieldCheck },
  { title: 'AI-POWERED TOOLS', description: 'Machine learning pipelines and intelligent automation for security-focused workflows.', icon: BrainCircuit },
  { title: 'BACKEND SYSTEMS', description: 'FastAPI, Flask, REST APIs, validation, authentication, and databases.', icon: Database },
  { title: 'APPLICATION ENGINEERING', description: 'React, JavaScript, Java, SQL, and full-stack application development.', icon: Code2 },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="border-t border-slate-800/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">FOCUS AREAS</p>
          <h2 className="section-title">What I build</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">A practical engineering focus grounded in the systems and technologies represented in my projects.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ title, description, icon: Icon }) => (
            <article key={title} className="glass-panel glass-panel-hover rounded-xl p-5">
              <Icon className="mb-5 h-5 w-5 text-blue-400" aria-hidden="true" />
              <h3 className="font-mono-code text-xs font-bold tracking-wide text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
