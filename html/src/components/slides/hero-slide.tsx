import { Badge } from '@/components/ui/badge'
import { Award, Layout, Smartphone, Search } from 'lucide-react'
import { HtmlLogo } from '@/components/html-logo'
import { DetailCard } from '@/components/detail-card'

export function HeroSlide() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-16 px-6 z-10">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 border-orange-200 bg-orange-50 text-orange-600 gap-2 hover:bg-orange-100 transition-colors shadow-sm">
          <Award size={14} />
          Master the Building Blocks of the Web
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-tight sm:leading-[1.1]">
          Modern <span className="text-orange-500">HTML5</span> Mastery
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-medium mb-3 px-4 sm:px-0">
          From semantic structure to advanced accessibility and SEO
        </p>
        
        <p className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-widest">
          Version: 2026 | Web Standards Ready
        </p>
      </div>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex justify-center lg:justify-end">
          <HtmlLogo className="w-64 h-64 text-orange-500 drop-shadow-[0_10px_30px_rgba(234,88,12,0.1)]" />
        </div>

        <div className="flex flex-col gap-6 max-w-lg mx-auto lg:mx-0">
          <DetailCard 
            icon={Layout} 
            label="Semantic Structure" 
            value="Clean & Meaningful Code" 
          />
          <DetailCard 
            icon={Smartphone} 
            label="Responsive Ready" 
            value="Mobile-First Foundations" 
          />
          <DetailCard 
            icon={Search} 
            label="SEO & Accessibility" 
            value="Search Engine Optimization" 
          />
        </div>
      </div>
    </div>
  )
}
