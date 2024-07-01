
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { Button } from '@/components/ui/button';


import Image from "next/image";
import Link from 'next/link';
import React from 'react'





const FeaturedPage = () => {
  return (

   
    <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">

<h2 className="text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-16 to-neutral-600 font-sans font-bold">
                    Explore Featured ⚡
                </h2>


<div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 ">

<CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
       Transform Your Business with AI
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
       🔥 Embrace the mastery of AI and unlock a world of infinite possibilities! Imagine a future where every aspect of your business is optimized for peak performance
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/ai-image.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>



    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
     Meet Nazlix our Ai influencer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        
        Her Instagram @nazlix_ai 
        📍Noxiz Ai Digital at Noxiz Ai 
        🤖 Powered by AI
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/nazlix1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="nazlix"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>






    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
      Community Distribution
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        
        We know where the target audience is, how to reel them in, and what makes them stick around. This is why we can drive organic, viral conversations on Whatsapp, Telegram & Discord
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/community-image.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Community Distribution"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>



    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
       Partner with Facebook Ads
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
      Ready to propel your business to new heights? Dive into the world of Facebook Ads and watch your brand soar! 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/facebook.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>




    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
      Discover the Artistry of Web Development
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
     Embark on a voyage of innovation and creativity! Our web development expertise will sculpt your digital footprint and propel your success! 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/webdevelopment.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>






    <CardContainer className="inter-var mb-6">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
       Social Media Marketing
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
    Extend the reach of your brand through laser-focused social ads that amplify awareness and propel sales
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 ">
          <Image
            src="/paid-marketing.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>



    </div>

   
        </div>

    


  )
}

export default FeaturedPage
