import { Metadata } from "next";
import { hosts } from "@/lib/data";
import HostCard from "@/components/hosts/HostCard";
import USMap from "@/components/hosts/USMap";

export const metadata: Metadata = {
  title: "Meet the Hosts | Six Rounds Deep",
  description: "Six friends. Four time zones. Two hemispheres. One fantasy obsession. Meet the hosts behind Six Rounds Deep.",
};

export default function HostsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-primary">Six</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Six friends. Four time zones. Two hemispheres. One fantasy obsession.
            It&apos;s like your group chat got a microphone.
          </p>
        </div>

        {/* Global Map */}
        <div className="mb-12">
          <USMap hosts={hosts} />
        </div>

        {/* Host Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((host, index) => (
            <HostCard key={host.id} host={host} index={index} />
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 bg-surface rounded-xl p-8 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Collective <span className="text-primary">Stats</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {hosts.reduce((acc, h) => acc + h.stats.hotTakes, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted">Total Hot Takes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {Math.round(
                  hosts.reduce((acc, h) => acc + h.stats.correctPicks, 0) / hosts.length
                )}%
              </div>
              <div className="text-sm text-muted">Avg. Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {hosts.reduce((acc, h) => acc + h.stats.yearsExperience, 0)}
              </div>
              <div className="text-sm text-muted">Combined Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted">Time Zones</div>
            </div>
          </div>
        </div>

        {/* The Dynamic */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 via-surface to-accent/10 rounded-xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">
            The <span className="text-primary">Dynamic</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <span className="font-semibold text-foreground">Global Reach:</span>
                <span className="text-muted ml-1">Italy, Vegas, California, Hawaii (x2), Texas</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <span className="font-semibold text-foreground">Built-in Beef:</span>
                <span className="text-muted ml-1">Gabe vs Brady. Data vs vibes.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎲</span>
              <div>
                <span className="font-semibold text-foreground">Chaos Factor:</span>
                <span className="text-muted ml-1">Rod and Curt running wild from Hawaii</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍕</span>
              <div>
                <span className="font-semibold text-foreground">Floor Food:</span>
                <span className="text-muted ml-1">Steve set the bar. There is no bar.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <span className="font-semibold text-foreground">The Glue:</span>
                <span className="text-muted ml-1">Jared keeps it together so everyone else can keep it unhinged</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
