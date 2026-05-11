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
      <div className="h-screen w-full bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const slides = [
    <HeroSlide key="hero" />,
    <div key="curriculum" className="w-full">
      <CurriculumSection onModuleClick={handleModuleClick} />
    </div>,
    <ModuleDetailSlide 
      key="module-detail" 
      selectedModule={selectedModule} 
      onBack={() => setCurrentSlide(1)} 
    />
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col font-sans selection:bg-yellow-400/20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: currentSlide * -50,
            opacity: 0.05
          }}
          transition={{ duration: 1 }}
          className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: currentSlide * 50,
            opacity: 0.03
          }}
          transition={{ duration: 1 }}
          className="absolute bottom-[100px] -left-[50px] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* Slide Viewer */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-7xl">
              {slides[currentSlide]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {currentSlide !== 2 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden xl:block">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="w-16 h-16 rounded-full border-slate-200 bg-white/80 backdrop-blur-md hover:border-yellow-500/50 shadow-sm"
              >
                <ChevronLeft size={32} className="text-slate-400" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden xl:block">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="w-16 h-16 rounded-full border-slate-200 bg-white/80 backdrop-blur-md hover:border-yellow-500/50 shadow-sm"
              >
                <ChevronRight size={32} className="text-slate-400" />
              </Button>
            </div>
          </>
        )}

        {/* Pagination Indicators */}
        {currentSlide !== 2 && (
          <div className="absolute bottom-32 flex gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentSlide === i ? 'w-10 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]' : 'w-2 bg-slate-200 hover:bg-slate-300'
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
