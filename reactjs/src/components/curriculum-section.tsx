import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { modules, Module } from '@/data/modules'

interface CurriculumSectionProps {
  onModuleClick?: (module: Module) => void
}

export function CurriculumSection({ onModuleClick }: CurriculumSectionProps) {
  return (
    <section className="w-full max-h-[80vh] overflow-y-auto px-4 custom-scrollbar">
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-col items-center text-center mb-12 px-6">
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400 bg-green-500/10 backdrop-blur-sm px-4 py-1">
            Open & Free Curriculum
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Explore React from <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Zero to Hero</span>
          </h2>
          <p className="text-white/80 max-w-2xl text-lg">
            A meticulously designed learning path from basic syntax to enterprise architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onModuleClick?.(module)}
              className="cursor-pointer"
            >
              <Card className="h-full bg-white/[0.03] border-white/10 backdrop-blur-md hover:bg-white/[0.07] hover:border-cyan-500/40 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center flex">
                  <div className={`w-1/2 h-full bg-gradient-to-r ${module.color}`} />
                </div>
                
                <CardContent className="p-6 flex flex-col h-full z-10">
                  <div className={`mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg ${module.shadow} group-hover:scale-110 transition-transform duration-500`}>
                    <module.icon size={28} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-white/80 tracking-widest uppercase">Module 0{module.id}</span>
                    <Badge variant="secondary" className="text-[9px] font-bold py-0.5 px-2 bg-white/5 text-white/60 border border-white/5">
                      {module.level}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {module.title}
                  </h3>
                  
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {module.description}
                  </p>
                </CardContent>
                
                {/* Background decorative element */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
