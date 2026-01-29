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
      primary: "hover:shadow-primary/20",
      secondary: "hover:shadow-secondary/20",
      accent: "hover:shadow-accent/20",
      none: "",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-surface rounded-xl border border-surface/50 overflow-hidden",
          hover && "transition-shadow duration-300 hover:shadow-xl",
          glowStyles[glow],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
