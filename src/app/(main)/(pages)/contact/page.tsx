import { BackgroundBeams } from '@/components/global/contact-effect'
import React from 'react'



const ContactPage = () => {
  return (
 
<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto mt-10 p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Let’s get in touch
        </h1>
        <p></p>
        <p className="text-neutral-500  max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        
        Contact:- 9575203140 <br /> Email:- noxizfromfuture@gmail.com 

        </p>
       
      </div>
      <BackgroundBeams />
    </div>
    


  )
}


export default ContactPage