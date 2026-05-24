import HeroSection from "@/components/hero-section";
import HomeSlider from "@/components/home-slider"; // <-- carousel
import ServicesSection from "@/components/services-section";
import WhyFlowsateSection from "@/components/why-flowsate-section";
import ProjectsSection from "@/components/project-section";
import TestimonialsSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomeSlider />      {/* <- Carousel goes here */}
      <ServicesSection />
      <WhyFlowsateSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;                                            