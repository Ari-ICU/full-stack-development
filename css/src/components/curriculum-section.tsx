"use client";

import { motion } from "framer-motion";
import { cssCurriculum, Module } from "@/data/curriculum";
import { Box, Layout, ArrowRight, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CurriculumSectionProps {
  onModuleClick: (module: Module) => void;
}

export function CurriculumSection({ onModuleClick }: CurriculumSectionProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Course Roadmap</h2>
          <p className="text-slate-500 text-lg font-medium">Your structured journey to CSS mastery.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cssCurriculum.map((module, idx) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-slate-200/80 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:bg-blue-100/50">
              {module.icon === 'Wind' ? <Wind className="w-8 h-8 text-blue-600" /> : 
               module.icon === 'Layout' ? <Layout className="w-8 h-8 text-blue-600" /> : 
               <Box className="w-8 h-8 text-blue-600" />}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{module.title}</h3>
            <p className="text-slate-500 mb-10 leading-relaxed font-medium">
              {module.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {module.lessons.length} Modules
              </span>
              <Button 
                variant="ghost" 
                onClick={() => onModuleClick(module)}
                className="p-0 h-auto hover:bg-transparent text-blue-600 hover:text-blue-700 font-bold gap-2 text-sm uppercase tracking-wider"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
