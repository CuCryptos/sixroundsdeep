import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users } from "lucide-react";
import { episodes, getEpisodeBySlug } from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/utils";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";
import PlatformLinks from "@/components/podcast/PlatformLinks";
import Badge from "@/components/ui/Badge";
import EpisodeCard from "@/components/podcast/EpisodeCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const episode = getEpisodeBySlug(resolvedParams.slug);

  if (!episode) {
    return {
      title: "Episode Not Found | Unfiltered Fantasy",
    };
  }

  return {
    title: `${episode.title} | Unfiltered Fantasy Podcast`,
    description: episode.description,
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const resolvedParams = await params;
  const episode = getEpisodeBySlug(resolvedParams.slug);

  if (!episode) {
    notFound();
  }

  const otherEpisodes = episodes
    .filter((ep) => ep.id !== episode.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/podcast"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all episodes
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Episode Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary" size="md">
                  Season {episode.season} Episode {episode.episodeNumber}
                </Badge>
                {episode.topics.map((topic) => (
                  <Badge key={topic} variant="muted" size="md">
                    {topic}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {episode.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(episode.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {formatDuration(episode.duration)}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {episode.hosts.length} hosts
                </span>
              </div>
            </div>

            {/* Audio Player */}
            <div className="mb-8">
              <PodcastPlayer
                title={episode.title}
                audioUrl={episode.audioUrl || ""}
                imageUrl="/images/podcast-cover.jpg"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                About This Episode
              </h2>
              <p className="text-muted leading-relaxed">{episode.description}</p>
            </div>

            {/* Hosts */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Featured Hosts
              </h2>
              <div className="flex flex-wrap gap-3">
                {episode.hosts.map((host) => (
                  <Link
                    key={host}
                    href={`/hosts/${host.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xs font-bold text-primary">
                      {host.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {host}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* More Episodes */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                More Episodes
              </h2>
              <div className="space-y-4">
                {otherEpisodes.map((ep, index) => (
                  <EpisodeCard key={ep.id} episode={ep} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <PlatformLinks />

            {/* Share */}
            <div className="bg-surface rounded-xl p-6 border border-surface/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Share This Episode
              </h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-background rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
                  Twitter
                </button>
                <button className="flex-1 py-2 bg-background rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
                  Facebook
                </button>
                <button className="flex-1 py-2 bg-background rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
