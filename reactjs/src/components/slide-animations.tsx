'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function StateAnimation() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev + 1) % 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 aspect-video">
      <motion.div 
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-6xl font-bold text-cyan-400 mb-4"
      >
        {count}
      </motion.div>
      <div className="flex gap-2">
        <div className="h-2 w-12 bg-cyan-500/20 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: `${count}%` }}
            className="h-full bg-cyan-400"
          />
        </div>
      </div>
      <p className="mt-4 text-xs text-white/40 font-mono">Component Re-rendering...</p>
    </div>
  )
}

export function HooksAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 aspect-video relative overflow-hidden">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 border-4 border-dashed border-indigo-500/30 rounded-full flex items-center justify-center"
      >
        <div className="w-16 h-16 bg-indigo-500 rounded-lg shadow-xl shadow-indigo-500/20" />
      </motion.div>
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-white/30 uppercase tracking-widest">Effect Active</span>
      </div>
    </div>
  )
}

export function ServerAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 aspect-video relative">
      <div className="flex gap-12 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-16 bg-white/10 rounded-md border border-white/20" />
          <span className="text-[10px] text-white/40">Client</span>
        </div>
        
        <motion.div 
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 bg-purple-500 rounded-full blur-sm"
        />

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-20 bg-purple-500/20 rounded-md border border-purple-500/40 flex items-center justify-center">
             <div className="w-8 h-8 bg-purple-500 rounded-sm opacity-50" />
          </div>
          <span className="text-[10px] text-purple-400">Server</span>
        </div>
      </div>
      <p className="mt-6 text-[10px] text-white/30 text-center px-8">Zero bundle size sent to client for logic executed on server.</p>
    </div>
  )
}
export function PerformanceAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 aspect-video relative overflow-hidden">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.95, 1, 0.95]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.4 
            }}
            className="w-16 h-16 bg-yellow-500/20 rounded-xl border border-yellow-500/30 flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-lg opacity-40" />
          </motion.div>
        ))}
      </div>
      <motion.div 
        animate={{ width: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 h-1 bg-yellow-500/50" 
      />
      <p className="mt-6 text-[10px] text-white/30 text-center uppercase tracking-widest">Memoization Active</p>
    </div>
  )
}
