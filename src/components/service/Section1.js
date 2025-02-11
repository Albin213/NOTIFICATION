import React from 'react'

function Section1() {
  return (
    <div className=''>
        <h1 className='text-[30px] sm:text-[40px] xl:text-[50px] text-[#023347] text-center py-16 jomolhari-regular'>Services Offering</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-y-6 lg:gap-y-0 gap-3 lg:gap-6 poppins-regular'>
          <div className='w-full h-[200px] sm:h-[234px] lg:h-[200px] xl:h-[234px] bg-[#E9F2F4]  shadow-xl p-5 text-center flex justify-center items-center text-[20px] sm:text-[26px] lg:text-[20px] xl:text-[26px] relative rounded-3xl' >
            <img src="/one.png" alt="" className='absolute left-12 top-10 sm:size-8 xl:size-auto '/>
          PI System <br/>
          Consulting
          </div>
          <div className='w-full h-[200px] sm:h-[234px] lg:h-[200px] xl:h-[234px] bg-[#E9F2F4]  shadow-xl p-5  text-center flex justify-center items-center text-center text-[20px] sm:text-[26px] lg:text-[20px] xl:text-[26px] relative rounded-3xl' >
            <img src="/two.png" alt="" className='absolute left-12 top-10 size-8 xl:size-auto'/>
            Database System
             <br/>
          Consulting
          </div><div className='w-full h-[200px] sm:h-[234px] lg:h-[200px] xl:h-[234px] bg-[#E9F2F4]  shadow-xl text-center p-5 flex justify-center items-center text-[20px] sm:text-[26px] lg:text-[20px] xl:text-[26px] relative rounded-3xl' >
            <img src="/three.png" alt="" className='absolute left-12 top-10 size-8 xl:size-auto '/>
            Mobile App
             <br/>
            Development
          </div>
        </div>
    </div>
  )
}

export default Section1