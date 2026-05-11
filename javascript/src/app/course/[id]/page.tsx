"use client";

import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { javascriptCurriculum } from "@/data/curriculum";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  BookOpen,
  Home,
  Menu
} from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language = "javascript" }: { code: string, language?: string }) => {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={atomDark}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        fontSize: '14px',
        lineHeight: '1.6'
      }}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

// ─── 3-Tab Slide Editor (HTML · JS · Output) ────────────────────────────────
function SlideEditor({ htmlCode, jsCode, language = "javascript" }: {
  htmlCode?: string;
  jsCode?: string;
  language?: string;
}) {
  const [activeTab, setActiveTab] = useState<"html" | "js" | "output">(
    htmlCode ? "html" : jsCode ? "js" : "output"
  );

  // Auto-switch to HTML tab (first) whenever slide changes
  useEffect(() => {
    setActiveTab(htmlCode ? "html" : jsCode ? "js" : "output");
  }, [htmlCode, jsCode]);

  const hasHtml = Boolean(htmlCode);
  const hasJs   = Boolean(jsCode);

  // Build the srcdoc for the iframe
  const iframeSrc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      font-size: 14px;
      padding: 20px;
      background: #f8fafc;
      color: #1e293b;
    }
    button {
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #f1f5f9;
      font-size: 13px;
      margin: 4px;
    }
    button:hover { background: #e2e8f0; }
    input, select, textarea {
      padding: 6px 10px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 13px;
      margin: 4px;
    }
    li { margin: 4px 0; padding-left: 4px; }
    pre { background:#1e293b; color:#94a3b8; padding:12px; border-radius:8px; font-size:12px; white-space:pre-wrap; }
    #__console__ { font-family:'Fira Mono',monospace; font-size:12.5px; line-height:1.75; background:#0f172a; color:#94a3b8; padding:16px 20px; border-radius:10px; min-height:40px; }
    #__console__ .ln { padding:1px 0; border-bottom:1px solid rgba(255,255,255,0.04); display:flex; gap:8px; align-items:baseline; }
    #__console__ .pfx { opacity:0.4; user-select:none; min-width:14px; }
    #__console__ .s  { color:#86efac; }
    #__console__ .n  { color:#93c5fd; }
    #__console__ .b  { color:#f9a8d4; }
    #__console__ .nil{ color:#64748b; }
    #__console__ .obj{ color:#e2e8f0; white-space:pre-wrap; word-break:break-all; }
    #__console__ .warn-ln { border-left:3px solid #fde68a; padding-left:8px; color:#fde68a; }
    #__console__ .err-ln  { border-left:3px solid #fca5a5; padding-left:8px; color:#fca5a5; }
  </style>
</head>
<body>
${htmlCode ?? ""}
<script>
(function(){
  var _log=console.log.bind(console);
  var _warn=console.warn.bind(console);
  var _error=console.error.bind(console);
  var _clear=console.clear.bind(console);
  var panel=null;

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function fmt(a){
    if(a===null)      return '<span class="nil">null</span>';
    if(a===undefined) return '<span class="nil">undefined</span>';
    if(typeof a==='string')  return '<span class="s">"'+esc(a)+'"</span>';
    if(typeof a==='number')  return '<span class="n">'+a+'</span>';
    if(typeof a==='boolean') return '<span class="b">'+a+'</span>';
    if(typeof a==='bigint')  return '<span class="n">'+a+'n</span>';
    if(typeof a==='symbol')  return '<span class="s">'+esc(a.toString())+'</span>';
    if(Array.isArray(a)) return '['+a.map(fmt).join(', ')+']';
    if(typeof a==='object'){
      try{ return '<span class="obj">'+esc(JSON.stringify(a,null,2))+'</span>'; }catch(e){ return esc(String(a)); }
    }
    return esc(String(a));
  }

  function getPanel(){
    if(panel) return panel;
    // Only count non-script elements — scripts don't count as "HTML content"
    var nonScriptEls=Array.from(document.body.children).filter(function(el){ return el.tagName!=='SCRIPT'; });
    if(nonScriptEls.length===0){
      panel=document.createElement('div');
      panel.id='__console__';
      document.body.appendChild(panel);
    }
    return panel;
  }

  function write(args,cls,pfx){
    var p=getPanel();
    if(!p) return;
    var ln=document.createElement('div');
    ln.className='ln'+(cls?' '+cls:'');
    ln.innerHTML='<span class="pfx">'+pfx+'</span><span>'+args.map(fmt).join(' ')+'</span>';
    p.appendChild(ln);
  }

  console.log   = function(){ _log.apply(console,arguments);   write(Array.from(arguments),'','›'); };
  console.warn  = function(){ _warn.apply(console,arguments);  write(Array.from(arguments),'warn-ln','⚠'); };
  console.error = function(){ _error.apply(console,arguments); write(Array.from(arguments),'err-ln','✖'); };
  console.clear = function(){ _clear.apply(console); if(panel) panel.innerHTML=''; };
})();
</script>
<script>
try {
${jsCode ?? ""}
} catch(e) {
  document.body.innerHTML += '<div style="color:#ef4444;margin-top:12px;padding:10px 14px;background:#fef2f2;border-left:3px solid #ef4444;border-radius:6px;font-family:monospace;font-size:12px">⚠ Uncaught: ' + e.message + '</div>';
}
</script>
</body></html>`;

  const displayCode = activeTab === "html" ? htmlCode : jsCode;
  const displayLang = activeTab === "html" ? "html" : language;
  const fileName    = activeTab === "html" ? "index.html" : "main.js";

  const tabs = [
    hasHtml && { id: "html" as const, label: "index.html", badge: "HTML", color: "orange" },
    hasJs   && { id: "js"   as const, label: "main.js",    badge: "JS",   color: "yellow" },
    { id: "output" as const, label: "Output", badge: "▶", color: "green" },
  ].filter(Boolean) as { id: "html"|"js"|"output"; label: string; badge: string; color: string }[];

  const badgeColors: Record<string, string> = {
    orange: "text-orange-300",
    yellow: "text-yellow-300",
    green:  "text-green-300",
  };
  const activeColors: Record<string, string> = {
    orange: "border-orange-400 text-orange-200 bg-white/5",
    yellow: "border-yellow-400 text-yellow-200 bg-white/5",
    green:  "border-green-400  text-green-200  bg-white/5",
  };

  return (
    <div className="relative bg-white rounded-[32px] border border-slate-200 p-2 shadow-2xl shadow-slate-200/50">
      <div className="bg-slate-950 rounded-[28px] overflow-hidden">

        {/* IDE Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">
            {activeTab === "output" ? "browser output" : fileName}
          </span>
          <div className="w-16" />
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-white/5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold font-mono transition-all border-b-2 ${
                activeTab === tab.id
                  ? activeColors[tab.color]
                  : "border-transparent text-white/30 hover:text-white/50"
              }`}
            >
              <span className={`text-[10px] ${activeTab === tab.id ? badgeColors[tab.color] : "text-white/20"}`}>
                {tab.badge}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Body */}
        {activeTab !== "output" && (
          <div className="p-6 md:p-8 min-h-[300px] max-h-[420px] overflow-y-auto custom-scrollbar">
            {displayCode ? (
              <div className="font-mono">
                <CodeBlock code={displayCode} language={displayLang} />
              </div>
            ) : (
              <div className="h-full min-h-[280px] flex items-center justify-center text-white/10 font-mono text-sm italic">
                // empty
              </div>
            )}
          </div>
        )}

        {/* Live Output iframe */}
        {activeTab === "output" && (
          <div className="bg-white rounded-b-[26px] overflow-hidden">
            <iframe
              key={`${htmlCode}-${jsCode}`}
              srcDoc={iframeSrc}
              sandbox="allow-scripts"
              className="w-full min-h-[300px] h-[340px] border-0"
              title="Live Output"
            />
          </div>
        )}

        {/* Hint bar */}
        {activeTab !== "output" && hasHtml && hasJs && (
          <div className="px-6 py-2.5 border-t border-white/5">
            <p className="text-[10px] font-mono text-white/20">
              💡 Click <span className="text-green-400/50 font-bold">▶ Output</span> tab to see the live result in the browser
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const moduleId = resolvedParams.id;
  const module = javascriptCurriculum.find(m => String(m.id) === moduleId);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const savedSlide = parseInt(localStorage.getItem(`js_slide_${moduleId}`) ?? '0', 10);
      setCurrentSlide(savedSlide);
      setHydrated(true);
    } catch {
      setHydrated(true);
    }
  }, [moduleId]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(`js_slide_${moduleId}`, String(currentSlide));
  }, [currentSlide, moduleId, hydrated]);

  if (!module) {
    return (
      <div className="h-screen w-full bg-background flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold text-foreground/40">Module Not Found</h1>
        <Link href="/">
          <Button variant="outline" className="rounded-full gap-2">
            <Home size={18} /> Back to Roadmap
          </Button>
        </Link>
      </div>
    );
  }

  const nextSlide = () => {
    if (currentSlide < module.slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const progress = ((currentSlide + 1) / module.slides.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-400/20 overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(234,179,8,0.05)_0%,transparent_100%)]" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-30 h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 text-slate-500">
              <ArrowLeft size={18} />
            </Button>
          </Link>
          <div className="h-6 w-[1px] bg-slate-200 mx-2 hidden sm:block" />
          <div className="hidden sm:block">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">
              {module.title}
            </h2>
            <p className="text-xs font-bold text-slate-600">
              Slide {currentSlide + 1} of {module.slides.length}
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsMenuOpen(false); }}
              className={`hidden sm:flex rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all ${
                isResourcesOpen ? 'bg-yellow-100 text-yellow-700' : 'text-slate-500 hover:bg-slate-100'
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
                      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                      { name: "JavaScript.info", url: "https://javascript.info" },
                      { name: "W3Schools JS", url: "https://www.w3schools.com/js/" },
                      { name: "Node.js Docs", url: "https://nodejs.org/docs" }
                    ].map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm font-bold text-slate-600 group-hover:text-yellow-600">{link.name}</span>
                        <ArrowLeft size={14} className="rotate-180 text-slate-300 group-hover:text-yellow-500" />
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
            className={`rounded-xl transition-all ${
              isMenuOpen ? 'bg-slate-900 text-white rotate-90' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Menu size={18} />
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative flex-1 flex flex-col items-center py-12 md:py-20 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            {/* Left Side: Content */}
            <div className="lg:col-span-5 flex flex-col pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-[10px] font-black tracking-widest uppercase mb-8 self-start shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                Lesson {currentSlide + 1}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                {module.slides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                {module.slides[currentSlide].content}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Button 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline" 
                  className="h-14 w-14 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-30 shadow-sm"
                >
                  <ChevronLeft size={24} />
                </Button>

                {currentSlide < module.slides.length - 1 ? (
                  <Button 
                    onClick={nextSlide}
                    className="h-14 flex-1 md:flex-none md:px-10 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg shadow-lg shadow-slate-200 gap-2 transition-all active:scale-95"
                  >
                    Next Step <ChevronRight size={24} />
                  </Button>
                ) : (
                  <Link href="/" className="flex-1 md:flex-none">
                    <Button className="h-14 w-full px-10 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-950 font-bold text-lg shadow-lg shadow-yellow-200 gap-2 transition-all active:scale-95">
                      Finish Module <CheckCircle2 size={24} />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Side: Editor + Output */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* 3-Tab Editor: HTML · JS · Output */}
              <SlideEditor
                htmlCode={module.slides[currentSlide].htmlCode}
                jsCode={module.slides[currentSlide].code}
                language={module.slides[currentSlide].language}
              />

              {/* React Interactive Demo Panel (lab slides only) */}
              {module.slides[currentSlide].demo && (
                <div className="bg-white rounded-[28px] border border-slate-200 shadow-lg shadow-slate-100/80 overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">🧪 Interactive Lab</span>
                    <span className="ml-auto text-[10px] text-slate-300 font-mono italic">React-powered</span>
                  </div>
                  <div className="p-6">
                    {module.slides[currentSlide].demo}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

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
                  <h2 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.2em] mb-2">Chapter Navigation</h2>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{module.title}</h3>
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
                  {module.slides.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentSlide(i); setIsMenuOpen(false); }}
                      className={`flex items-start gap-5 p-6 rounded-3xl transition-all text-left group ${
                        i === currentSlide 
                          ? 'bg-yellow-50 border border-yellow-200' 
                          : 'bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        i === currentSlide ? 'bg-yellow-500 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className={`font-bold mb-1 transition-colors ${
                          i === currentSlide ? 'text-yellow-900' : 'text-slate-900'
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
                  Mastering JavaScript · Slide {currentSlide + 1} of {module.slides.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
