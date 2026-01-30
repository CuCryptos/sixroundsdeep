"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to your email service
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Never Miss a <span className="text-primary">Take</span>
          </h2>

          <p className="text-muted max-w-xl mx-auto mb-8">
            Get the latest episodes, articles, and exclusive content delivered straight to your inbox.
            No spam, just premium fantasy football insights.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/20 border border-primary/30 rounded-xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Check className="w-5 h-5" />
                <span className="font-semibold">You&apos;re in!</span>
              </div>
              <p className="text-sm text-muted">
                Welcome to the Unfiltered Fantasy community. Check your inbox for a confirmation email.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-surface border border-surface/50 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <Button type="submit" variant="primary">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}

          <p className="text-xs text-muted mt-4">
            By subscribing, you agree to receive emails from Unfiltered Fantasy.
            Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
