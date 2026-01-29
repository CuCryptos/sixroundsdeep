"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { hosts } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function getLocationDisplay(location: { city: string; state?: string; country?: string }) {
  if (location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.city;
}

export default function HostsPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the <span className="text-primary">Six</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Six friends. Four time zones. Two hemispheres. One fantasy obsession.
          </p>
        </motion.div>

        {/* Host Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hosts.map((host, index) => (
            <motion.div
              key={host.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/hosts/${host.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card glow="primary" className="h-full">
                  <div className="p-6">
                    {/* Avatar */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                      <Image
                        src={host.image}
                        alt={host.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground">
                        {host.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">
                        &quot;{host.nickname}&quot;
                      </p>

                      <div className="flex items-center justify-center gap-1 text-xs text-muted mb-3">
                        <MapPin className="w-3 h-3" />
                        {getLocationDisplay(host.location)}
                      </div>

                      <p className="text-sm text-secondary italic line-clamp-2">
                        &quot;{host.catchphrase}&quot;
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1">
                      {host.specialties.slice(0, 2).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-0.5 bg-surface text-xs text-muted rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/hosts">
            <Button variant="outline">
              Meet All Hosts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
