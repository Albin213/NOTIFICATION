import React from 'react'
import Section1 from '../components/homepage/Section1'
import Section2 from '../components/homepage/Section2'
import Section3 from '../components/homepage/Section3'
import Section4 from '../components/homepage/Section4'
import Section5 from '../components/homepage/Section5'



function page() {
  return (
    <div className='bg-[#F7FBFB] w-full h-full relative'>


     <div className='w-full h-full bg-img  xl:bg-contain 2xl:bg-none'>
      <Section1/>
      <div className='mt-10 lg:mt-32'>
      <Section2/>
      </div>
     </div>
      <div className='bg-image bg-cover  xl:bg-contain 2xl:bg-cover'>
      <Section3/>
      </div>
      <Section4/>
      <div className=''>
      <Section5/>
      </div>
    

    </div>
  )
}

export default page