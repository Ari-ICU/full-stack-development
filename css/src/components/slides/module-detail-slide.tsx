import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Module } from "@/data/curriculum";
import Link from "next/link";

interface ModuleDetailSlideProps {
  selectedModule: Module | null;
  onBack: () => void;
}

export function ModuleDetailSlide({ selectedModule, onBack }: ModuleDetailSlideProps) {
  if (!selectedModule) return null;

  return (
    <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-500/30 gap-2 w-full sm:w-auto shadow-sm transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back to Roadmap
        </Button>
        
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
          Previewing Module {selectedModule?.id}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100">
            Module Content
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 tracking-tight">{selectedModule.title}</h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            {selectedModule.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">
            {selectedModule.lessons.slice(0, 6).map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-3 text-slate-600">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-blue-600" />
                </div>
                <span className="font-semibold text-sm md:text-base">{lesson.title}</span>
              </div>
            ))}
          </div>

          <Link href={`/course/${selectedModule.id}`} className="block">
            <Button className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 gap-2 w-full sm:w-auto text-white font-bold transition-all duration-300 hover:scale-105">
              Start Learning <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="premium-card rounded-[32px] md:rounded-[40px] p-8 md:p-12 relative group overflow-hidden border-slate-200/60 bg-white/50 backdrop-blur-sm">
           <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="relative z-10">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 mx-auto lg:mx-0">
               <Code className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
             </div>
             <h3 className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-left text-slate-900">Hands-on Practice</h3>
             <p className="text-slate-500 leading-relaxed mb-8 text-center lg:text-left text-sm md:text-base font-medium">
               Every lesson includes interactive coding exercises and real-world projects 
               to ensure you can apply what you learn immediately.
             </p>
             <div className="flex gap-2 justify-center lg:justify-start">
               <div className="w-6 h-2 rounded-full bg-blue-600" />
               <div className="w-2 h-2 rounded-full bg-slate-200" />
               <div className="w-2 h-2 rounded-full bg-slate-200" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
