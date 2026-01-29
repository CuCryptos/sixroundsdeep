"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, MessageCircle, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    handle: "@sixroundsdeep",
    icon: Twitter,
    color: "hover:text-[#1DA1F2]",
    bgColor: "hover:bg-[#1DA1F2]/10",
    url: "https://twitter.com/sixroundsdeep",
    description: "Hot takes and live game reactions",
  },
  {
    name: "Instagram",
    handle: "@sixroundsdeep",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
    bgColor: "hover:bg-[#E4405F]/10",
    url: "https://instagram.com/sixroundsdeep",
    description: "Behind the scenes & lifestyle content",
  },
  {
    name: "YouTube",
    handle: "@sixroundsdeep",
    icon: Youtube,
    color: "hover:text-[#FF0000]",
    bgColor: "hover:bg-[#FF0000]/10",
    url: "https://youtube.com/@sixroundsdeep",
    description: "Full episodes & video highlights",
  },
  {
    name: "Discord",
    handle: "Join the community",
    icon: MessageCircle,
    color: "hover:text-[#5865F2]",
    bgColor: "hover:bg-[#5865F2]/10",
    url: "#",
    description: "Chat with hosts and fellow fans",
  },
];

export default function SocialStrip() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Join the <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-muted">
            Follow us across social media for daily content, hot takes, and community vibes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group p-6 bg-surface rounded-xl border border-surface/50 transition-all duration-300 ${social.bgColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <social.icon className={`w-8 h-8 text-muted transition-colors ${social.color}`} />
                <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className={`font-semibold text-foreground mb-1 transition-colors ${social.color}`}>
                {social.name}
              </h3>
              <p className="text-sm text-primary mb-2">{social.handle}</p>
              <p className="text-xs text-muted">{social.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
