"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface DetailCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function DetailCard({ icon: Icon, label, value }: DetailCardProps) {
  return (
    <motion.div
      whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-colors group"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-lg font-bold text-foreground/80">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
