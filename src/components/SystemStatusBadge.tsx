'use client';

import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

interface SystemStatusBadgeProps {
  status?: string;
  className?: string;
}

export default function SystemStatusBadge({ status = "OPERATIONAL // SECURE", className = "" }: SystemStatusBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono-code text-slate-300 backdrop-blur-md ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-emerald-400 font-semibold tracking-wider text-[11px]">{status}</span>
    </div>
  );
}
