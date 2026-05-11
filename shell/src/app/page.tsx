"use client";

import { MFE_REGISTRY } from "./registry";
import { useMFEStatus } from "@/hooks/use-mfe-status";
import { Navigation } from "@/components/navigation";
import { ArchBanner } from "@/components/arch-banner";
import { MFECard } from "@/components/mfe-card";
import { PortMap } from "@/components/port-map";

export default function ShellPortal() {
  const statuses = useMFEStatus();

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Navigation statuses={statuses} />

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-14 px-8 md:px-14 max-w-7xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-8 border border-blue-100">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/>
            <rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/>
          </svg>
          Micro Frontend Architecture
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter mb-6">
          Full-Stack{" "}
          <span className="text-gradient">Dev Portal</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-medium">
          5 independently deployed course applications, unified by a single shell.
          Each MFE runs on its own port, owns its stack, and deploys on its own schedule.
        </p>

        <ArchBanner />
      </header>

      {/* Course Registry Grid */}
      <main className="relative z-10 flex-1 px-8 md:px-14 pb-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Course MFEs</h2>
          <span className="text-[11px] font-mono text-slate-300">Click any card to launch</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {MFE_REGISTRY.map((mfe) => (
            <MFECard key={mfe.id} mfe={mfe} status={statuses[mfe.id]} />
          ))}
        </div>

        {/* Architecture Info Card */}
        <section className="mt-12 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-black mb-3 text-slate-900">How it Works</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Each course is a <strong className="text-slate-700">fully independent Next.js application</strong> — its own codebase, dependencies, and dev server.
                The Shell (this app) acts as the <strong className="text-slate-700">orchestrator</strong>, providing navigation, status monitoring, and the unified entry point.
                Teams can deploy any course without touching others.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Independent Deploys", desc: "Each MFE ships on its own schedule", icon: "🚀" },
                  { label: "Tech Agnostic", desc: "Each app can use any framework version", icon: "🔧" },
                  { label: "Fault Isolated", desc: "One MFE down never breaks others", icon: "🛡️" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-xs font-bold text-slate-700 mb-1">{item.label}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <PortMap />
          </div>
        </section>
      </main>

      {/* Portal Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-6 px-8 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-slate-400 font-mono">
          Micro Frontend Architecture · {MFE_REGISTRY.length} Independent MFEs
        </span>
        <span className="text-[11px] text-slate-400 font-mono">
          Shell @ localhost:3000
        </span>
      </footer>
    </div>
  );
}
