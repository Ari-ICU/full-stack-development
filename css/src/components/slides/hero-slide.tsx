import { motion } from "framer-motion";
import { Award, Palette, Smartphone, Zap } from "lucide-react";
import { CssLogo } from "@/components/css-logo";
import { DetailCard } from "@/components/detail-card";

export function HeroSlide() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <header className="w-full text-center relative mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Professional CSS Certification 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1] md:leading-[0.9] text-slate-900">
            Master the Art of <br className="hidden md:block" />
            <span className="text-gradient">Modern CSS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            Go from absolute beginner to CSS expert. Build stunning, responsive, 
            and performant user interfaces with the latest web standards.
          </p>

          <div className="flex items-center justify-center gap-4 text-slate-400 font-mono text-xs md:text-sm mb-10">
            <span>Flexbox</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Grid</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Animations</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Tailwind</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Container Queries</span>
          </div>
        </motion.div>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
            <CssLogo className="relative w-48 h-48 md:w-64 md:h-64 text-blue-600 drop-shadow-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-4 max-w-lg mx-auto lg:mx-0">
          <DetailCard 
            icon={Palette} 
            label="Visual Design" 
            value="Colors, Shadows & Depth" 
          />
          <DetailCard 
            icon={Smartphone} 
            label="Responsive First" 
            value="Fluid Layouts for All Screens" 
          />
          <DetailCard 
            icon={Zap} 
            label="High Performance" 
            value="Hardware Accelerated UI" 
          />
        </div>
      </div>
    </div>
  );
}
