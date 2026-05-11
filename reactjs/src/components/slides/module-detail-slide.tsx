import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Menu, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Module } from '@/data/modules'
import { StateAnimation, HooksAnimation, ServerAnimation, PerformanceAnimation } from '@/components/slide-animations'
import { CodeBlock } from '@/components/code-block'

interface ModuleDetailSlideProps {
  selectedModule: Module | null;
  currentSubSlide: number;
  onExit: () => void;
  onPrevSubSlide: () => void;
  onNextSubSlide: () => void;
  onJumpToSlide: (index: number) => void;
}

export function ModuleDetailSlide({ 
  selectedModule, 
  currentSubSlide, 
  onExit, 
  onPrevSubSlide, 
  onNextSubSlide,
  onJumpToSlide 
}: ModuleDetailSlideProps) {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!selectedModule) {
    return (
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4 border-white/20 text-white/40">No Module Selected</Badge>
        <p className="text-white/60 mb-6">Please select a module from the curriculum roadmap to view its details.</p>
        <Button onClick={onExit} variant="secondary">Go to Curriculum</Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-12">
        <Button 
          variant="ghost" 
          onClick={onExit}
          className="text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white gap-2 backdrop-blur-sm"
        >
          <ArrowLeft size={18} />
          Exit Lesson
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsMenuOpen(false); }}
              className={`hidden sm:flex rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all h-10 px-4 ${
                isResourcesOpen ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              <BookOpen size={14} className="mr-2" /> Resources
            </Button>

            {/* Resources Dropdown */}
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 z-50"
                >
                  <h3 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4 px-2">React Ecosystem</h3>
                  <div className="flex flex-col gap-1 text-left">
                    {[
                      { name: "React Docs", url: "https://react.dev" },
                      { name: "Next.js Docs", url: "https://nextjs.org/docs" },
                      { name: "React Query", url: "https://tanstack.com/query/latest" },
                      { name: "Zustand", url: "https://github.com/pmndrs/zustand" }
                    ].map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-sm font-bold text-white/60 group-hover:text-cyan-400">{link.name}</span>
                        <ArrowRight size={14} className="text-white/20 group-hover:text-cyan-500" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => { setIsMenuOpen(!isMenuOpen); setIsResourcesOpen(false); }}
            className={`rounded-xl transition-all w-10 h-10 ${
              isMenuOpen ? 'bg-cyan-600 text-white rotate-90 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'text-white/40 hover:bg-white/5'
            }`}
          >
            <Menu size={18} />
          </Button>

          <div className="h-6 w-px bg-white/10 mx-1 hidden md:block" />

          <span className="text-[10px] font-mono text-white/30 hidden md:block">
            {currentSubSlide + 1} / {selectedModule.slides.length}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedModule.id}-${currentSubSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Module {selectedModule?.id} • {selectedModule?.title}
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {selectedModule.slides[currentSubSlide].title}
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl">
              {selectedModule.slides[currentSubSlide].content}
            </p>
            
            <div className="flex gap-4">
              <Button 
                disabled={currentSubSlide === 0}
                onClick={onPrevSubSlide}
                variant="outline" 
                className="bg-transparent border-white/10 text-white hover:bg-white/5 px-6 backdrop-blur-md disabled:opacity-20 disabled:bg-transparent"
              >
                Previous
              </Button>
              {currentSubSlide < selectedModule.slides.length - 1 ? (
                <Button 
                  onClick={onNextSubSlide}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2 px-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  Next Slide <ArrowRight size={18} />
                </Button>
              ) : (
                <Button 
                  onClick={onExit}
                  className="bg-green-500 hover:bg-green-600 text-white gap-2 px-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  Complete Module <CheckCircle2 size={18} />
                </Button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 w-full relative">
            <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="w-full relative z-10 max-h-[520px] overflow-y-auto custom-scrollbar">
              {selectedModule.slides[currentSubSlide].animation ? (
                <div className="w-full max-w-lg mx-auto">
                  {selectedModule.slides[currentSubSlide].animation === 'state' && <StateAnimation />}
                  {selectedModule.slides[currentSubSlide].animation === 'hooks' && <HooksAnimation />}
                  {selectedModule.slides[currentSubSlide].animation === 'server' && <ServerAnimation />}
                  {selectedModule.slides[currentSubSlide].animation === 'performance' && <PerformanceAnimation />}
                </div>
              ) : selectedModule.slides[currentSubSlide].codeBefore && selectedModule.slides[currentSubSlide].codeAfter ? (
                <div className="w-full grid grid-cols-1 gap-4 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <div className="bg-cyan-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400">VS</div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group bg-[#0d1b2e]/60 border border-white/5 backdrop-blur-xl rounded-2xl p-6 font-mono text-[13px] overflow-hidden shadow-2xl relative hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full group-hover:bg-red-500/10 transition-colors" />
                    <div className="flex justify-between items-center mb-4 relative z-10">
                      <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px] px-2 py-0">METHOD A</Badge>
                      <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Legacy / Basic</span>
                    </div>
                    <div className="text-white/60 leading-relaxed relative z-10 scrollbar-hide overflow-x-auto">
                      <CodeBlock code={selectedModule.slides[currentSubSlide].codeBefore!} />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group bg-[#0d1b2e]/80 border border-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 font-mono text-[13px] overflow-hidden shadow-2xl relative hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
                    <div className="flex justify-between items-center mb-4 relative z-10">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-[10px] px-2 py-0">METHOD B</Badge>
                      <span className="text-cyan-400/40 text-[10px] uppercase tracking-widest font-bold italic underline decoration-cyan-500/30">Recommended</span>
                    </div>
                    <div className="text-white leading-relaxed font-medium relative z-10 scrollbar-hide overflow-x-auto">
                      <CodeBlock code={selectedModule.slides[currentSubSlide].codeAfter!} />
                    </div>
                  </motion.div>
                </div>
              ) : selectedModule.slides[currentSubSlide].code ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full bg-[#0d1b2e]/60 border border-white/5 backdrop-blur-2xl rounded-3xl p-8 font-mono text-[14px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group transition-all duration-500"
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
                  <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/20" />
                    <div className="ml-auto flex gap-4">
                      <div className="h-1.5 w-12 bg-white/5 rounded-full" />
                      <div className="h-1.5 w-8 bg-white/5 rounded-full" />
                    </div>
                  </div>
                  <div className="text-white/90 leading-relaxed scrollbar-hide overflow-x-auto">
                    <CodeBlock code={selectedModule.slides[currentSubSlide].code!} />
                  </div>
                </motion.div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl bg-slate-900 border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-8 md:p-12 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div>
                  <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-2">React Course Navigation</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedModule.title}</h3>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-14 h-14 rounded-2xl border-white/10 hover:bg-gray-950 hover:text-white text-gray-950 transition-colors"
                >
                  <ArrowLeft size={24} className="rotate-90" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedModule.slides.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => { 
                        onJumpToSlide(i);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-start gap-5 p-6 rounded-3xl transition-all text-left group ${
                        i === currentSubSlide 
                          ? 'bg-cyan-500/10 border border-cyan-500/20' 
                          : 'bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        i === currentSubSlide ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white/40 group-hover:bg-white/20'
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className={`font-bold mb-1 transition-colors ${
                          i === currentSubSlide ? 'text-cyan-400' : 'text-white/90'
                        }`}>
                          {slide.title}
                        </h4>
                        <p className="text-xs text-white/30 line-clamp-1 font-medium italic">
                          {slide.content}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-white/5 bg-white/5 text-center">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                  ReactJS Mastery · Slide {currentSubSlide + 1} of {selectedModule.slides.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
