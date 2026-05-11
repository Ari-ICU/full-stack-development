"use client";

import { motion } from "framer-motion";

export function CssLogo({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ 
        rotateY: [0, 10, -10, 0],
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M4 3l1.8 17L12 22l6.2-2L20 3H4z" />
        <path d="M12 7h-3.5l.5 3h3l-.5 5L12 16l3.5-1 .5-4.5" />
      </svg>
    </motion.div>
  );
}
