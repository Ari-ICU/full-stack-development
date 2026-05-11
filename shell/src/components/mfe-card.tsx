"use client";

import { useState } from "react";
import { MFEConfig, MFEStatus } from "@/types/mfe";

interface MFECardProps {
  mfe: MFEConfig;
  status: MFEStatus;
}

export function MFECard({ mfe, status }: MFECardProps) {
  const [hovered, setHovered] = useState(false);

  const statusColors = {
    checking: { dot: "#94a3b8", label: "Checking..." },
    online:   { dot: "#22c55e", label: "Running" },
    offline:  { dot: "#ef4444", label: "Offline" },
  };
  const s = statusColors[status];

  // Map vibrant colors to professional equivalents for text/borders
  const accentColor = mfe.id === 'html' ? '#ea580c' : 
                     mfe.id === 'css' ? '#2563eb' : 
                     mfe.id === 'javascript' ? '#ca8a04' : 
                     mfe.id === 'reactjs' ? '#0891b2' : 
                     mfe.id === 'nodejs' ? '#16a34a' : '#2563eb';

  return (
    <div
      className="glass-card rounded-[24px] p-8 flex flex-col gap-6 cursor-pointer relative overflow-hidden group"
      style={{
        borderColor: hovered ? accentColor : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => status === "online" && window.open(mfe.url, "_blank")}
      id={`mfe-card-${mfe.id}`}
    >
      {/* Module number (Subtle background) */}
      <span
        className="absolute top-6 right-7 font-black text-6xl leading-none select-none opacity-[0.03]"
        style={{ color: '#000' }}
      >
        {mfe.number}
      </span>

      {/* Header row */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
          style={{ background: 'white', border: `1px solid #e2e8f0`, color: accentColor }}
          dangerouslySetInnerHTML={{ __html: mfe.icon.replace(/><\/svg>/g, ' style="width:24px;height:24px"></svg>') }}
        />
        <span
          className="badge"
          style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}
        >
          {mfe.tag}
        </span>
      </div>

      {/* Title */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold leading-tight text-slate-900">
          {mfe.name}
        </h2>
        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
          {mfe.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="relative z-10 text-sm text-slate-500 leading-relaxed flex-1">
        {mfe.description}
      </p>

      {/* Topics */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {mfe.topics.map((t) => (
          <span
            key={t}
            className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer: status + launch */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: s.dot,
              animation: status === "checking" ? "pulse 1.5s infinite" : "none",
            }}
          />
          <span className="text-xs font-medium text-slate-500">{s.label}</span>
          <span className="text-[10px] font-mono text-slate-300 ml-1">:{mfe.port}</span>
        </div>

        <button
          disabled={status !== "online"}
          onClick={(e) => { e.stopPropagation(); window.open(mfe.url, "_blank"); }}
          className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed shadow-sm"
          style={{
            background: status === "online" ? accentColor : "#f1f5f9",
            color: status === "online" ? "white" : "#94a3b8",
          }}
          id={`launch-${mfe.id}`}
        >
          Open
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
