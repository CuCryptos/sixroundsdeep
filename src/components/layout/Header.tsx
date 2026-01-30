"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic2, Newspaper, Users, Info, Headphones } from "lucide-react";

const navItems = [
  { name: "Podcast", href: "/podcast", icon: Mic2 },
  { name: "Articles", href: "/articles", icon: Newspaper },
  { name: "Hosts", href: "/hosts", icon: Users },
  { name: "About", href: "/about", icon: Info },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-surface-light/50 shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                6RD
              </span>
              <motion.span
                className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground">
                Six Rounds Deep
              </span>
              <span className="block text-xs text-muted -mt-0.5">Fantasy Football Podcast</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light/50"
              >
                <span className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-muted-dark group-hover:text-primary transition-colors" />
                  {item.name}
                </span>
                <motion.span
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
            <Link href="/podcast" className="ml-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-yellow-500 text-background font-bold rounded-xl transition-all"
              >
                <Headphones className="w-4 h-4" />
                Listen Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-surface-light/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted hover:text-foreground hover:bg-surface-light/50 transition-all"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/podcast"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-primary to-yellow-500 text-background font-bold rounded-xl"
                >
                  <Headphones className="w-5 h-5" />
                  Listen Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
