// Podcast Configuration
// Update this URL once you have your podcast hosting set up (Transistor, Buzzsprout, etc.)
export const PODCAST_CONFIG = {
  // Your podcast RSS feed URL - get this from your podcast host
  rssUrl: process.env.NEXT_PUBLIC_PODCAST_RSS_URL || "",

  // Fallback to mock data if no RSS feed is configured
  useMockData: !process.env.NEXT_PUBLIC_PODCAST_RSS_URL,

  // Platform links - update these with your actual URLs
  platforms: {
    spotify: "https://open.spotify.com/show/your-show-id",
    apple: "https://podcasts.apple.com/podcast/your-podcast-id",
    amazon: "https://music.amazon.com/podcasts/your-podcast-id",
    google: "https://podcasts.google.com/feed/your-feed-id",
    youtube: "https://youtube.com/@unfilteredfantasy",
    rss: "", // Will be set to rssUrl
  },
};

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: number; // in seconds
  publishedAt: string;
  imageUrl?: string;
  episodeNumber?: number;
  season?: number;
}

// Parse RSS feed and extract episodes
export async function fetchPodcastEpisodes(): Promise<PodcastEpisode[]> {
  if (!PODCAST_CONFIG.rssUrl) {
    return [];
  }

  try {
    const response = await fetch(PODCAST_CONFIG.rssUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const xml = await response.text();
    return parseRssFeed(xml);
  } catch (error) {
    console.error("Error fetching podcast feed:", error);
    return [];
  }
}

// Parse RSS XML into episode objects
function parseRssFeed(xml: string): PodcastEpisode[] {
  const episodes: PodcastEpisode[] = [];

  // Extract items using regex (works in both server and client)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  let index = 0;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const title = extractTag(itemXml, "title");
    const description = extractTag(itemXml, "description") || extractTag(itemXml, "itunes:summary") || "";
    const pubDate = extractTag(itemXml, "pubDate");
    const duration = parseDuration(extractTag(itemXml, "itunes:duration") || "0");
    const audioUrl = extractEnclosureUrl(itemXml);
    const imageUrl = extractTag(itemXml, "itunes:image", "href") || extractImageFromContent(itemXml);
    const episodeNum = extractTag(itemXml, "itunes:episode");
    const seasonNum = extractTag(itemXml, "itunes:season");

    if (title && audioUrl) {
      episodes.push({
        id: `episode-${index}`,
        title: decodeHtmlEntities(title),
        description: decodeHtmlEntities(stripHtml(description)),
        audioUrl,
        duration,
        publishedAt: pubDate || new Date().toISOString(),
        imageUrl,
        episodeNumber: episodeNum ? parseInt(episodeNum) : undefined,
        season: seasonNum ? parseInt(seasonNum) : undefined,
      });
      index++;
    }
  }

  return episodes;
}

// Helper functions for XML parsing
function extractTag(xml: string, tagName: string, attr?: string): string {
  if (attr) {
    const regex = new RegExp(`<${tagName}[^>]*${attr}=["']([^"']*)["']`, "i");
    const match = xml.match(regex);
    return match ? match[1] : "";
  }

  // Handle CDATA
  const cdataRegex = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tagName}>`, "i");
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle regular content
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

function extractEnclosureUrl(xml: string): string {
  const match = xml.match(/<enclosure[^>]*url=["']([^"']*)["']/i);
  return match ? match[1] : "";
}

function extractImageFromContent(xml: string): string {
  const match = xml.match(/<itunes:image[^>]*href=["']([^"']*)["']/i);
  return match ? match[1] : "";
}

function parseDuration(duration: string): number {
  if (!duration) return 0;

  // If it's already seconds
  if (/^\d+$/.test(duration)) {
    return parseInt(duration);
  }

  // Parse HH:MM:SS or MM:SS format
  const parts = duration.split(":").map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }

  return 0;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&nbsp;": " ",
  };

  return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
}

// Format duration for display
export function formatPodcastDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}
