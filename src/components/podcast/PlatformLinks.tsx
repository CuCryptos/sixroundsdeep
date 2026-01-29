"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/xxx",
    color: "#1DB954",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/podcast/xxx",
    color: "#9933FF",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.608 1.684 2.501 3.97 2.501 6.411 0 1.54-.322 2.976-.96 4.274l-.024.048a.592.592 0 01-.793.285.602.602 0 01-.283-.793c.56-1.136.848-2.406.848-3.779 0-2.155-.79-4.194-2.23-5.748-1.438-1.554-3.34-2.41-5.357-2.41-2.017 0-3.919.856-5.357 2.41-1.44 1.554-2.23 3.593-2.23 5.748 0 1.368.286 2.636.843 3.767a.599.599 0 11-1.074.532A10.17 10.17 0 013.042 11.6c0-2.478.893-4.8 2.502-6.52 1.607-1.722 3.72-2.512 6.32-2.512zm.14 3.396c1.627 0 3.15.601 4.296 1.693 1.145 1.093 1.775 2.593 1.775 4.218 0 1.08-.247 2.088-.735 2.996-.104.193-.2.374-.312.574a.596.596 0 01-.808.235.6.6 0 01-.234-.81c.094-.166.176-.319.262-.483.395-.734.616-1.603.616-2.512 0-1.33-.514-2.545-1.447-3.435-.935-.89-2.17-1.38-3.48-1.38-1.31 0-2.545.49-3.479 1.38-.934.89-1.447 2.106-1.447 3.435 0 .91.22 1.778.614 2.512.087.164.169.317.264.484a.6.6 0 01-.234.808.598.598 0 01-.808-.233c-.112-.2-.207-.38-.312-.574a6.712 6.712 0 01-.734-2.996c0-1.625.63-3.125 1.774-4.218 1.145-1.092 2.669-1.693 4.297-1.693zm-.047 3.24a2.876 2.876 0 012.892 2.892c0 .653-.197 1.22-.513 1.7l.005-.003c.148.206.276.418.395.638l1.946 5.052c.165.432.232.915.08 1.363a1.766 1.766 0 01-.793.913c-.39.234-.8.301-1.245.237a1.78 1.78 0 01-1.11-.61l-1.621-1.987a.66.66 0 00-.508-.238.66.66 0 00-.51.238l-1.62 1.988a1.78 1.78 0 01-1.11.61 1.65 1.65 0 01-1.245-.237 1.763 1.763 0 01-.793-.914c-.152-.447-.086-.93.079-1.362l1.946-5.052c.119-.22.247-.432.395-.638l.005.002a2.877 2.877 0 012.325-4.592z"/>
      </svg>
    ),
  },
  {
    name: "Google Podcasts",
    url: "https://podcasts.google.com/feed/xxx",
    color: "#4285F4",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1.104 0 2 .896 2 2v4c0 1.104-.896 2-2 2s-2-.896-2-2V2c0-1.104.896-2 2-2zm0 16c1.104 0 2 .896 2 2v4c0 1.104-.896 2-2 2s-2-.896-2-2v-4c0-1.104.896-2 2-2zm0-6c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zM4 10c1.104 0 2 .896 2 2v4c0 1.104-.896 2-2 2s-2-.896-2-2v-4c0-1.104.896-2 2-2zm16 0c1.104 0 2 .896 2 2v4c0 1.104-.896 2-2 2s-2-.896-2-2v-4c0-1.104.896-2 2-2zM4 2c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm16 0c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/>
      </svg>
    ),
  },
  {
    name: "RSS Feed",
    url: "/feed.xml",
    color: "#FFA500",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.18 15.64a2.18 2.18 0 010 4.36 2.18 2.18 0 010-4.36zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zm0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93v-2.83z"/>
      </svg>
    ),
  },
];

export default function PlatformLinks() {
  return (
    <div className="bg-surface rounded-xl p-6 border border-surface/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Listen On Your Favorite Platform
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
            style={{ "--platform-color": platform.color } as React.CSSProperties}
          >
            <span className="text-muted group-hover:text-[var(--platform-color)] transition-colors">
              {platform.icon}
            </span>
            <span className="text-sm font-medium text-foreground flex-1">
              {platform.name}
            </span>
            <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
