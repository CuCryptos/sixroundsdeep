"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Host } from "@/lib/data";

interface USMapProps {
  hosts: Host[];
}

function getLocationDisplay(location: { city: string; state?: string; country?: string }) {
  if (location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.city;
}

export default function USMap({ hosts }: USMapProps) {
  return (
    <div className="relative bg-surface rounded-xl p-6 border border-surface/50 overflow-hidden">
      <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
        Global Coverage
      </h3>
      <p className="text-sm text-muted text-center mb-6">
        Four time zones. Two hemispheres. One fantasy obsession.
      </p>

      {/* World Map Visualization */}
      <div className="relative aspect-[2.5/1] max-w-3xl mx-auto">
        <svg
          viewBox="-30 0 160 80"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid */}
          {[-20, 0, 20, 40, 60, 80, 100, 120].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="80"
              stroke="#00ff88"
              strokeWidth="0.3"
              strokeOpacity="0.1"
            />
          ))}
          {[20, 40, 60].map((y) => (
            <line
              key={`h-${y}`}
              x1="-30"
              y1={y}
              x2="130"
              y2={y}
              stroke="#00ff88"
              strokeWidth="0.3"
              strokeOpacity="0.1"
            />
          ))}

          {/* Simplified continents */}
          {/* North America */}
          <path
            d="M5 15 L25 10 L45 12 L55 15 L60 25 L55 40 L45 50 L35 55 L20 50 L10 40 L5 30 Z"
            fill="#141420"
            stroke="#00ff88"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />

          {/* Hawaii indicator */}
          <circle cx="-10" cy="55" r="3" fill="#141420" stroke="#00ff88" strokeWidth="0.3" strokeOpacity="0.3" />

          {/* Europe */}
          <path
            d="M95 15 L115 12 L125 18 L120 30 L110 35 L100 30 L95 22 Z"
            fill="#141420"
            stroke="#00ff88"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        </svg>

        {/* Host Location Pins */}
        {hosts.map((host, index) => {
          // Normalize coordinates to the viewBox
          const x = ((host.location.coordinates.x + 30) / 160) * 100;
          const y = (host.location.coordinates.y / 80) * 100;

          return (
            <Link
              key={host.id}
              href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Ping effect */}
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  style={{ width: 16, height: 16, margin: -4 }}
                />

                {/* Pin */}
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform relative z-10" />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <div className="bg-background border border-surface px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                    <div className="text-sm font-semibold text-foreground">
                      {host.name}
                    </div>
                    <div className="text-xs text-primary">
                      {getLocationDisplay(host.location)}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-background" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {hosts.map((host) => (
          <Link
            key={host.id}
            href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            {host.name} - {getLocationDisplay(host.location)}
          </Link>
        ))}
      </div>
    </div>
  );
}
