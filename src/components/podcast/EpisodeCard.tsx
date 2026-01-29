"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Clock, Calendar } from "lucide-react";
import { Episode } from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
}

export default function EpisodeCard({ episode, index = 0 }: EpisodeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/podcast/${episode.slug}`}>
        <Card glow="primary" className="group">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* Episode Visual */}
            <div className="relative w-full md:w-32 h-32 flex-shrink-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)]" />

              {/* Episode Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/50">
                  {episode.episodeNumber}
                </span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-background ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="primary" size="sm">
                  S{episode.season} E{episode.episodeNumber}
                </Badge>
                {episode.topics.slice(0, 2).map((topic) => (
                  <Badge key={topic} variant="muted" size="sm">
                    {topic}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {episode.title}
              </h3>

              <p className="text-sm text-muted mb-3 line-clamp-2">
                {episode.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(episode.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDuration(episode.duration)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
