"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import { Article } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface ArticleCardProps {
  article: Article;
  index?: number;
  featured?: boolean;
}

export default function ArticleCard({
  article,
  index = 0,
  featured = false,
}: ArticleCardProps) {
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

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Link href={`/articles/${article.slug}`}>
          <Card glow="primary" className="group overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)]" />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      getCategoryVariant(article.category) as
                        | "primary"
                        | "secondary"
                        | "accent"
                        | "muted"
                    }
                  >
                    {article.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {article.readingTime} min read
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-surface">
                  <span className="text-sm text-muted">
                    {formatDate(article.date)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/articles/${article.slug}`}>
        <Card glow="primary" className="group h-full flex flex-col">
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)]" />
            <div className="absolute top-4 left-4">
              <Badge
                variant={
                  getCategoryVariant(article.category) as
                    | "primary"
                    | "secondary"
                    | "accent"
                    | "muted"
                }
              >
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
              <span className="text-xs text-muted">{formatDate(article.date)}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
