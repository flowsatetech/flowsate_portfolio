import BackgroundSlider from '@/components/background-slider'
import Clients from '@/components/clients'
import ComprehensiveServices from '@/components/comprehensive-services'
import EnterpriseSolutions from '@/components/enterprise-solutions'
import IndustryCertification from '@/components/industry-certification'
import Stats from '@/components/stats'
import Team from '@/components/team'
import TransformBuisness from '@/components/transform-buisness'
import React from 'react'

const Services = () => {
  return (
    <div >
      <div className="w-full h-screen">
      <BackgroundSlider />
      </div>
      <EnterpriseSolutions />
      <Stats />
      <ComprehensiveServices />
      <Clients />
      <Team />
      <IndustryCertification />
      <TransformBuisness />
      </div>
  )
}

export default Services


