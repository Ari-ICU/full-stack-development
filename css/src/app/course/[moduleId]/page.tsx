"use client";

import { useParams } from "next/navigation";
import { cssCurriculum } from "@/data/curriculum";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Clock, CheckCircle2, BookOpen, Target, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const module = cssCurriculum.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Module Not Found</h2>
        <Link href="/">
          <Button variant="outline" className="rounded-full">Return to Overview</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-400 hover:text-blue-600 transition-all mb-10 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 hover:border-blue-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Roadmap</span>
        </Link>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-6 border border-blue-100/50">
              <BookOpen className="w-3 h-3" />
              Course Module
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">{module.title}</h1>
            <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
              {module.description}
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Lessons
              </h2>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                {module.lessons.length} Total
              </span>
            </div>
            
            {module.lessons.map((lesson, idx) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group premium-card flex flex-col sm:flex-row items-center gap-6 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-lg font-black text-blue-600/30 group-hover:text-blue-600 group-hover:bg-blue-100 transition-all">
                  {idx + 1}
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-blue-600 transition-colors">{lesson.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{lesson.description}</p>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    15 min
                  </div>
                  <Link href={`/course/${moduleId}/${lesson.id}`} className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 px-6 shadow-md shadow-blue-500/10 transition-all duration-300 hover:scale-105 group-hover:translate-x-1">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Start
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 border border-slate-200/80 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Your Progress</h3>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "0%" }}
                    className="h-full bg-blue-600 rounded-full" 
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-slate-400">0% Completed</p>
                  <p className="text-sm font-bold text-slate-900">0/{module.lessons.length}</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Course Requirements</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm font-semibold text-slate-600 bg-slate-50/50 p-3 rounded-2xl border border-slate-100/50">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                    Basic HTML knowledge
                  </div>
                  <div className="flex items-start gap-3 text-sm font-semibold text-slate-600 bg-slate-50/50 p-3 rounded-2xl border border-slate-100/50">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                    A modern web browser
                  </div>
                  <div className="flex items-start gap-3 text-sm font-semibold text-slate-600 bg-slate-50/50 p-3 rounded-2xl border border-slate-100/50">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                    Code editor (VS Code)
                  </div>
                </div>
              </div>

              <Button variant="ghost" className="w-full mt-8 text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest text-[10px]">
                Reset Progress
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
