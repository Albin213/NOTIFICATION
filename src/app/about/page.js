import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import React from 'react'

function page() {
  return (
    <div className='bg-[#05525F] w-full h-full  aboutpage-bg '>
   
    <h1 className='px-4 sm:px-[30px] lg:px-[74px]  text-[30px] md:text-[44px] text-white font-normal pe-20 sm:pe-0 jomolhari-regular pt-10'>Know More About Apptiv.</h1>

    <div className='px-4 sm:px-[30px] lg:px-[74px] py-10  drop-shadow-xl pb-16 xl:pb-32'>
        <div className='bg-white rounded-[34px] px-6 sm:px-24 xl:px-28 py-12 relative'>
            <img src="right.png" alt="" className='absolute right-0 top-0' />
            <img src="left.png" alt="" className='absolute left-0 bottom-0' />

            <p className='text-[#1B1A1A]  text-[20px] sm:text-[24px] pt-8 sm:pt-14 pb-20 sm:pb-14 font-normal leading-10  poppins-regular sm:text-justify capitalize'>
                Apttiv is your partner in achieving operational excellence.
                 as specialists in OSI soft PI system consulting, we deliver tailored solutions
                  that allow you to harness real-time data, streamline processes, and make informed decisions. 
                  With years of experience in data integration and system optimization, apttiv brings expertise you
                   can rely on to maximize the impact of your PI system and ensure data efficiency across platforms. our 
                   database services further enhance data management and performance.</p>
        </div>
        
    </div>
  
</div>
  )
}

export default page