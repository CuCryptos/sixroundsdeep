"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Clock, Calendar, ExternalLink } from "lucide-react";
import { getLatestEpisode } from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function LatestEpisode() {
  const episode = getLatestEpisode();

  return (
    <section id="latest-episode" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Latest Episode
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background rounded-2xl overflow-hidden border border-surface/50"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image/Visual Side */}
            <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.8)_100%)]" />

              {/* Episode Number Badge */}
              <div className="absolute top-6 left-6">
                <Badge variant="primary" size="md">
                  Episode {episode.episodeNumber}
                </Badge>
              </div>

              {/* Waveform Visualization */}
              <div className="relative z-10 flex items-end gap-1 h-24">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-primary rounded-full"
                    animate={{
                      height: [
                        Math.random() * 40 + 20,
                        Math.random() * 80 + 20,
                        Math.random() * 40 + 20,
                      ],
                    }}
                    transition={{
                      duration: 0.8 + Math.random() * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Play Button Overlay */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                  <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                </div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {episode.topics.map((topic) => (
                  <Badge key={topic} variant="muted" size="sm">
                    {topic}
                  </Badge>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {episode.title}
              </h3>

              <p className="text-muted mb-6 line-clamp-3">
                {episode.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(episode.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {formatDuration(episode.duration)}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href={`/podcast/${episode.slug}`}>
                  <Button variant="primary">
                    <Play className="w-4 h-4" />
                    Listen Now
                  </Button>
                </Link>
                {episode.spotifyUrl && (
                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost">
                      <ExternalLink className="w-4 h-4" />
                      Spotify
                    </Button>
                  </a>
                )}
                {episode.appleUrl && (
                  <a
                    href={episode.appleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost">
                      <ExternalLink className="w-4 h-4" />
                      Apple Podcasts
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
