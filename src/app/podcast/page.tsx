import { Metadata } from "next";
import { episodes } from "@/lib/data";
import EpisodeCard from "@/components/podcast/EpisodeCard";
import PlatformLinks from "@/components/podcast/PlatformLinks";

export const metadata: Metadata = {
  title: "Podcast | Six Rounds Deep",
  description: "Listen to the latest episodes of Six Rounds Deep. Fantasy football analysis, bold predictions, and unfiltered sports talk.",
};

export default function PodcastPage() {
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Episodes List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              All Episodes
            </h2>
            {episodes.map((episode, index) => (
              <EpisodeCard key={episode.id} episode={episode} index={index} />
            ))}
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
                Six Rounds Deep is your weekly destination for fantasy football insights,
                NFL analysis, and lifestyle content. Six hosts from across America bring
                unique perspectives to help you dominate your leagues.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
