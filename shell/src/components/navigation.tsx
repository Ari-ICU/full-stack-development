import { MFE_REGISTRY } from "@/app/registry";
import { MFEStatus } from "@/types/mfe";

interface NavigationProps {
  statuses: Record<string, MFEStatus>;
}

export function Navigation({ statuses }: NavigationProps) {
  const onlineCount = Object.values(statuses).filter((s) => s === "online").length;

  return (
    <nav className="relative z-20 h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 md:px-14">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 shadow-sm shadow-blue-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/>
            <rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/>
          </svg>
        </div>
        <span className="font-bold text-sm tracking-tight text-slate-900">Dev <span className="text-blue-600">Portal</span></span>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: onlineCount > 0 ? "#22c55e" : "#ef4444" }}
        />
        <span className="text-slate-400">
          {onlineCount} / {MFE_REGISTRY.length} Online
        </span>
      </div>
    </nav>
  );
}
