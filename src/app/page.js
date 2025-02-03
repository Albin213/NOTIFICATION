import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'

function page() {
  return (
    <div className='bg-[#F7FBFB] '>
     <div className='bg-img  xl:bg-contain'>
       <Navbar/>
      <Section1/>
      <div className='mt-10 lg:mt-32'>
      <Section2/>
      </div>
     </div>
      <div className='bg-image bg-cover  xl:bg-contain 2xl:bg-cover'>
      <Section3/>
      </div>
      <Section4/>
      <div className='mt-10 lg:mt-32'>
      <Section5/>
      </div>
      
    </div>
  )
}

export default page