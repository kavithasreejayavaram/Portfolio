'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Terminal, Cpu, Brain, Layers } from 'lucide-react';

interface NodeItem {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  x: number; // percentage offset
  y: number;
  color: string;
}

export default function HeroNodeMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: NodeItem[] = [
    {
      id: 'cyber',
      label: 'CYBERSECURITY',
      sublabel: 'System Hardening & Threat Analysis',
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      x: 50,
      y: 50,
      color: '#3b82f6',
    },
    {
      id: 'net',
      label: 'NETWORKING',
      sublabel: 'Packet Capture & Wireless Protocol',
      icon: <Network className="w-4 h-4 text-cyan-400" />,
      x: 18,
      y: 20,
      color: '#06b6d4',
    },
    {
      id: 'linux',
      label: 'LINUX',
      sublabel: 'OS Administration & RHCSA',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      x: 82,
      y: 20,
      color: '#10b981',
    },
    {
      id: 'python',
      label: 'PYTHON',
      sublabel: 'FastAPI, Scapy, Flask & Scripting',
      icon: <Cpu className="w-4 h-4 text-violet-400" />,
      x: 20,
      y: 80,
      color: '#8b5cf6',
    },
    {
      id: 'ml',
      label: 'MACHINE LEARNING',
      sublabel: 'Scikit-learn Anomaly Classifier',
      icon: <Brain className="w-4 h-4 text-indigo-400" />,
      x: 80,
      y: 80,
      color: '#6366f1',
    },
    {
      id: 'swe',
      label: 'SOFTWARE ENGINEERING',
      sublabel: 'Full-Stack REST Apps & DB Systems',
      icon: <Layers className="w-4 h-4 text-blue-300" />,
      x: 50,
      y: 92,
      color: '#60a5fa',
    },
  ];

  const centerNode = nodes.find((n) => n.id === 'cyber')!;
  const outerNodes = nodes.filter((n) => n.id !== 'cyber');

  return (
    <div className="relative w-full h-[380px] md:h-[440px] glass-panel rounded-2xl p-4 md:p-6 overflow-hidden border border-slate-800/80 shadow-2xl">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* SVG Connecting Vector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {outerNodes.map((node) => {
          const isConnected =
            activeNode === null || activeNode === 'cyber' || activeNode === node.id;
          return (
            <g key={`line-${node.id}`}>
              <line
                x1={`${centerNode.x}%`}
                y1={`${centerNode.y}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={node.color}
                strokeWidth={isConnected ? 2 : 1}
                strokeOpacity={isConnected ? 0.6 : 0.15}
                strokeDasharray={isConnected ? 'none' : '4 4'}
                className="transition-all duration-300"
              />
              {/* Pulsing signal dot along connection line */}
              {isConnected && (
                <circle
                  r="3"
                  fill={node.color}
                  className="animate-pulse"
                >
                  <animateMotion
                    path={`M ${centerNode.x * 3.5} ${centerNode.y * 3.5} L ${node.x * 3.5} ${node.y * 3.5}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Render Node Cards */}
      {nodes.map((node) => {
        const isCenter = node.id === 'cyber';
        const isHovered = activeNode === node.id;
        const isRelated =
          activeNode === 'cyber' || activeNode === null || activeNode === node.id;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className={`absolute z-10 cursor-pointer transition-all duration-300 ${
              isCenter ? 'w-44 md:w-52' : 'w-36 md:w-44'
            }`}
          >
            <div
              className={`p-3 rounded-xl backdrop-blur-md transition-all duration-300 border ${
                isCenter
                  ? 'bg-slate-900/90 border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.25)] ring-1 ring-blue-400/40'
                  : isHovered
                  ? 'bg-slate-900/90 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105'
                  : isRelated
                  ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-950/40 border-slate-900 opacity-40'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded bg-slate-900 border border-slate-800">
                  {node.icon}
                </div>
                <span className="text-[11px] font-bold font-mono-code text-white tracking-wider truncate">
                  {node.label}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono-code line-clamp-1 leading-tight">
                {node.sublabel}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Footer Info Badge */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-500 font-mono-code border-t border-slate-800/60 pt-2">
        <span>INTERACTIVE SYSTEM MAP</span>
        <span className="text-blue-400">HOVER NODE TO EXPLORE RELATIONS</span>
      </div>
    </div>
  );
}
