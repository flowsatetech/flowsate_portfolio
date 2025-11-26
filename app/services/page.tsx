import AnimatedSection from "@/components/animated-section";
import BackgroundSlider from "@/components/background-slider";
import Clients from "@/components/clients";
import ComprehensiveServices from "@/components/comprehensive-services";
import EnterpriseSolutions from "@/components/enterprise-solutions";
import IndustryCertification from "@/components/industry-certification";
import Stats from "@/components/stats";
import Team from "@/components/team";
import TransformBuisness from "@/components/transform-buisness";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="w-full h-[30vh] sm:h-[50vh] md:h-screen">
        <BackgroundSlider />
      </div>
      <AnimatedSection direction="up" delay={0.1}>
        <EnterpriseSolutions />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.2}>
        <Stats />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <ComprehensiveServices />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.4}>
        <Clients />
      </AnimatedSection>
      {/* <Team /> */}
      <AnimatedSection delay={0.5}>
        <IndustryCertification />
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <TransformBuisness />
      </AnimatedSection>
    </div>
  );
};

export default Services;
