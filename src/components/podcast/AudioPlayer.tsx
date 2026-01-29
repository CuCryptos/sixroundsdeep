"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { formatDuration } from "@/lib/utils";

interface AudioPlayerProps {
  title: string;
  duration: number;
}

export default function AudioPlayer({ title, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const progress = (currentTime / duration) * 100;

  return (
    <div className="bg-surface rounded-xl p-6 border border-surface/50">
      {/* Title */}
      <p className="text-sm text-muted mb-4 truncate">{title}</p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-background rounded-full overflow-hidden cursor-pointer">
          <motion.div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>{formatDuration(currentTime)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          className="p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Skip back 15 seconds"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-background shadow-lg shadow-primary/30"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          )}
        </motion.button>

        <button
          className="p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Skip forward 30 seconds"
        >
          <SkipForward className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 text-muted hover:text-foreground transition-colors ml-4"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Waveform Visualization */}
      <div className="flex items-center justify-center gap-0.5 h-8 mt-4">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary/30 rounded-full"
            animate={
              isPlaying
                ? {
                    height: [8, 16 + Math.random() * 16, 8],
                  }
                : { height: 8 }
            }
            transition={{
              duration: 0.4 + Math.random() * 0.3,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
              delay: i * 0.02,
            }}
          />
        ))}
      </div>
    </div>
  );
}
