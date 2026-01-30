"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Trophy, Target, Zap, Twitter, Instagram } from "lucide-react";
import { Host } from "@/lib/data";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group relative h-full"
        >
          {/* Card */}
          <div className="relative bg-gradient-to-br from-surface to-surface-light rounded-2xl overflow-hidden border border-surface-light/50 hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-card-hover">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Image section */}
            <div className="relative pt-6 px-6">
              <motion.div
                className="relative w-28 h-28 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Ring animation */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full border border-accent/20"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.5,
                  }}
                />

                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-surface-light group-hover:ring-primary/50 transition-all duration-300">
                  <Image
                    src={host.image}
                    alt={host.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-secondary rounded-full border-4 border-surface flex items-center justify-center">
                  <motion.div
                    className="w-2 h-2 bg-secondary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              {/* Name & Nickname */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {host.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-2">
                &quot;{host.nickname}&quot;
              </p>

              {/* Location */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-full text-xs text-muted mb-4">
                <MapPin className="w-3 h-3" />
                {getLocationDisplay(host.location)}
              </div>

              {/* Catchphrase */}
              <p className="text-sm text-muted italic mb-5 line-clamp-2 min-h-[40px]">
                &quot;{host.catchphrase}&quot;
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="bg-surface/50 rounded-xl p-3 group-hover:bg-primary/10 transition-colors duration-300">
                  <Trophy className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{host.stats.hotTakes}</div>
                  <div className="text-[10px] text-muted uppercase tracking-wide">Takes</div>
                </div>
                <div className="bg-surface/50 rounded-xl p-3 group-hover:bg-secondary/10 transition-colors duration-300">
                  <Target className="w-4 h-4 text-secondary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{host.stats.correctPicks}%</div>
                  <div className="text-[10px] text-muted uppercase tracking-wide">Accuracy</div>
                </div>
                <div className="bg-surface/50 rounded-xl p-3 group-hover:bg-accent/10 transition-colors duration-300">
                  <Zap className="w-4 h-4 text-accent mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{host.stats.yearsExperience}</div>
                  <div className="text-[10px] text-muted uppercase tracking-wide">Years</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {host.specialties.slice(0, 3).map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2.5 py-1 bg-surface-light/50 text-xs text-muted rounded-full border border-surface-light hover:border-primary/30 hover:text-foreground transition-all duration-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-2">
                {host.socialLinks.twitter && (
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-surface rounded-lg text-muted hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.div>
                )}
                {host.socialLinks.instagram && (
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-surface rounded-lg text-muted hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom gradient line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
