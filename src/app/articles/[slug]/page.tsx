import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articles, getArticleBySlug, hosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import ArticleCard from "@/components/articles/ArticleCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | Six Rounds Deep",
    };
  }

  return {
    title: `${article.title} | Six Rounds Deep`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

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

  const author = hosts.find((h) => h.name === article.author);
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to articles
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant={
                getCategoryVariant(article.category) as
                  | "primary"
                  | "secondary"
                  | "accent"
                  | "muted"
              }
              size="md"
            >
              {article.category}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readingTime} min read
            </span>
          </div>
        </header>

        {/* Author Box */}
        {author && (
          <Link
            href={`/hosts/${author.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center gap-4 p-4 bg-surface rounded-xl mb-8 hover:bg-primary/5 transition-colors"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-foreground">{author.name}</div>
              <div className="text-sm text-primary">&quot;{author.nickname}&quot;</div>
            </div>
          </Link>
        )}

        {/* Featured Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.4)_100%)]" />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-xl text-muted leading-relaxed mb-6">
            {article.excerpt}
          </p>
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold text-foreground mt-6 mb-3">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            return (
              <p key={index} className="text-muted leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Share */}
        <div className="border-t border-surface pt-8 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Share This Article
          </h3>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
              Twitter
            </button>
            <button className="px-4 py-2 bg-surface rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
              Facebook
            </button>
            <button className="px-4 py-2 bg-surface rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              More in {article.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
