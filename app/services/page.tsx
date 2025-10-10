import Clients from '@/components/clients'
import ComprehensiveServices from '@/components/comprehensive-services'
import EnterpriseSolutions from '@/components/enterprise-solutions'
import Stats from '@/components/stats'
import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <EnterpriseSolutions />
      <Stats />
      {/* <ComprehensiveServices /> */}
      <Clients />
      </div>
  )
}

export default Services