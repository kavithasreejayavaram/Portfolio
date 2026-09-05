'use client';

import React, { useState } from 'react';
import { ArrowRight, Info, Layers, Cpu, Database, Server, Monitor } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  type?: 'input' | 'process' | 'engine' | 'storage' | 'output';
}

interface ArchitectureConnection {
  from: string;
  to: string;
}

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
  title?: string;
}

export default function ArchitectureDiagram({ nodes, connections, title = "SYSTEM ARCHITECTURE FLOW" }: ArchitectureDiagramProps) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const getNodeBadgeColor = (type?: string) => {
    switch (type) {
      case 'input':
        return 'bg-blue-950/70 border-blue-600/50 text-blue-300';
      case 'process':
        return 'bg-indigo-950/70 border-indigo-600/50 text-indigo-300';
      case 'engine':
        return 'bg-violet-950/70 border-violet-600/50 text-violet-300';
      case 'storage':
        return 'bg-emerald-950/70 border-emerald-600/50 text-emerald-300';
      case 'output':
        return 'bg-cyan-950/70 border-cyan-600/50 text-cyan-300';
      default:
        return 'bg-slate-900 border-slate-800 text-slate-300';
    }
  };

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 font-mono-code">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {title}
          </span>
        </div>
        <span className="text-[10px] text-slate-500">
          HOVER COMPONENT FOR ROLE BREAKDOWN
        </span>
      </div>

      {/* Nodes Flow Graph */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 py-4">
        {nodes.map((node, index) => {
          const isSelected = activeNodeId === node.id;
          return (
            <React.Fragment key={node.id}>
              <div
                onMouseEnter={() => setActiveNodeId(node.id)}
                className={`px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${getNodeBadgeColor(
                  node.type
                )} ${
                  isSelected
                    ? 'ring-2 ring-blue-400 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : 'hover:border-slate-600 hover:scale-102'
                }`}
              >
                <div className="text-xs font-bold tracking-wider uppercase text-center">
                  {node.label}
                </div>
              </div>

              {index < nodes.length - 1 && (
                <div className="text-slate-600 flex items-center shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      {activeNode && (
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3 transition-all">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white uppercase">{activeNode.label}</span>
              <span className="text-[10px] text-slate-500 uppercase px-1.5 py-0.5 rounded bg-slate-800">
                ROLE EXPLANATION
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {activeNode.role}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
