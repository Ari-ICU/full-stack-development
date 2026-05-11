import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface DetailCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function DetailCard({ icon: Icon, label, value }: DetailCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-default">
      <CardContent className="p-6 flex items-center gap-5">
        <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">
          <Icon size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-white/60 mb-1">{label}</span>
          <span className="text-lg font-bold text-white">{value}</span>
        </div>
      </CardContent>
    </Card>
  )
}
