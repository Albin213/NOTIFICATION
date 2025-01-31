import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'

function page() {
  return (
    <div className='bg-[#F7FBFB]'>
      <Navbar/>
      <Section1/>
      <div className='mt-10 lg:mt-32'>
      <Section2/>
      </div>
      <Section3/>
      <Section4/>
      <div className='mt-10 lg:mt-32'>
      <Section5/>
      </div>
      
    </div>
  )
}

export default page