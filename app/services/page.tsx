import Clients from '@/components/clients'
import ComprehensiveServices from '@/components/comprehensive-services'
import EnterpriseSolutions from '@/components/enterprise-solutions'
import IndustryCertification from '@/components/industry-certification'
import Stats from '@/components/stats'
import Team from '@/components/team'
import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <EnterpriseSolutions />
      <Stats />
      {/* <ComprehensiveServices /> */}
      <Clients />
      <Team />
      <IndustryCertification />
      </div>
  )
}

export default Services