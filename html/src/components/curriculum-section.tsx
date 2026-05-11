import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { modules, Module } from '@/data/modules'
import { ArrowRight, BookOpen } from 'lucide-react'

interface CurriculumSectionProps {
  onModuleClick: (module: Module) => void
}

export function CurriculumSection({ onModuleClick }: CurriculumSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Course Curriculum</h2>
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          A step-by-step roadmap to mastering HTML5 from absolute scratch to advanced patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onModuleClick(module)}
            className="group cursor-pointer"
          >
            <Card className="h-full bg-white border-slate-200 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 overflow-hidden relative shadow-sm">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-orange-50 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500`} />
              
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-md shadow-orange-200/50`}>
                    <module.icon size={28} />
                  </div>
                  <Badge variant="outline" className="border-slate-200 text-slate-500 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors bg-slate-50/50 font-bold text-[10px] uppercase tracking-wider px-3">
                    {module.level}
                  </Badge>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors tracking-tight">
                  {module.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {module.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] font-bold text-orange-600 uppercase tracking-widest pt-5 border-t border-slate-100 group-hover:border-orange-100 transition-colors">
                  <BookOpen size={14} />
                  <span>Start Module</span>
                  <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
