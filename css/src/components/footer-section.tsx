"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onAction: () => void;
}

export function FooterSection({ onAction }: FooterSectionProps) {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-xl border-t border-slate-200 py-6 px-6 z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
            <Play className="w-5 h-5 text-blue-600 fill-current" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Continue Learning</p>
            <p className="text-xs text-slate-500 font-medium tracking-tight">Pick up right where you left off</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button 
            onClick={onAction}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white gap-2 px-10 py-6 rounded-2xl shadow-lg shadow-blue-500/20 font-bold transition-all duration-300 hover:scale-105"
          >
            Start Course Now
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
