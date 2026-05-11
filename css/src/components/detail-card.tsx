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
      whileHover={{ x: 10 }}
      className="flex items-center gap-6 p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 group hover:border-blue-500/30 hover:shadow-md"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-blue-100/50">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
          {label}
        </p>
        <p className="text-base font-bold text-slate-800 tracking-tight">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
