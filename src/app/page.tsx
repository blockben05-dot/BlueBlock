import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Diamond State Block Landscaping",
  description:
    "Lawn care, landscaping, and hardscaping for Newark, Hockessin, and New Castle County, DE.",
  url: "https://blue-block-lovat.vercel.app",
  telephone: "+1-302-555-0142",
  email: "hello@diamondstateblocklandscaping.example",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newark",
    addressRegion: "DE",
    addressCountry: "US",
  },
  areaServed: ["Newark, DE", "Hockessin, DE", "Bear, DE", "Pike Creek, DE"],
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
