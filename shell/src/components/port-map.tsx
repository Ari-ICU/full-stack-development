export function PortMap() {
  const ports = [
    { name: "shell",   port: 3000, color: "#a78bfa", active: true },
    { name: "html",    port: 3001, color: "#ff6b47" },
    { name: "css",     port: 3002, color: "#818cf8" },
    { name: "js",      port: 3003, color: "#facc15" },
    { name: "react",   port: 3004, color: "#38bdf8" },
    { name: "node",    port: 3005, color: "#4ade80" },
  ];

  return (
    <div className="shrink-0 glass rounded-2xl p-5 font-mono text-xs min-w-[220px]">
      <div className="text-[10px] uppercase tracking-widest text-white/25 mb-4">Port Map</div>
      {ports.map((row) => (
        <div key={row.port} className={`flex items-center gap-3 py-1.5 ${row.active ? "opacity-100" : "opacity-60"}`}>
          <span style={{ color: row.color, width: 52 }}>{row.name}</span>
          <span className="text-white/15">→</span>
          <span className="text-white/40">:{row.port}</span>
          {row.active && <span className="ml-auto badge text-[8px]" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}>SHELL</span>}
        </div>
      ))}
    </div>
  );
}
