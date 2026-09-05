'use client';

import React from 'react';
import { ArrowRight, BrainCircuit, ShieldAlert } from 'lucide-react';

const projects = [
  { title: 'AI SOFTWARE ENGINEERING AGENT', flow: 'Planning → Coding → Testing → Security Review', icon: BrainCircuit },
  { title: 'AI PHISHING DETECTION', flow: 'Detection → Risk Scoring → Explainable Verdict', icon: ShieldAlert },
];

export default function CurrentlyBuilding() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950/25 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">IN PROGRESS</p>
            <h2 className="section-title">Currently building</h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">A small, honest view of the concepts being developed next. These are not presented as completed projects.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map(({ title, flow, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4 rounded-xl border border-dashed border-slate-700 bg-[#0d111a]/70 p-5">
              <Icon className="h-6 w-6 shrink-0 text-blue-400" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="font-mono-code text-xs font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{flow}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-600" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
