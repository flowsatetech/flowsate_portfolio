import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TeamSection } from "@/components/TeamSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CertificationsSection } from "@/components/certificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}