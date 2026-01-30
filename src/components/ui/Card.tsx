"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  hover?: boolean;
  glow?: "primary" | "secondary" | "accent" | "none";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glow = "none", ...props }, ref) => {
    const glowStyles = {
      primary: "hover:border-primary/30 hover:shadow-glow-gold",
      secondary: "hover:border-secondary/30 hover:shadow-glow-green",
      accent: "hover:border-accent/30 hover:shadow-glow-blue",
      none: "",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative bg-gradient-to-br from-surface to-surface-light rounded-2xl border border-surface-light/50 overflow-hidden shadow-card",
          hover && "transition-all duration-300 hover:shadow-card-hover",
          glowStyles[glow],
          className
        )}
        {...props}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
