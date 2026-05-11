"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FooterSection } from "@/components/footer-section";
import { CurriculumSection } from "@/components/curriculum-section";
import { useCourseState } from "@/hooks/use-course-state";
import { HeroSlide } from "@/components/slides/hero-slide";
import { ModuleDetailSlide } from "@/components/slides/module-detail-slide";

export default function LandingPage() {
  const {
    currentSlide,
    setCurrentSlide,
    selectedModule,
    hydrated,
    handleModuleClick,
    nextSlide,
    prevSlide,
  } = useCourseState();

  if (!hydrated) {
    return (
      <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-blue-500/10 border-t-blue-500 rounded-full animate-spin" />
          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Loading...</span>
        </div>
      </div>
    );
  }

  const slides = [
    <HeroSlide key="hero" />,
    <div key="curriculum" className="w-full max-w-6xl px-6 z-10">
      <CurriculumSection onModuleClick={handleModuleClick} />
    </div>,
    <ModuleDetailSlide 
      key="module-detail" 
      selectedModule={selectedModule} 
      onBack={() => setCurrentSlide(1)} 
    />
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col font-sans selection:bg-blue-500/10 text-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_80%,#2563eb_1px,transparent_1px),radial-gradient(circle_at_80%_20%,#2563eb_1px,transparent_1px)] bg-[length:60px_60px]" />
        
        <motion.div 
          animate={{ 
            x: currentSlide * -40,
            opacity: 0.3
          }}
          transition={{ duration: 1 }}
          className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: currentSlide * 40,
            opacity: 0.2
          }}
          transition={{ duration: 1 }}
          className="absolute bottom-[100px] -left-[50px] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" 
        />
      </div>

      {/* Slide Viewer */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
          >
            <div className="w-full flex flex-col items-center justify-center overflow-hidden">
              {slides[currentSlide]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {currentSlide !== 2 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-blue-500/30 text-slate-400 hover:text-slate-900 transition-all duration-300 group"
              >
                <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-blue-500/30 text-slate-400 hover:text-slate-900 transition-all duration-300 group"
              >
                <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </>
        )}

        {/* Pagination Indicators */}
        {currentSlide !== 2 && (
          <div className="absolute bottom-28 flex items-center gap-3 z-20">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentSlide === i ? 'w-10 bg-blue-600 shadow-md shadow-blue-100' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      {currentSlide !== 2 && <FooterSection onAction={nextSlide} />}
    </div>
  );
}
