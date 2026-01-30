import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mic2, ArrowRight, MapPin } from "lucide-react";
import { hosts } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Unfiltered Fantasy",
  description: "Six friends. Four time zones. Two hemispheres. Zero chill. Learn about Unfiltered Fantasy - the fantasy football podcast that sounds exactly like your league group chat.",
};

export default function AboutPage() {
  const hostHighlights = [
    {
      name: "Brady",
      nickname: "The Conspiracy",
      location: "Italy",
      description: "Every league needs someone who thinks the NFL is a scripted entertainment product run by shadow executives. Brady is that guy. He's also an incredible cook, a goat enthusiast, and the reason our group chat has a \"no links after midnight\" rule that nobody enforces. If your star player got hurt in a suspicious spot, Brady saw it coming. He always sees it coming.",
    },
    {
      name: "Jared",
      nickname: "Fantasy Bro",
      location: "Las Vegas, Nevada",
      description: "Jared is the guy who actually makes this podcast happen. He schedules the recordings, keeps us organized, and genuinely believes in expert consensus rankings with his whole heart. Says things like \"smash spot\" and \"league winner\" without a trace of irony. Lives in Vegas, can't gamble. Finished 2nd in a major FFPC championship with his co-owner Houdini, and will absolutely tell the story like he did it solo.",
    },
    {
      name: "Gabe",
      nickname: "The Accountant",
      location: "Carlsbad, California",
      description: "If there's a stat, Gabe knows it. If there's a trend, Gabe charted it. Target share, air yards, snap count percentages—he's got spreadsheets for everything and opinions backed by numbers you've never heard of. Originally from New York, now living that California life while methodically grinding toward gambling's promised land. He and Brady agree on almost nothing, which is great for content.",
    },
    {
      name: "Rod",
      nickname: "Riverboat",
      location: "Honolulu, Hawaii",
      description: "Rod doesn't play fantasy football. Rod *gambles* fantasy football. Every lineup is a high-wire act. Every trade is a blockbuster. He'll bench your WR1 for a \"feeling\" and start a backup because \"this is his week.\" His scores look like an EKG readout—violent spikes, terrifying drops, never boring. Somehow makes the playoffs more often than he should.",
    },
    {
      name: "Steve",
      nickname: "Floor Pizza",
      location: "Texas (via Seattle)",
      description: "A Seahawks loyalist stranded in Cowboys territory, Steve brings the intensity every episode needs. Father of four girls. Consumer of floor pizza (long story, Vegas was involved, no regrets). When things go wrong—and in fantasy, things always go wrong—Steve lets you know about it. His emotional investment in every game is either inspiring or concerning. We haven't decided.",
    },
    {
      name: "Curt",
      nickname: "Houdini",
      location: "Honolulu, Hawaii",
      description: "You know that guy in your league who should lose but never does? The one who pulls off trades that look terrible and then somehow wins? That's Curt. Down 40 going into Monday night? He wins by 3. Makes a move everyone laughs at? Three weeks later he's laughing. He also has a talent for disappearing when league dues are owed or when it's time to hang out. Hence the name.",
    },
  ];

  const topics = [
    "Start/sit decisions we'll regret by Sunday night",
    "Trades that make no sense until they do (or don't)",
    "Whether the NFL is actually rigged (Brady has thoughts)",
    "Waiver wire desperation moves",
    "The emotional trauma of fantasy sports",
    "Whatever chaos happened in our leagues that week",
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Unfiltered Fantasy</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Six Friends. Four Time Zones. Two Hemispheres. Zero Chill.
          </p>
          <div className="space-y-4 text-lg text-muted max-w-3xl mx-auto">
            <p>
              Fantasy football wasn&apos;t supposed to take over our lives. And yet here we are—six guys scattered from Italy to Hawaii, arguing about waiver wire pickups at hours that make no sense in anyone&apos;s time zone.
            </p>
            <p>
              <span className="text-primary font-semibold">Unfiltered Fantasy</span> is the podcast that sounds exactly like your fantasy league group chat: chaotic, opinionated, occasionally brilliant, and absolutely certain that last week&apos;s loss was somehow rigged.
            </p>
            <p>
              We&apos;re not analysts in a studio. We&apos;re not former players breaking down film. We&apos;re six friends who&apos;ve been playing fantasy together, roasting each other&apos;s trades, and questioning each other&apos;s sanity for years. Now we have microphones, which was probably a mistake.
            </p>
          </div>
        </div>

        {/* How It Started */}
        <div className="bg-surface rounded-xl p-8 mb-16 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Started</span>
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              It started the way most bad ideas do—someone said &quot;we should start a podcast&quot; and nobody said no.
            </p>
            <p>
              Between us, we&apos;ve got a guy living in Italy watching goats and investigating NFL conspiracies. A Vegas local who can&apos;t win a bet to save his life but trusts FantasyPros like it&apos;s scripture. A spreadsheet wizard who built his own projection model. A Hawaiian riverboat gambler who&apos;s never met a safe floor he liked. A Seahawks fan in Texas with four daughters and a short fuse. And a guy who keeps escaping certain fantasy defeat through what can only be described as dark magic.
            </p>
            <p>
              We figured if we&apos;re going to argue about fantasy football across four time zones anyway, we might as well let people listen.
            </p>
          </div>
        </div>

        {/* Meet the Six */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Meet the <span className="text-primary">Six</span>
          </h2>
          <div className="space-y-6">
            {hostHighlights.map((host) => {
              const hostData = hosts.find((h) => h.name === host.name);
              return (
                <div
                  key={host.name}
                  className="bg-surface rounded-xl p-6 border border-surface/50"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Avatar */}
                    {hostData && (
                      <div className="flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto sm:mx-0">
                          <Image
                            src={hostData.image}
                            alt={host.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {host.name}{" "}
                          <span className="text-primary">&quot;{host.nickname}&quot;</span>
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted mb-3">
                        <MapPin className="w-4 h-4" />
                        {host.location}
                      </div>
                      <p className="text-muted leading-relaxed">{host.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What We Talk About */}
        <div className="bg-gradient-to-br from-primary/10 via-surface to-accent/10 rounded-xl p-8 mb-16 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Talk About</span>
          </h2>
          <p className="text-muted mb-6">Fantasy football, obviously. But also:</p>
          <ul className="space-y-3 mb-6">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-muted">
                <span className="text-primary mt-1">•</span>
                {topic}
              </li>
            ))}
          </ul>
          <p className="text-muted">
            We argue. We laugh. We make predictions that age poorly. It&apos;s like sitting at a bar with your league mates, except we&apos;re spread across the globe and one of us might be watching goats.
          </p>
        </div>

        {/* Why Listen */}
        <div className="bg-surface rounded-xl p-8 mb-16 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Why <span className="text-primary">Listen</span>?
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Because you&apos;ve got a group chat full of fantasy degenerates too, and you know exactly what this sounds like.
            </p>
            <p>
              We&apos;re not here to give you optimized lineups generated by algorithms. We&apos;re here to talk fantasy the way real people talk fantasy—with bias, bad takes, personal vendettas against certain players, and the absolute conviction that <em>this</em> is the year everything comes together.
            </p>
            <p className="text-secondary font-medium">
              New episodes drop weekly. Bring your own bad decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-surface rounded-xl p-8 border border-surface/50 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <div className="space-y-2 text-muted mb-6">
            <p><span className="text-foreground font-medium">Listen:</span> Wherever you get your podcasts</p>
            <p><span className="text-foreground font-medium">Follow:</span> @sixroundsdeep</p>
            <p><span className="text-foreground font-medium">Join the chaos:</span> Come hang out</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcast">
              <Button variant="primary" size="lg">
                <Mic2 className="w-5 h-5" />
                Listen to the Podcast
              </Button>
            </Link>
            <Link href="/hosts">
              <Button variant="outline" size="lg">
                Meet the Hosts
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-muted italic">
          Unfiltered Fantasy. No scripts. No filters. Just chaos.
        </p>
      </div>
    </div>
  );
}
