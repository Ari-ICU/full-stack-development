import { ArrowLeft, ArrowRight, CheckCircle2, Cpu } from "lucide-react";
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
          variant="outline" 
          onClick={onBack}
          className="rounded-2xl bg-white border-slate-200 text-slate-600 hover:bg-slate-50 gap-2 w-full sm:w-auto shadow-sm"
        >
          <ArrowLeft size={18} />
          Back to Roadmap
        </Button>
        
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">
          Previewing Module {selectedModule?.id}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-[10px] font-black tracking-widest uppercase mb-6">
            Module Content
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 tracking-tight">{selectedModule.title}</h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            {selectedModule.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">
            {selectedModule.slides.slice(0, 8).map((slide, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-600">
                <div className="w-6 h-6 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600" />
                </div>
                <span className="font-bold text-sm md:text-base">{slide.title}</span>
              </div>
            ))}
            {selectedModule.slides.length > 8 && (
              <div className="flex items-center gap-4 text-slate-400 italic">
                <span className="text-sm font-medium">And {selectedModule.slides.length - 8} more topics...</span>
              </div>
            )}
          </div>

          <Link href={`/course/${selectedModule.id}`} className="block">
            <Button className="rounded-2xl px-10 h-14 text-lg bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-200 gap-2 w-full sm:w-auto transition-all active:scale-95">
              Start Learning <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 border border-slate-200 relative group overflow-hidden shadow-2xl shadow-slate-200/50">
           <div className="absolute inset-0 bg-yellow-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="relative z-10">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-8 mx-auto lg:mx-0">
               <Cpu className="w-8 h-8 md:w-10 md:h-10 text-yellow-600" />
             </div>
             <h3 className="text-xl md:text-2xl font-black mb-4 text-center lg:text-left text-slate-900 tracking-tight">JS Engine Internals</h3>
             <p className="text-slate-500 leading-relaxed mb-8 text-center lg:text-left text-sm md:text-base font-medium">
               Go beyond basic syntax. Understand the Event Loop, Call Stack, 
               and Memory Management to write high-performance code.
             </p>
             <div className="flex gap-2 justify-center lg:justify-start">
               <div className="w-8 h-1.5 rounded-full bg-yellow-500 shadow-sm" />
               <div className="w-2 h-1.5 rounded-full bg-slate-200" />
               <div className="w-2 h-1.5 rounded-full bg-slate-100" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
