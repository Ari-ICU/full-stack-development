import { motion } from "framer-motion";
import { Award, Code2, Globe, Zap } from "lucide-react";
import { JsLogo } from "@/components/js-logo";
import { DetailCard } from "@/components/detail-card";

export function HeroSlide() {
  return (
    <div className="flex flex-col items-center w-full">
      <header className="w-full text-center relative mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 mb-8 shadow-sm">
            <Award className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-bold text-yellow-700 uppercase tracking-wider">Master JavaScript ES2026+</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1] md:leading-[0.9] text-slate-900">
            Engine of the <br className="hidden md:block" />
            <span className="text-gradient">Modern Web</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            Master the world's most popular programming language. From basic syntax 
            to advanced asynchronous patterns and modern frameworks.
          </p>

          <p className="font-mono text-xs md:text-sm text-slate-300 font-bold tracking-widest uppercase mb-10">
            ES6+ • Async/Await • Prototypes • Closures • Modules
          </p>
        </motion.div>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-end">
          <JsLogo className="w-48 h-48 md:w-64 md:h-64 text-yellow-400 drop-shadow-[0_20px_50px_rgba(250,204,21,0.2)]" />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 max-w-lg mx-auto lg:mx-0">
          <DetailCard 
            icon={Code2} 
            label="Logical Thinking" 
            value="Algorithms & Data Structures" 
          />
          <DetailCard 
            icon={Globe} 
            label="Full Stack Ready" 
            value="Frontend, Backend & Mobile" 
          />
          <DetailCard 
            icon={Zap} 
            label="Interactive UI" 
            value="Dynamic Web Experiences" 
          />
        </div>
      </div>
    </div>
  );
}
