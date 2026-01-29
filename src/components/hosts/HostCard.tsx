"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Host } from "@/lib/data";
import Card from "@/components/ui/Card";

interface HostCardProps {
  host: Host;
  index?: number;
}

function getLocationDisplay(location: { city: string; state?: string; country?: string }) {
  if (location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.city;
}

export default function HostCard({ host, index = 0 }: HostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <Card glow="primary" className="group h-full">
          <div className="p-6">
            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={host.image}
                alt={host.name}
                fill
                className="object-cover rounded-full group-hover:scale-105 transition-transform"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {host.name}
              </h3>
              <p className="text-primary font-medium mb-2">
                &quot;{host.nickname}&quot;
              </p>

              <div className="flex items-center justify-center gap-1 text-sm text-muted mb-3">
                <MapPin className="w-4 h-4" />
                {getLocationDisplay(host.location)}
              </div>

              <p className="text-sm text-secondary italic mb-4 line-clamp-2">
                &quot;{host.catchphrase}&quot;
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {host.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-0.5 bg-surface text-xs text-muted rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-surface">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {host.stats.hotTakes}
                  </div>
                  <div className="text-xs text-muted">Hot Takes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {host.stats.correctPicks}%
                  </div>
                  <div className="text-xs text-muted">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {host.stats.yearsExperience}
                  </div>
                  <div className="text-xs text-muted">Years</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
