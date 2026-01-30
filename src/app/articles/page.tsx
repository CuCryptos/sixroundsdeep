"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { articles } from "@/lib/data";
import ArticleCard from "@/components/articles/ArticleCard";
import CategoryFilter from "@/components/articles/CategoryFilter";

const categories = ["Fantasy", "Lifestyle", "Hot Takes", "Analysis", "News", "Conspiracy"];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles;

  const featuredArticle = filteredArticles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter(
    (a) => !a.featured || a.id !== featuredArticle?.id
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Articles</span> & Insights
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Deep dives, hot takes, and everything in between. Expert analysis from
            the Unfiltered Fantasy crew.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && !activeCategory && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Featured
            </h2>
            <ArticleCard article={featuredArticle} featured />
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            {activeCategory ? `${activeCategory} Articles` : "Latest Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">
                No articles found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
