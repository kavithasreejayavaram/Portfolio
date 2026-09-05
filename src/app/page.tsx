'use client';

import React, { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EngineeringStackMap from '@/components/EngineeringStackMap';
import Projects from '@/components/Projects';
import SecurityLab from '@/components/SecurityLab';
import Certifications from '@/components/Certifications';
import CompetitionsLeadership from '@/components/CompetitionsLeadership';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen relative bg-[#07090e] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Sleek Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* About Section */}
      <About />

      {/* Engineering Stack & Tool Map */}
      <EngineeringStackMap />

      {/* Projects Intelligence Archive */}
      <Projects />

      {/* Security Lab (Signature Feature) */}
      <SecurityLab />

      {/* Certifications Credentials Vault */}
      <Certifications />

      {/* Competitions & Leadership */}
      <CompetitionsLeadership />

      {/* Academic Chronology Education Timeline */}
      <Education />

      {/* Contact Section */}
      <Contact onOpenResume={() => setResumeOpen(true)} />

      {/* Candidate Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
