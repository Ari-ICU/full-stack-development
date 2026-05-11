"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
      secondary: "bg-secondary text-white hover:opacity-90 shadow-lg shadow-secondary/20",
      outline: "border border-border bg-transparent hover:bg-white/5",
      ghost: "bg-transparent hover:bg-white/5",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg font-semibold",
      icon: "w-10 h-10 p-0",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-200 flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
