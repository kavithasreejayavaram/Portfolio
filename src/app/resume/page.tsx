'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { RESUME_DATA } from '@/data/resumeData';

export default function ResumePage() {
  const { personal, about, skills, projects, certifications, education } = RESUME_DATA;
  return (
    <main className="resume-page min-h-screen bg-white px-6 py-10 text-slate-900 sm:px-12">
      <article className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4 border-b-2 border-slate-900 pb-6">
          <div><h1 className="text-3xl font-bold">{personal.fullName}</h1><p className="mt-2 text-sm font-semibold text-blue-700">{personal.headline}</p></div>
          <div className="text-right text-sm"><p>{personal.email}</p><p>github.com/kavithasreejayavaram</p><p>SRM IST · Chennai, India</p></div>
        </div>
        <ResumeBlock title="PROFILE"><p>{about.story}</p></ResumeBlock>
        <ResumeBlock title="EDUCATION">{education.map((item) => <div key={item.degree} className="mb-3 flex justify-between gap-4"><div><strong>{item.degree}</strong><p>{item.institution}</p></div><span>{item.year}<br />{item.grade}</span></div>)}</ResumeBlock>
        <ResumeBlock title="TECHNICAL SKILLS"><p><strong>Programming:</strong> {skills.programming.join(', ')}</p><p><strong>Cybersecurity:</strong> {skills.cybersecurity.join(', ')}</p><p><strong>Development:</strong> {skills.development.join(', ')}</p><p><strong>Data & systems:</strong> {[...skills.dataAndDb, ...skills.systemsAndTools].join(', ')}</p></ResumeBlock>
        <ResumeBlock title="PROJECTS">{projects.map((project) => <div key={project.id} className="mb-4"><strong>{project.name}</strong> · {project.domain}<p>{project.description}</p></div>)}</ResumeBlock>
        <ResumeBlock title="CERTIFICATIONS">{certifications.map((cert) => <p key={cert.title}><strong>{cert.title}</strong> · {cert.issuer} ({cert.date})</p>)}</ResumeBlock>
        <div className="no-print mt-10 flex gap-3"><button onClick={() => window.print()} className="rounded bg-blue-700 px-4 py-2 text-sm font-semibold text-white">PRINT / SAVE AS PDF</button><Link href="/" className="rounded border border-slate-300 px-4 py-2 text-sm">BACK TO PORTFOLIO</Link></div>
      </article>
    </main>
  );
}

function ResumeBlock({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mb-7"><h2 className="mb-3 border-b border-slate-300 pb-1 text-sm font-bold tracking-widest">{title}</h2><div className="text-sm leading-relaxed">{children}</div></section>;
}
