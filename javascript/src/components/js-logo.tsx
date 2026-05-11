"use client";

import { motion } from "framer-motion";

export function JsLogo({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ rotate: -10, scale: 0.9 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="24" height="24" rx="4" fill="currentColor" />
        <path
          d="M11.64 18.219c0 1.097-.584 1.76-1.554 1.76-.713 0-1.288-.41-1.465-1.123l.876-.514c.103.424.322.685.623.685.342 0 .548-.24.548-.822V13h.972v5.219zm4.274 0c0 .945-.63 1.76-1.63 1.76-.958 0-1.574-.685-1.63-1.561l.945-.527c.068.514.28.98.712.98.404 0 .63-.267.63-.733 0-.465-.246-.685-.76-.904l-.384-.164c-.815-.342-1.246-.801-1.246-1.61 0-.89.65-1.616 1.547-1.616.795 0 1.342.418 1.486 1.157l-.89.52c-.068-.39-.247-.698-.61-.698-.328 0-.547.219-.547.589 0 .37.199.534.63.719l.384.158c.849.349 1.335.801 1.335 1.623z"
          fill="black"
        />
      </svg>
    </motion.div>
  );
}
