import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Twitter, Instagram, Trophy, Target, Clock, Zap } from "lucide-react";
import { hosts, getHostBySlug, articles } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import ArticleCard from "@/components/articles/ArticleCard";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return hosts.map((host) => ({
    name: host.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const host = getHostBySlug(resolvedParams.name);

  if (!host) {
    return {
      title: "Host Not Found | Six Rounds Deep",
    };
  }

  return {
    title: `${host.name} "${host.nickname}" | Six Rounds Deep`,
    description: host.bio,
  };
}

function getLocationDisplay(location: { city: string; state?: string; country?: string }) {
  if (location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.city;
}

export default async function HostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const host = getHostBySlug(resolvedParams.name);

  if (!host) {
    notFound();
  }

  const hostArticles = articles.filter((a) => a.author === host.name).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/hosts"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all hosts
        </Link>

        {/* Host Header */}
        <div className="text-center mb-12">
          {/* Avatar */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src={host.image}
              alt={host.name}
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {host.name}
          </h1>
          <p className="text-2xl text-primary font-medium mb-4">
            &quot;{host.nickname}&quot;
          </p>

          <div className="flex items-center justify-center gap-2 text-muted mb-4">
            <MapPin className="w-5 h-5" />
            {getLocationDisplay(host.location)}
          </div>

          <p className="text-lg text-secondary font-medium italic mb-6">
            &quot;{host.catchphrase}&quot;
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {host.socialLinks.twitter && (
              <a
                href={host.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-lg text-muted hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {host.socialLinks.instagram && (
              <a
                href={host.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-lg text-muted hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-surface rounded-xl p-6 text-center border border-surface/50">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">
              {host.stats.hotTakes}
            </div>
            <div className="text-sm text-muted">Hot Takes</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center border border-surface/50">
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">
              {host.stats.correctPicks}%
            </div>
            <div className="text-sm text-muted">Accuracy</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center border border-surface/50">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">
              {host.stats.yearsExperience}
            </div>
            <div className="text-sm text-muted">Years Exp.</div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-surface rounded-xl p-8 mb-8 border border-surface/50">
          <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
          <p className="text-muted leading-relaxed">{host.bio}</p>
        </div>

        {/* Signature Move */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 mb-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Signature Move</h2>
              <p className="text-muted italic">{host.signatureMove}</p>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Specialties</h2>
          <div className="flex flex-wrap gap-3">
            {host.specialties.map((specialty) => (
              <Badge key={specialty} variant="primary" size="md">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Favorite Team - only show if exists */}
        {host.favoriteTeam && (
          <div className="bg-surface rounded-xl p-6 mb-12 border border-surface/50">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Favorite Team
            </h2>
            <p className="text-2xl font-bold text-primary">{host.favoriteTeam}</p>
          </div>
        )}

        {/* Articles by Host */}
        {hostArticles.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Articles by {host.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hostArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
