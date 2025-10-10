import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'

const ServiceCard = () => {
  return (
    <div className='grid grid-cols-1 md: grid-cols-2 mt-4'>
        <Card  className="flex flex-col h-full p-0">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                {/* <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                /> */}
              </div>
            </CardHeader>
            <CardContent className="flex-1  pt-0 pb-0">
              <h2 className="text-lg font-semibold mb-2">title</h2>
              <p className="text-sm text-[#828282]">
                description
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start  pb-2">
                <span className="text-sm text-[#000000]">
                  date
                </span>
              
            </CardFooter>
          </Card>
    </div>
  )
}

export default ServiceCard