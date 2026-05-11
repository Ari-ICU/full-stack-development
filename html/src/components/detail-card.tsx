import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface DetailCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function DetailCard({ icon: Icon, label, value }: DetailCardProps) {
  return (
    <Card className="bg-white border-slate-200 overflow-hidden hover:bg-slate-50 hover:border-orange-500/30 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md">
      <CardContent className="p-6 flex items-center gap-5">
        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform duration-300 shadow-sm shadow-orange-100">
          <Icon size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</span>
          <span className="text-lg font-black text-slate-900 tracking-tight">{value}</span>
        </div>
      </CardContent>
    </Card>
  )
}
