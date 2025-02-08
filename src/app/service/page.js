

import Section1 from '@/components/service/Section1'
import Section2 from '@/components/service/Section2'
import Section3 from '@/components/service/Section3'
import Section4 from '@/components/service/Section4'
import React from 'react'

function page() {
  return (
    <div >
      <div className='px-36'>
      <Section1/>
       <Section2/>
       <Section3/>
      </div>
       <Section4/>
    </div>
  )
}

export default page