"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-react";
import { formatPodcastDuration } from "@/lib/podcast";

interface PodcastPlayerProps {
  title: string;
  audioUrl: string;
  imageUrl?: string;
}

export default function PodcastPlayer({
  title,
  audioUrl,
  imageUrl,
}: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration || 0);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const skipBack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - 15);
    }
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(duration, audio.currentTime + 30);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-surface to-surface-light rounded-2xl p-6 border border-surface-light/50 shadow-card">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Episode Info */}
      <div className="flex items-center gap-4 mb-6">
        {imageUrl && (
          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-muted mb-1">Now Playing</p>
          <p className="text-foreground font-semibold truncate">{title}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div
          className="h-2 bg-background rounded-full overflow-hidden cursor-pointer group"
          onClick={handleSeek}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-yellow-500 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
          </motion.div>
        </div>
        <div className="flex justify-between text-xs text-muted mt-2">
          <span>{formatPodcastDuration(Math.floor(currentTime))}</span>
          <span>{formatPodcastDuration(Math.floor(duration))}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={skipBack}
          className="p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Skip back 15 seconds"
        >
          <SkipBack className="w-5 h-5" />
          <span className="text-[10px] block -mt-1">15</span>
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          disabled={isLoading}
          className="w-14 h-14 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center text-background shadow-lg shadow-primary/30 disabled:opacity-50"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-6 h-6" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          )}
        </motion.button>

        <button
          onClick={skipForward}
          className="p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Skip forward 30 seconds"
        >
          <SkipForward className="w-5 h-5" />
          <span className="text-[10px] block -mt-1">30</span>
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={toggleMute}
          className="p-1 text-muted hover:text-foreground transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-surface-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full"
        />
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
