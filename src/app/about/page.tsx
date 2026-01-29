import { Metadata } from "next";
import Link from "next/link";
import { Mic2, Heart, ArrowRight, Globe, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Six Rounds Deep",
  description: "Six friends. Four time zones. Two hemispheres. One fantasy obsession. Learn about Six Rounds Deep - where your group chat got a microphone.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2022",
      title: "The Group Chat Era",
      description: "Six friends scattered across the globe started arguing about fantasy football. The takes were too hot to keep private.",
    },
    {
      year: "2023",
      title: "First Episode",
      description: "We hit record for the first time. Brady was already convinced the NFL was rigged. Steve was already mad.",
    },
    {
      year: "2023",
      title: "FFPC Runner-Up",
      description: "Jared and Curt finished 2nd in the FFPC Championship. They still argue about who carried the team.",
    },
    {
      year: "2024",
      title: "Season 3",
      description: "Now broadcasting from Italy to Hawaii, we're bigger, bolder, and still delivering the takes you need.",
    },
  ];

  const values = [
    {
      icon: Mic2,
      title: "Unfiltered Takes",
      description: "Brady thinks the NFL is rigged. Rod will start your backup's backup. Steve ate floor pizza. We don't hold back.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "From Italy to Hawaii, we cover every time zone and bring perspectives you won't find anywhere else.",
    },
    {
      icon: Zap,
      title: "Chaos Energy",
      description: "Safe floors are for cowards. We're here for the boom-or-bust plays and the Monday Night miracles.",
    },
    {
      icon: Heart,
      title: "Friend Group Vibes",
      description: "We're not analysts in suits. We're six friends who take fantasy way too seriously and wouldn't have it any other way.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Six Rounds Deep</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Six friends. Four time zones. Two hemispheres. One fantasy obsession.
            It&apos;s like your group chat got a microphone.
          </p>
        </div>

        {/* Origin Story */}
        <div className="bg-surface rounded-xl p-8 mb-16 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Six Rounds Deep is what happens when six guys scattered across the globe—from
              Italy to Hawaii to Texas—come together to argue about fantasy football,
              questionable lineup decisions, and whether the NFL is actually rigged.
            </p>
            <p>
              Brady sees conspiracies everywhere and floods the group chat at 3am Italy time.
              Jared follows expert consensus like it&apos;s scripture. Gabe built his own projection
              model and will absolutely walk you through it. Rod hasn&apos;t taken a safe play since
              2019. Steve ate pizza off a Vegas casino floor. And Curt? Curt just wins
              games he has no business winning.
            </p>
            <p>
              We&apos;re not former NFL players. We&apos;re not paid analysts. We&apos;re just six friends
              who take fantasy football way too seriously—and somehow convinced people to
              listen to us argue about it.
            </p>
            <p>
              Join us every week for hot takes, questionable advice, and the kind of sports
              talk that only happens when your group chat goes too far.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year + milestone.title}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-surface rounded-xl p-6 border border-surface/50">
                    <span className="text-primary font-bold">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What We <span className="text-primary">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-xl p-6 border border-surface/50"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-surface to-accent/10 rounded-xl p-8 border border-surface/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Go <span className="text-primary">Deep</span>?
          </h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            New episodes every week. Available wherever you get your podcasts.
          </p>
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
      </div>
    </div>
  );
}
