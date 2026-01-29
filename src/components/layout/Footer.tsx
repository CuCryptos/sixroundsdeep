import Link from "next/link";
import { Twitter, Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  content: [
    { name: "Podcast", href: "/podcast" },
    { name: "Articles", href: "/articles" },
    { name: "Hosts", href: "/hosts" },
    { name: "About", href: "/about" },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com/sixroundsdeep", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/sixroundsdeep", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@sixroundsdeep", icon: Youtube },
    { name: "Email", href: "mailto:hello@sixroundsdeep.com", icon: Mail },
  ],
  platforms: [
    { name: "Spotify", href: "#" },
    { name: "Apple Podcasts", href: "#" },
    { name: "Google Podcasts", href: "#" },
    { name: "RSS Feed", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold text-primary">6RD</span>
            </Link>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Bold takes, hot picks, and unfiltered sports talk from six passionate hosts across America.
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Content</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Listen On</h3>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Six Rounds Deep. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
