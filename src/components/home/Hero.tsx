"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Headphones } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

function AnimatedUnicorn() {
  return (
    <motion.div
      className="absolute w-64 h-64 md:w-80 md:h-80"
      initial={{ x: "100vw", y: "20%" }}
      animate={{
        x: ["-20%", "120%"],
        y: ["20%", "60%", "30%", "50%", "20%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        times: [0, 1],
      }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_0_30px_rgba(255,59,59,0.5)]"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Unicorn body */}
        <ellipse cx="100" cy="120" rx="50" ry="35" fill="#ffffff" />

        {/* Back leg */}
        <motion.path
          d="M70 145 L65 180 L75 180 L80 145"
          fill="#ffffff"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "72px 145px" }}
        />

        {/* Front leg */}
        <motion.path
          d="M120 145 L115 180 L125 180 L130 145"
          fill="#ffffff"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "122px 145px" }}
        />

        {/* Neck */}
        <path d="M135 100 Q155 80 150 60" stroke="#ffffff" strokeWidth="20" fill="none" strokeLinecap="round" />

        {/* Head */}
        <ellipse cx="155" cy="55" rx="25" ry="20" fill="#ffffff" />

        {/* Horn */}
        <motion.polygon
          points="160,35 155,5 165,35"
          fill="url(#hornGradient)"
          animate={{
            filter: [
              "drop-shadow(0 0 5px #ff3b3b)",
              "drop-shadow(0 0 15px #ff3b3b)",
              "drop-shadow(0 0 5px #ff3b3b)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Horn spiral lines */}
        <path d="M157 30 L163 28 M156 24 L164 22 M157 18 L163 16 M158 12 L162 10" stroke="#ff3b3b" strokeWidth="1" />

        {/* Ear */}
        <polygon points="140,40 145,25 150,42" fill="#ffffff" />

        {/* Eye */}
        <circle cx="162" cy="52" r="4" fill="#1a1a1a" />
        <circle cx="163" cy="51" r="1.5" fill="#ffffff" />

        {/* Mane */}
        <motion.path
          d="M135 95 Q125 75 140 70 Q130 60 145 55 Q135 45 150 45"
          stroke="url(#maneGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M135 95 Q125 75 140 70 Q130 60 145 55 Q135 45 150 45",
              "M135 95 Q120 78 138 72 Q125 62 143 57 Q130 47 148 47",
              "M135 95 Q125 75 140 70 Q130 60 145 55 Q135 45 150 45",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tail */}
        <motion.path
          d="M50 115 Q20 100 25 130 Q15 110 20 140 Q10 120 15 150"
          stroke="url(#maneGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M50 115 Q20 100 25 130 Q15 110 20 140 Q10 120 15 150",
              "M50 115 Q25 95 30 125 Q20 105 25 135 Q15 115 20 145",
              "M50 115 Q20 100 25 130 Q15 110 20 140 Q10 120 15 150",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sparkles around unicorn */}
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        >
          <polygon points="40,60 42,65 47,65 43,68 45,73 40,70 35,73 37,68 33,65 38,65" fill="#ff3b3b" />
        </motion.g>
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        >
          <polygon points="180,90 182,95 187,95 183,98 185,103 180,100 175,103 177,98 173,95 178,95" fill="#ff6b6b" />
        </motion.g>
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
        >
          <polygon points="90,70 92,75 97,75 93,78 95,83 90,80 85,83 87,78 83,75 88,75" fill="#ffffff" />
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="hornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff3b3b" />
            <stop offset="50%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="maneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff3b3b" />
            <stop offset="50%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#8b0000" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Unicorn */}
        <AnimatedUnicorn />

        {/* Subtle glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.h1
            className="text-7xl md:text-9xl font-bold text-primary mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 59, 59, 0.5)",
                "0 0 40px rgba(255, 59, 59, 0.8)",
                "0 0 20px rgba(255, 59, 59, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="glitch-text" data-text="6RD">6RD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-foreground mb-6"
          >
            Six Rounds Deep
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <div className="mb-8">
          <AnimatedText
            text="Bold takes. Hot picks. Unfiltered sports talk."
            className="text-xl md:text-2xl text-muted justify-center"
            delay={0.5}
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg text-muted/80 max-w-2xl mx-auto mb-12"
        >
          Six passionate hosts from across America bringing you the best fantasy football analysis,
          sports insights, and lifestyle content every week.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/podcast">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Headphones className="w-5 h-5" />
              Listen Now
            </Button>
          </Link>
          <Link href="#latest-episode">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Latest Episode
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "50+", label: "Episodes" },
            { value: "6", label: "Hosts" },
            { value: "10K+", label: "Listeners" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-muted rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
