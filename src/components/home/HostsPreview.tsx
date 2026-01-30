"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Users, Sparkles } from "lucide-react";
import { hosts } from "@/lib/data";

function getLocationDisplay(location: { city: string; state?: string; country?: string }) {
  if (location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.city;
}

export default function HostsPreview() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-light/50 rounded-full border border-primary/20 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Meet the Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            The <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Six</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Six friends. Four time zones. Two hemispheres.
            <span className="text-foreground"> One fantasy obsession.</span>
          </p>
        </motion.div>

        {/* Host Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {hosts.map((host, index) => (
            <motion.div
              key={host.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-surface to-surface-light rounded-2xl p-6 border border-surface-light/50 hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-card-hover overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="relative flex items-start gap-4">
                      {/* Avatar */}
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-surface-light group-hover:ring-primary/50 transition-all duration-300">
                          <Image
                            src={host.image}
                            alt={host.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {/* Status indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-3 border-surface flex items-center justify-center">
                          <Sparkles className="w-2.5 h-2.5 text-background" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {host.name}
                        </h3>
                        <p className="text-primary text-sm font-semibold mb-1">
                          &quot;{host.nickname}&quot;
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted mb-2">
                          <MapPin className="w-3 h-3" />
                          {getLocationDisplay(host.location)}
                        </div>
                        <p className="text-sm text-muted-dark italic line-clamp-2">
                          &quot;{host.catchphrase}&quot;
                        </p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="relative mt-4 pt-4 border-t border-surface-light/50">
                      <div className="flex flex-wrap gap-1.5">
                        {host.specialties.slice(0, 2).map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-0.5 bg-surface text-xs text-muted rounded-md border border-surface-light/50 group-hover:border-primary/20 transition-colors duration-300"
                          >
                            {specialty}
                          </span>
                        ))}
                        {host.specialties.length > 2 && (
                          <span className="px-2 py-0.5 text-xs text-muted-dark">
                            +{host.specialties.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/hosts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-light/50 backdrop-blur-sm border border-muted-dark/30 rounded-xl font-semibold text-foreground hover:border-primary/50 hover:bg-surface-light transition-all duration-300"
            >
              View All Host Profiles
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
