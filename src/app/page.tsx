import Hero from "@/components/home/Hero";
import LatestEpisode from "@/components/home/LatestEpisode";
import HostsPreview from "@/components/home/HostsPreview";
import ArticleGrid from "@/components/home/ArticleGrid";
import SocialStrip from "@/components/home/SocialStrip";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestEpisode />
      <HostsPreview />
      <ArticleGrid />
      <SocialStrip />
      <Newsletter />
    </>
  );
}
