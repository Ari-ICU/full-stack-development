import { useState, useEffect } from "react";
import { MFE_REGISTRY } from "@/app/registry";
import { MFEStatus } from "@/types/mfe";

export function useMFEStatus() {
  const [statuses, setStatuses] = useState<Record<string, MFEStatus>>(() =>
    Object.fromEntries(MFE_REGISTRY.map((m) => [m.id, "checking"]))
  );

  useEffect(() => {
    console.log("🌐 Initializing MFE status monitoring...");
    
    const check = async () => {
      const results = await Promise.allSettled(
        MFE_REGISTRY.map(async (mfe) => {
          try {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), 2000);
            
            const res = await fetch(mfe.url, { 
              method: "HEAD", 
              mode: 'no-cors', 
              signal: controller.signal 
            });
            clearTimeout(id);
            return { id: mfe.id, ok: true };
          } catch (err) {
            return { id: mfe.id, ok: false };
          }
        })
      );

      const next: Record<string, MFEStatus> = {};
      results.forEach((r, i) => {
        const id = MFE_REGISTRY[i].id;
        next[id] = r.status === "fulfilled" && r.value.ok ? "online" : "offline";
      });
      
      console.log("📊 MFE Status Update:", next);
      setStatuses(next);
    };

    check();
    const interval = setInterval(check, 10000);
    return () => clearInterval(interval);
  }, []);

  return statuses;
}
