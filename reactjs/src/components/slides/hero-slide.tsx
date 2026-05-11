import { Badge } from '@/components/ui/badge'
import { Award, Layers, Users } from 'lucide-react'
import { ReactLogo } from '@/components/react-logo'
import { DetailCard } from '@/components/detail-card'

export function HeroSlide() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-16 px-6 z-10">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 border-green-500/30 bg-green-500/10 text-green-400 gap-2 hover:bg-green-500/20 transition-colors">
          <Award size={14} />
          100% Free & Open Source
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight sm:leading-[1.1]">
          <span className="text-[#61dafb]">React</span>JS Professional Course
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-normal mb-2 px-4 sm:px-0">
          Build production-grade UIs with modern React
        </p>
        
        <p className="font-mono text-sm text-white/50">
          Version: 2026 | React 19–ready
        </p>
      </div>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex justify-center lg:justify-end">
          <ReactLogo />
        </div>

        <div className="flex flex-col gap-6 max-w-lg mx-auto lg:mx-0">
          <DetailCard 
            icon={Layers} 
            label="Course Content" 
            value="5 Comprehensive Modules" 
          />
          <DetailCard 
            icon={Users} 
            label="Target Audience" 
            value="Beginner to Advanced" 
          />
          <DetailCard 
            icon={Award} 
            label="Certification" 
            value="Free Professional Certificate" 
          />
        </div>
      </div>
    </div>
  )
}
