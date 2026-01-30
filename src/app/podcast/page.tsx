import { Metadata } from "next";
import { episodes } from "@/lib/data";
import EpisodeCard from "@/components/podcast/EpisodeCard";
import PlatformLinks from "@/components/podcast/PlatformLinks";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";

export const metadata: Metadata = {
  title: "Podcast | Unfiltered Fantasy",
  description: "Listen to the latest episodes of Unfiltered Fantasy. Fantasy football analysis, bold predictions, and unfiltered sports talk.",
};

export default function PodcastPage() {
  // Get the latest episode for the featured player
  const latestEpisode = episodes[0];
  const otherEpisodes = episodes.slice(1);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Podcast</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            New episodes every week. Bold takes, hot picks, and unfiltered sports talk
            from six passionate hosts across America.
          </p>
        </div>

        {/* Featured Episode Player */}
        {latestEpisode && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Latest Episode
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <PodcastPlayer
                title={latestEpisode.title}
                audioUrl={latestEpisode.audioUrl || ""}
                imageUrl="/images/podcast-cover.jpg"
              />
              <div className="bg-surface rounded-2xl p-6 border border-surface-light/50">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                    S{latestEpisode.season} E{latestEpisode.episodeNumber}
                  </span>
                  {latestEpisode.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-surface-light text-muted text-sm rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {latestEpisode.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {latestEpisode.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span>{latestEpisode.hosts.length} hosts</span>
                  <span>•</span>
                  <span>{Math.floor(latestEpisode.duration / 60)} min</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Episodes List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              All Episodes
            </h2>
            {otherEpisodes.length > 0 ? (
              otherEpisodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))
            ) : (
              episodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <PlatformLinks />

            {/* About the Podcast */}
            <div className="bg-surface rounded-xl p-6 border border-surface/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                About the Show
              </h3>
              <p className="text-sm text-muted mb-4">
                Unfiltered Fantasy is your weekly destination for fantasy football insights,
                NFL analysis, and lifestyle content. Six hosts from across America bring
                unique perspectives to help you dominate your leagues.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{episodes.length}+</div>
                  <div className="text-xs text-muted">Episodes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted">Hosts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted">Seasons</div>
                </div>
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-gradient-to-br from-primary/20 via-surface to-accent/20 rounded-xl p-6 border border-primary/30">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Never Miss an Episode
              </h3>
              <p className="text-sm text-muted mb-4">
                Subscribe to get notified when new episodes drop.
              </p>
              <button className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
