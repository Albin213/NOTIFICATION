import React from 'react'

function Section1() {
  return (
    <div className=''>
        <h1 className='text-[50px] text-[#023347] text-center py-16'>Services Offering</h1>

        <div className='grid grid-cols-3 w-full gap-6'>
          <div className='w-full h-[234px] bg-[#E9F2F4]  shadow-xl p-5 flex justify-center items-center text-[26px] relative rounded-3xl' >
            <img src="/one.png" alt="" className='absolute left-12 top-10 '/>
          PI System <br/>
          Consulting
          </div>
          <div className='w-full h-[234px] bg-[#E9F2F4]  shadow-xl p-5 flex justify-center items-center text-center text-[26px] relative rounded-3xl' >
            <img src="/two.png" alt="" className='absolute left-12 top-10 '/>
            Database System
             <br/>
          Consulting
          </div><div className='w-full h-[234px] bg-[#E9F2F4]  shadow-xl p-5 flex justify-center items-center text-[26px] relative rounded-3xl' >
            <img src="/three.png" alt="" className='absolute left-12 top-10 '/>
            Mobile App
             <br/>
            Development
          </div>
        </div>
    </div>
  )
}

export default Section1