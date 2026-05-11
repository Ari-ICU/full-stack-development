import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Module } from '@/data/modules'
import { CodeBlock } from '@/components/code-block'
import { PreviewWindow } from '@/components/preview-window'
import { useState } from 'react'
import { Code2, Play, Menu, BookOpen } from 'lucide-react'

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
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code')
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!selectedModule) {
    return (
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4 border-slate-200 text-slate-400">No Module Selected</Badge>
        <p className="text-slate-500 mb-6 font-medium">Please select a module from the curriculum roadmap to view its details.</p>
        <Button onClick={onExit} variant="secondary" className="bg-slate-200 hover:bg-slate-300 text-slate-700">Go to Curriculum</Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-12">
        <Button 
          variant="ghost" 
          onClick={onExit}
          className="text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 gap-2 shadow-sm"
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
                isResourcesOpen ? 'bg-orange-50 text-orange-700' : 'text-slate-500 hover:bg-slate-100'
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
                  className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50"
                >
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">External Links</h3>
                  <div className="flex flex-col gap-1 text-left">
                    {[
                      { name: "MDN HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                      { name: "W3Schools HTML", url: "https://www.w3schools.com/html/" },
                      { name: "HTML Living Standard", url: "https://html.spec.whatwg.org/" },
                      { name: "Can I Use?", url: "https://caniuse.com" }
                    ].map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm font-bold text-slate-600 group-hover:text-orange-600">{link.name}</span>
                        <ArrowRight size={14} className="text-slate-300 group-hover:text-orange-500" />
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
              isMenuOpen ? 'bg-slate-900 text-white rotate-90' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Menu size={18} />
          </Button>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block" />

          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden md:block">
            {currentSubSlide + 1} / {selectedModule.slides?.length || 0}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedModule.id}-${currentSubSlide}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-5 flex flex-col items-start text-left pt-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold tracking-widest uppercase mb-8`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Module {selectedModule?.id} • {selectedModule?.title}
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {selectedModule.slides?.[currentSubSlide]?.title}
            </h2>
            <div className="text-lg text-slate-950 mb-12 leading-relaxed max-w-xl font-medium whitespace-pre-line">
              {selectedModule.slides?.[currentSubSlide]?.content.split('\n').map((line, i) => {
                if (line.trim().startsWith('•')) {
                  const parts = line.split(':');
                  if (parts.length > 1) {
                    return (
                      <div key={i}>
                        <span className="font-black text-slate-900">{parts[0]}</span>
                        {':'}
                        <span className="text-slate-900">{parts.slice(1).join(':')}</span>
                      </div>
                    );
                  }
                }
                return <div key={i}>{line}</div>;
              })}
            </div>
            
            <div className="flex gap-4">
              <Button 
                disabled={currentSubSlide === 0}
                onClick={onPrevSubSlide}
                variant="outline" 
                className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50 px-6 disabled:opacity-30 shadow-sm"
              >
                Previous
              </Button>
              {selectedModule.slides && currentSubSlide < selectedModule.slides.length - 1 ? (
                <Button 
                  onClick={onNextSubSlide}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-2 px-8 shadow-md shadow-orange-100 font-bold"
                >
                  Next Slide <ArrowRight size={18} />
                </Button>
              ) : (
                <Button 
                  onClick={onExit}
                  className="bg-green-600 hover:bg-green-700 text-white gap-2 px-8 shadow-md shadow-green-100 font-bold"
                >
                  Complete Module <CheckCircle2 size={18} />
                </Button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="w-full flex flex-col gap-6">
              {/* Tab Switcher (Classic) */}
              <div className="flex gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl w-fit">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all ${
                    activeTab === 'code' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Code2 size={14} />
                  Source Code
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all ${
                    activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Play size={14} />
                  Live Preview
                </button>
              </div>

              <div className="w-full max-h-[75vh] overflow-y-auto custom-scrollbar rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                {selectedModule.slides?.[currentSubSlide]?.code ? (
                  <AnimatePresence mode="wait">
                    {activeTab === 'code' ? (
                      <motion.div 
                        key="code"
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        className="w-full font-mono text-[14px]"
                      >
                        <div className="flex gap-1.5 px-8 pt-8 pb-2 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="text-slate-900 leading-relaxed">
                          <CodeBlock code={selectedModule.slides[currentSubSlide].code!} />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-[450px]"
                      >
                        <PreviewWindow code={selectedModule.slides[currentSubSlide].code!} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <div className="flex items-center justify-center h-64 text-slate-300 font-mono italic text-sm">
                    // No code example for this slide
                  </div>
                )}
              </div>
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
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl bg-white border border-slate-200 rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-8 md:p-12 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-2">Lesson Navigation</h2>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{selectedModule.title}</h3>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-14 h-14 rounded-2xl border-slate-200 hover:bg-slate-100"
                >
                  <ArrowLeft size={24} className="rotate-90" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedModule.slides?.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => { 
                        onJumpToSlide(i);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-start gap-5 p-6 rounded-3xl transition-all text-left group ${
                        i === currentSubSlide 
                          ? 'bg-orange-50 border border-orange-200' 
                          : 'bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        i === currentSubSlide ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className={`font-bold mb-1 transition-colors ${
                          i === currentSubSlide ? 'text-orange-900' : 'text-slate-900'
                        }`}>
                          {slide.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1 font-medium italic">
                          {slide.content}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-slate-100 bg-slate-50/50 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  HTML Fundamentals · Slide {currentSubSlide + 1} of {selectedModule.slides?.length || 0}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
