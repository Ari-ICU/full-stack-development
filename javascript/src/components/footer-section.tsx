"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onAction: () => void;
}

export function FooterSection({ onAction }: FooterSectionProps) {
  return (
    <footer className="w-full bg-background/50 backdrop-blur-xl border-t border-white/5 py-8 px-6 z-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Play className="w-5 h-5 text-primary fill-current" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground/80">Continue Learning</p>
            <p className="text-xs text-foreground/40">Pick up right where you left off</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button 
            onClick={onAction}
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white gap-2 px-8 py-6 rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary),0.3)]"
          >
            Start Course Now
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
