"use client";

import { useParams, useRouter } from "next/navigation";
import { cssCurriculum } from "@/data/curriculum";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  BookOpen, 
  Code2, 
  PlayCircle,
  CheckCircle2,
  Sparkles,
  Menu,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Use a light theme for the syntax highlighter
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;

  const module = cssCurriculum.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'code' | 'preview'>('code');
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('desktop');
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Reset to first slide when lesson changes
    setCurrentSlideIndex(0);
    setViewMode('code');
    setPreviewDevice('desktop');
  }, [lessonId]);

  useEffect(() => {
    // Reset view mode when slide changes
    setViewMode('code');
  }, [currentSlideIndex]);

  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Lesson Not Found</h2>
        <Link href={`/course/${moduleId}`}>
          <Button variant="outline" className="rounded-full">Back to Module</Button>
        </Link>
      </div>
    );
  }

  const currentSlide = lesson.slides[currentSlideIndex];
  const totalSlides = lesson.slides.length;
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Find next lesson
      const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
      if (lessonIndex < module.lessons.length - 1) {
        const nextLesson = module.lessons[lessonIndex + 1];
        router.push(`/course/${moduleId}/${nextLesson.id}`);
      } else {
        // Module complete
        router.push(`/course/${moduleId}`);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleNextAction = () => {
    if (currentSlide?.codeSnippet && viewMode === 'code') {
      setViewMode('preview');
    } else {
      nextSlide();
    }
  };

  return (
    <div className="relative flex-1 flex flex-col min-h-[calc(100vh-44px)] bg-slate-50 text-slate-900 z-10 overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full opacity-50" />
      </div>

      {/* Header */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-4">
          <Link href={`/course/${moduleId}`}>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 transition-colors">
              <X className="w-5 h-5 text-slate-500" />
            </Button>
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-slate-900 truncate max-w-[200px] md:max-w-none tracking-tight">{lesson.title}</h1>
            <div className="flex items-center gap-2">
               <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">
                Slide {currentSlideIndex + 1} of {totalSlides}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
            </div>
            <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <motion.div 
                className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </div>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden md:block" />

          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsMenuOpen(false); }}
              className={`hidden sm:flex rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all h-10 px-4 ${
                isResourcesOpen ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-100'
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
                  <div className="flex flex-col gap-1">
                    {[
                      { name: "MDN CSS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                      { name: "CSS-Tricks", url: "https://css-tricks.com" },
                      { name: "Tailwind Docs", url: "https://tailwindcss.com/docs" },
                      { name: "Bootstrap Docs", url: "https://getbootstrap.com/docs" }
                    ].map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{link.name}</span>
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500" />
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
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative flex z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${lessonId}-${currentSlideIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col lg:flex-row p-6 md:p-12 gap-8 lg:gap-16 max-w-7xl mx-auto w-full items-center lg:items-stretch"
          >
            {/* Content Side */}
            <div className="flex-1 space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                  {currentSlide?.type === 'theory' && <BookOpen className="w-3.5 h-3.5" />}
                  {currentSlide?.type === 'practice' && <Code2 className="w-3.5 h-3.5" />}
                  {currentSlide?.type === 'demo' && <PlayCircle className="w-3.5 h-3.5" />}
                  <span className="leading-none">{currentSlide?.type}</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
                  {currentSlide?.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
                  {currentSlide?.content}
                </p>
              </div>

              {!currentSlide?.codeSnippet && (
                <div className="flex items-center gap-4 pt-6">
                  <Button 
                    size="lg" 
                    onClick={handleNextAction} 
                    className="rounded-2xl px-10 h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 text-white transition-all duration-300 hover:scale-105"
                  >
                    {currentSlideIndex === totalSlides - 1 ? 'Finish Lesson' : 'Continue'}
                    <ChevronRight className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              )}
            </div>

            {/* Visual/Code Side */}
            {currentSlide?.codeSnippet && (
              <div className="flex-1 flex flex-col min-h-[450px] w-full">
                <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 flex-1 flex flex-col shadow-2xl shadow-blue-900/5 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
                  
                  {/* Tabs */}
                  <div className="h-14 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200 flex items-center px-6 justify-between relative z-10">
                    <div className="flex gap-6 h-full">
                      <button 
                        onClick={() => setViewMode('code')}
                        className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 h-full border-b-2 transition-all relative ${
                          viewMode === 'code' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        Code
                        {viewMode === 'code' && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                      </button>
                      <button 
                        onClick={() => setViewMode('preview')}
                        className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 h-full border-b-2 transition-all relative ${
                          viewMode === 'preview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        Preview
                        {viewMode === 'preview' && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative overflow-hidden bg-[#1e1e1e]">
                    {viewMode === 'code' ? (
                      <div className="h-full flex flex-col">
                        {/* Editor Header */}
                        <div className="h-10 bg-[#252526] border-b border-white/5 px-4 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            <span className="ml-3 text-[10px] text-slate-500 font-mono uppercase tracking-widest">styles.css</span>
                          </div>
                          <div className="text-[10px] text-slate-600 font-mono">UTF-8</div>
                        </div>

                        <div className="flex-1 overflow-auto custom-scrollbar">
                          <SyntaxHighlighter 
                            language="css" 
                            style={vscDarkPlus}
                            customStyle={{
                              margin: 0,
                              padding: '32px',
                              background: 'transparent',
                              fontSize: '14px',
                              lineHeight: '1.6',
                              fontFamily: 'var(--font-mono)',
                              overflowX: 'auto'
                            }}
                          >
                            {currentSlide.codeSnippet || ""}
                          </SyntaxHighlighter>
                          
                          {currentSlide.htmlSnippet && (
                            <div className="mt-0 border-t border-white/5 bg-black/20">
                              <div className="bg-[#252526] px-8 py-2 border-b border-white/5 flex items-center justify-between">
                                <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">index.html</span>
                                <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                              </div>
                              <SyntaxHighlighter 
                                language="html" 
                                style={vscDarkPlus}
                                customStyle={{
                                  margin: 0,
                                  padding: '32px',
                                  background: 'transparent',
                                  fontSize: '14px',
                                  lineHeight: '1.6',
                                  fontFamily: 'var(--font-mono)',
                                  overflowX: 'auto'
                                }}
                              >
                                {currentSlide.htmlSnippet}
                              </SyntaxHighlighter>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full p-8 bg-slate-50/50 flex flex-col items-center">
                         <div className={`h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col transition-all duration-500 ease-in-out ${
                           previewDevice === 'mobile' ? 'w-[375px]' : 'w-full'
                         }`}>
                            <div className="h-12 bg-slate-100/80 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                  <div className="h-2 w-24 bg-slate-200 rounded-full" />
                                </div>
                                <div className="flex bg-slate-200/50 p-1 rounded-lg gap-1">
                                  <button 
                                    onClick={() => setPreviewDevice('mobile')}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                                      previewDevice === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                  >
                                    Mobile
                                  </button>
                                  <button 
                                    onClick={() => setPreviewDevice('desktop')}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                                      previewDevice === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                  >
                                    Desktop
                                  </button>
                                </div>
                            </div>
                            <iframe
                              title="Preview"
                              srcDoc={`
                                <html>
                                  <head>
                                    ${moduleId === 'm2' ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
                                    ${moduleId === 'm3' ? '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">' : ''}
                                    <style>
                                      body { 
                                        margin: 0; 
                                        padding: 40px; 
                                        font-family: system-ui, -apple-system, sans-serif; 
                                        display: flex; 
                                        flex-direction: column;
                                        justify-content: center; 
                                        align-items: center; 
                                        gap: 20px;
                                        min-height: 100vh;
                                        background: #ffffff;
                                        color: #1e293b;
                                        text-align: center;
                                      }
                                      ${currentSlide.codeSnippet || ''}
                                    </style>
                                  </head>
                                  <body>
                                    ${currentSlide.htmlSnippet || '<div style="color: #94a3b8; font-size: 0.875rem;">Rendering preview...</div>'}
                                  </body>
                                </html>
                              `}
                              className="w-full h-full border-0"
                            />
                         </div>
                      </div>
                    )}
                  </div>

                  {/* Action Footer */}
                  <div className="p-6 bg-slate-50 border-t border-slate-200">
                    <Button 
                      onClick={handleNextAction} 
                      className="w-full rounded-2xl h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold gap-3 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {viewMode === 'code' ? 'View Live Preview' : 'Mark as Completed'}
                      {viewMode === 'code' ? <PlayCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Footer */}
      <footer className="h-20 border-t border-slate-200 px-8 flex items-center justify-between bg-white/95 backdrop-blur-sm relative z-20">
        <Button 
          variant="ghost" 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className="rounded-full px-8 h-12 font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 transition-all"
        >
          <ChevronLeft className="mr-2 w-5 h-5" />
          Previous
        </Button>

        <div className="hidden sm:flex gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          {lesson.slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlideIndex ? 'w-10 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <Button 
          onClick={handleNextAction}
          className="rounded-full px-8 h-12 font-bold bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all hover:px-10 group"
        >
          {currentSlideIndex === totalSlides - 1 ? 'Finish Lesson' : 'Next Step'}
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </footer>
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
                  <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Lesson Navigation</h2>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{lesson.title}</h3>
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
                  {lesson.slides.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentSlideIndex(i); setIsMenuOpen(false); }}
                      className={`flex items-start gap-5 p-6 rounded-3xl transition-all text-left group ${
                        i === currentSlideIndex 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        i === currentSlideIndex ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className={`font-bold mb-1 transition-colors ${
                          i === currentSlideIndex ? 'text-blue-900' : 'text-slate-900'
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

                <div className="mt-12 pt-12 border-t border-slate-100">
                  <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Other Lessons in this Module</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {module.lessons.map((otherLesson) => (
                      <button
                        key={otherLesson.id}
                        onClick={() => { router.push(`/course/${moduleId}/${otherLesson.id}`); setIsMenuOpen(false); }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          otherLesson.id === lessonId 
                            ? 'bg-blue-600 border-blue-600 text-white pointer-events-none' 
                            : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 text-slate-600'
                        }`}
                      >
                        <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-50">Lesson</p>
                        <h4 className="font-bold text-sm line-clamp-1">{otherLesson.title}</h4>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-slate-100 bg-slate-50/50 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  CSS Mastery · Slide {currentSlideIndex + 1} of {totalSlides}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
