import { Clock, Video, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterSectionProps {
  onAction?: () => void
}

export function FooterSection({ onAction }: FooterSectionProps) {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-14 py-8 md:py-10 mt-auto border-t border-white/5 bg-black/20">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-[#282c34] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          TR
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white">Instructor</span>
          <span className="text-sm text-white/60">Thoeurn Ratha</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/80">
        <div className="flex items-center gap-2.5">
          <Clock className="text-cyan-400" size={18} />
          <span className="text-sm font-medium">11:00 AM - 12:30 PM</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Video className="text-cyan-400" size={18} />
          <span className="text-sm font-medium">10 Modules</span>
        </div>
      </div>

      <Button 
        onClick={onAction}
        className="bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-cyan-500/20 group"
      >
        Start Learning
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
      </Button>
    </footer>
  )
}
