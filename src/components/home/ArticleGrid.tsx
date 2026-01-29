"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { getFeaturedArticles } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ArticleGrid() {
  const articles = getFeaturedArticles();

  const getCategoryVariant = (category: string) => {
    switch (category) {
      case "Fantasy":
        return "primary";
      case "Hot Takes":
      case "Conspiracy":
        return "secondary";
      case "Lifestyle":
        return "accent";
      default:
        return "muted";
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-muted">
              Hot takes, deep analysis, and everything in between.
            </p>
          </div>
          <Link href="/articles">
            <Button variant="ghost">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/articles/${article.slug}`}>
                <Card glow="primary" className="h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)]" />
                    <div className="absolute top-4 left-4">
                      <Badge variant={getCategoryVariant(article.category) as "primary" | "secondary" | "accent" | "muted"}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted mb-4 line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min read
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-surface">
                      <span className="text-xs text-muted">
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
