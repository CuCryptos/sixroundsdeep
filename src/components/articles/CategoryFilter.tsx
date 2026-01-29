"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCategoryChange(null)}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
          activeCategory === null
            ? "bg-primary text-background"
            : "bg-surface text-muted hover:text-foreground"
        )}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-primary text-background"
              : "bg-surface text-muted hover:text-foreground"
          )}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
