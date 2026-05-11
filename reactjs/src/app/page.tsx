'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FooterSection } from '@/components/footer-section'
import { CurriculumSection } from '@/components/curriculum-section'
import { useCourseState } from '@/hooks/use-course-state'
import { HeroSlide } from '@/components/slides/hero-slide'
import { ModuleDetailSlide } from '@/components/slides/module-detail-slide'

export default function Home() {
  const {
    currentSlide,
    setCurrentSlide,
    selectedModule,
    currentSubSlide,
    hydrated,
    handleModuleClick,
    nextSlide,
    prevSlide,
    nextSubSlide,
    prevSubSlide,
    setCurrentSubSlide
  } = useCourseState()

  // Don't render until localStorage has been read — prevents flashing the hero
  if (!hydrated) {
    return (
      <div className="h-screen w-full bg-[#0a1628] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
          <span className="text-white/30 text-sm font-mono tracking-widest">Loading...</span>
        </div>
      </div>
    )
  }

  const slides = [
    <HeroSlide key="hero" />,
    <div key="curriculum" className="w-full max-w-6xl px-6 z-10">
      <CurriculumSection onModuleClick={handleModuleClick} />
    </div>,
    <ModuleDetailSlide 
      key="module-detail"
      selectedModule={selectedModule}
      currentSubSlide={currentSubSlide}
      onExit={() => setCurrentSlide(1)}
      onPrevSubSlide={prevSubSlide}
      onNextSubSlide={nextSubSlide}
      onJumpToSlide={setCurrentSubSlide}
    />
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a1628] flex flex-col font-sans selection:bg-cyan-500/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_80%,#61dafb_2px,transparent_2px),radial-gradient(circle_at_80%_20%,#61dafb_1px,transparent_1px)] bg-[length:50px_50px]" />
        
        {/* Glow Orbs */}
        <motion.div 
          animate={{ 
            x: currentSlide * -40,
            opacity: 0.15 + (currentSlide * 0.05)
          }}
          transition={{ duration: 1 }}
          className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: currentSlide * 40,
            opacity: 0.1 + (currentSlide * 0.05)
          }}
          transition={{ duration: 1 }}
          className="absolute bottom-[100px] -left-[50px] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* Main Content Area (Slide Viewer) */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col items-center justify-center overflow-hidden"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        {currentSlide !== 2 && (
          <div className="absolute bottom-28 flex items-center gap-3 z-20">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentSlide === i ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Global Slide Controls */}
        {currentSlide !== 2 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 text-white transition-all duration-300 group"
              >
                <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 text-white transition-all duration-300 group"
              >
                <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Footer Section */}
      <FooterSection onAction={nextSlide} />
    </div>
  )
}
