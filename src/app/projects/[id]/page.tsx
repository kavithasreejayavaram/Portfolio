import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { RESUME_DATA } from '@/data/resumeData';

export function generateStaticParams() {
  return RESUME_DATA.projects.map((project) => ({ id: project.id }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = RESUME_DATA.projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#07090e] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono-code text-xs text-blue-400 hover:text-blue-300">
          <ArrowLeft className="h-4 w-4" /> BACK TO WORK
        </Link>
        <header className="mt-10 border-b border-slate-800 pb-8">
          <p className="font-mono-code text-xs tracking-[0.2em] text-blue-400">{project.number} / {project.domain}</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 font-mono-code text-xs text-blue-300">{technology}</span>)}
          </div>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-8">
            <CaseStudySection title="01 — Problem" body={project.problem} />
            <CaseStudySection title="02 — Objective" body={project.solution} />
            <section>
              <h2 className="case-study-heading">03 — Implementation</h2>
              <div className="space-y-2">
                {project.outcomes.map((outcome) => <div key={outcome} className="flex gap-3 text-sm leading-relaxed text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />{outcome}</div>)}
              </div>
            </section>
          </div>
          <section>
            <h2 className="case-study-heading">04 — System architecture</h2>
            <ArchitectureDiagram nodes={project.architecture.nodes} connections={project.architecture.connections} title={`${project.name} FLOW`} />
          </section>
        </div>

        <div className="grid gap-6 border-t border-slate-800 py-10 sm:grid-cols-2">
          <CaseStudySection title="05 — Testing" body="Testing evidence and benchmark results are not documented in the current project record." />
          <CaseStudySection title="06 — Results" body="No measured results are published in the current project record. Metrics should be added only when they can be reproduced." />
          <CaseStudySection title="07 — Limitations" body="This case study reflects the available project description and implementation notes; undocumented behavior is intentionally not inferred." />
          <CaseStudySection title="08 — Future work" body="Documented future work can be added as the implementation evolves." />
        </div>

        <footer className="flex flex-wrap gap-3 border-t border-slate-800 pt-6">
          {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-mono-code text-xs font-bold text-white hover:bg-blue-500"><ExternalLink className="h-4 w-4" /> SOURCE</a> : <span className="rounded-lg border border-slate-700 px-4 py-2 font-mono-code text-xs text-slate-500">SOURCE LINK NOT PUBLISHED</span>}
          <Link href="/#projects" className="rounded-lg border border-slate-700 px-4 py-2 font-mono-code text-xs text-slate-300 hover:border-blue-400">ALL PROJECTS</Link>
        </footer>
      </article>
    </main>
  );
}

function CaseStudySection({ title, body }: { title: string; body: string }) {
  return <section><h2 className="case-study-heading">{title}</h2><p className="text-sm leading-relaxed text-slate-300">{body}</p></section>;
}
