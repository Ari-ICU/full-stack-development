import { Button } from '@/components/ui/button'
import { ChevronRight} from 'lucide-react'

interface FooterSectionProps {
  onAction: () => void
}

export function FooterSection({ onAction }: FooterSectionProps) {
  return (
    <footer className="w-full py-8 px-6 border-t border-slate-200 bg-white/80 backdrop-blur-md z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 justify-center md:justify-start tracking-tight">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            HTML Masterclass
          </h3>
          <p className="text-sm text-slate-400 font-medium">Build the foundation of the web with modern standards.</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="h-8 w-px bg-slate-200" />
          <Button 
            onClick={onAction}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-10 py-6 text-base font-bold group shadow-md shadow-orange-100"
          >
            Start Learning Now
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
