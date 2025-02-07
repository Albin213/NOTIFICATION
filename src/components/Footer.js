import React from 'react'

function Footer() {
  return (
    <div className='py-20 relative bg-white'>
      {/* <img src="/footerone.svg" alt="" className='absolute left-0 -top-6' />
      <img src="/footertwo.svg" alt="" className='absolute right-0 -bottom-4' /> */}

        <h1 className='text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[34px] text-[#222020] jomolhari-regular text-center px-12 sm:px-24'>“GET IN TOUCH WITH OUR EXPERTS”</h1>


        <div className='w-full grid md:grid-cols-2 gap-y-16 lg:gap-y-0 lg:grid-cols-4 px-4 sm:px-[30px] lg:px-[74px] pt-16 xl:pt-28'>
          <div>
            <h1 className='text-[#023347] text-[18px] xl:text-[26px] poppins-regular'>Apttiv LLC</h1>
            <p className='text-[16px] xl:text-[18px] leading-[27px] text-black pt-6 pe-10 2xl:pe-24'>Innovative solutions in PI System Consulting, Database Services, Web & Mobile App Development.
            Helping businesses optimize performance with technology-driven solutions.</p>
          </div>
          <div>
            <h1 className='text-[#023347] text-[18px] xl:text-[26px] poppins-regular'>services</h1>
            <p className=' text-[16px] xl:text-[18px] leading-3 text-black pt-6'>PI System Consulting</p>
            <p className=' text-[16px] xl:text-[18px] leading-3  text-black pt-6'>Database Administration</p>
            <p className=' text-[16px] xl:text-[18px] leading-3 text-black pt-6'>Web Development</p>
            <p className=' text-[16px] xl:text-[18px] leading-3 text-black pt-6'>Mobile App Development</p>

          </div>
          <div className='lg:border-l-2 border-[#023347] lg:ps-6'>
            <h1 className='text-[#023347] text-[18px] xl:text-[26px] poppins-regular'>Company</h1>
            <p className='text-[16px] xl:text-[18px] leading-3 text-black pt-6'>PI System Consulting</p>
            <p className='text-[16px] xl:text-[18px] leading-3  text-black pt-6'>Database Administration</p>
          </div>
         <div>
         <div className='flex gap-4  items-center pb-4 pt-2' >
            <img src="/location.svg" alt="" className='size-5' />
            <p className='text-[14px] xl:text-[16px] text-[#023347]'>Location : Texas, USA</p>
          </div>
          <div className='flex gap-4  items-center'>
            <img src="/email.svg" alt="" className='size-5' />
            <p className='text-[14px] xl:text-[16px] text-[#023347]'>Email: contact@apttiv.com</p>
          </div>
         </div>


        </div>
    </div>
  )
}

export default Footer