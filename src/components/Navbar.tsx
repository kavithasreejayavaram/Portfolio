'use client';

import React, { useState, useEffect } from 'react';
import { Shield, FileText, Menu, X, Terminal } from 'lucide-react';
import SystemStatusBadge from './SystemStatusBadge';
import { RESUME_DATA } from '@/data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
}

type NavItem = { label: string; href?: string; action?: () => void };

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'HOME', href: '#home' },
    { label: 'WORK', href: '#projects' },
    { label: 'SKILLS', href: '#stack' },
    { label: 'SECURITY LAB', href: '#security-lab' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'RESUME', action: onOpenResume },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Operator Tag */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-white font-mono-code focus:outline-none"
          >
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-wider group-hover:text-blue-400 transition-colors">
                {RESUME_DATA.personal.shortName}
              </span>
              <span className="text-[10px] text-slate-500 block font-mono-code leading-none mt-0.5">
                SEC_SYS // OPS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono-code tracking-wider text-slate-300">
            {navItems.map((item) => item.action ? (
              <button key={item.label} type="button" onClick={item.action} className="hover:text-blue-400 transition-colors py-1 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
              </button>
            ) : (
              <a key={item.label} href={item.href} className="hover:text-blue-400 transition-colors py-1 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* System Status & Resume CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <SystemStatusBadge status="SECURE // V1.0" className="hidden xl:inline-flex" />
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-500 text-white font-mono-code text-xs font-bold tracking-wider shadow-lg shadow-blue-600/20 border border-blue-400/40 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>VIEW RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono-code text-[11px] font-bold"
            >
              RESUME
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d111a] border-b border-slate-800 px-4 py-6 space-y-4 font-mono-code text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <SystemStatusBadge status="OPERATIONAL" />
          </div>
          <div className="grid grid-cols-1 gap-3">
            {navItems.map((item) => item.action ? (
              <button key={item.label} type="button" onClick={() => { item.action?.(); setMobileMenuOpen(false); }} className="w-full px-3 py-2 text-left rounded-lg text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors">
                {item.label}
              </button>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
