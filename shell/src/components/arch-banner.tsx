export function ArchBanner() {
  const apps = [
    { label: "Shell :3000", color: "#a78bfa" },
    { label: "HTML :3001",  color: "#ff6b47" },
    { label: "CSS :3002",   color: "#818cf8" },
    { label: "JS :3003",    color: "#facc15" },
    { label: "React :3004", color: "#38bdf8" },
    { label: "Node :3005",  color: "#4ade80" },
  ];
  return (
    <div className="glass rounded-2xl px-6 py-4 flex flex-wrap items-center gap-3 text-xs font-mono">
      <span className="text-white/25 uppercase tracking-widest text-[10px]">MFE Registry</span>
      <span className="text-white/10">|</span>
      {apps.map((a, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: a.color }} />
          <span style={{ color: a.color }}>{a.label}</span>
          {i < apps.length - 1 && <span className="text-white/10 ml-1.5">→</span>}
        </span>
      ))}
    </div>
  );
}
