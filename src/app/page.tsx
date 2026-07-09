import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
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
