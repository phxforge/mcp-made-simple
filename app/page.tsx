import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { MythBusterSection } from '@/components/sections/MythBusterSection';
import { PersonaCards } from '@/components/sections/PersonaCards';
import { FounderStorySection } from '@/components/sections/FounderStorySection';
import { FeaturedContent } from '@/components/sections/FeaturedContent';
import { CourseTeaser } from '@/components/sections/CourseTeaser';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect AI to Your Business Data",
  description: "Stop copy-pasting. Connect Claude to your files in 5 minutes. No coding, no servers, no complexity. Get the free toolkit with 10 pre-built workflows.",
  path: "",
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MCP Made Simple",
    "url": siteConfig.siteUrl,
    "description": "Business automation guide for the Model Context Protocol",
    "author": {
      "@type": "Person",
      "name": "Jason Laveglia"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <div id="solution">
          <ProblemSolution />
        </div>
        <MythBusterSection />
        <PersonaCards />
        <FounderStorySection />
        <FeaturedContent />
        <CourseTeaser />
      </main>
      <Footer />
    </div>
  );
}
