"use client";
import AboutStory from "@/components/about-story";
import BlueprintSection from "@/components/blue-print";
import ServicesCarousel from "@/components/services-carousel";
import TeamSection from "@/components/team-section";
import JoinTeam from "@/components/jointeam-section";
import ContactSection from "@/components/contact-section";




export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutStory />
      <BlueprintSection />
      <ServicesCarousel />
      <TeamSection />
      <JoinTeam />
      <ContactSection />
    
    </main>
  );
}