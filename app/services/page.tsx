import React from 'react'
import BackgroundSlider from '@/components/background-slider'
import Clients from '@/components/clients'
import ComprehensiveServices from '@/components/comprehensive-services'
import EnterpriseSolutions from '@/components/enterprise-solutions'
import IndustryCertification from '@/components/industry-certification'
import Stats from '@/components/stats'
import Team from '@/components/team'
import TransformBuisness from '@/components/transform-buisness'

const Services = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Hero or Background Section */}
      <section className="w-full h-[100vh] sm:h-[90vh] md:h-[85vh] relative">
        <BackgroundSlider />
      </section>

      {/* Main Sections */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-16 md:space-y-24">
        <EnterpriseSolutions />
        <Stats />
        <ComprehensiveServices />
        <Clients />
        <Team />
        <IndustryCertification />
        <TransformBuisness />
      </section>
    </main>
  )
}

export default Services