

import Section1 from '@/components/service/Section1'
import Section2 from '@/components/service/Section2'
import Section3 from '@/components/service/Section3'
import Section4 from '@/components/service/Section4'
import React from 'react'

function page() {
  return (
    <div >
      <div className='bg-[#F5F9FA]'>
        <div className='service-section1-bg bg-[auto_100px] xl:bg-cover 2xl:bg-none'>
        <div className='px-4 sm:px-[30px] lg:px-[74px]'>

        <Section1/>
          </div>
          <div className='px-4 sm:px-[30px] lg:px-[74px]'>
          <Section2/>
         </div>
        </div>
       <div className='service-section3-bg  bg-[auto_100px] xl:bg-contain 2xl:bg-none'>
       <div className='px-4 sm:px-[30px] lg:px-[74px]'>
       <Section3/>
       </div>
       </div>
      </div>
      <div className=''>
       <Section4/>
       </div>
    </div>
  )
}

export default page