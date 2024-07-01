import HoverEffect from '@/components/global/services-hover'
import { Button } from '@/components/ui/button'
import { servicesItems } from '@/lib/constants'
import Link from 'next/link'

import React from 'react'



const ServicesPage = () => {
  return (
    <div className="max-w-6xl flex text-xl text-sm font-sans items-center p-4 mt-[150px] flex-col mx-auto px-8">

<h2 className="text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-8 to-neutral-600 font-sans font-bold">
                    Our Services ✔
                </h2>

        <HoverEffect items={servicesItems} />

        <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    <Link href="/featured">Explore Featured</Link>
                  </span>
                </Button>
        </div>
        
  )
}

export default ServicesPage
