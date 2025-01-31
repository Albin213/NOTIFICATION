import React from 'react'

function Section1() {
  return (
    <div className='relative flex flex-col lg:flex-row px-4 sm:px-[30px] lg:px-[74px] pt-14'>
        {/* <img src="vector 8.png" alt="" className='absolute left-[550px] -top-5 '  /> */}
        {/* <img src="vector 8.png" alt="" className='absolute left-[850px] -top-5 '  /> */}
        <div className='w-full lg:w-[60%] xl:w-[73%] '>
        <h1 className='font-normal text-[44px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] text-[#201E1E] jomolhari-regular'>
        Empowering Your<br/>
        Data With 
        </h1>
        <h1 className='font-normal text-[44px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] text-[#05525F] jomolhari-regular'>
        Precision & Insight
        </h1>
        <p className='text-[#222020] font-normal text-[24px] 2xl:text-[30px]  leading-8 2xl:leading-10 pt-8 sm:me-24 xl:me-64 poppins-regular'>Ready To Enhance Your Data Infrastructure With PI System Consulting Or Database Services? 
            <span className='font-bold'>&nbsp; Reach Out To Apttiv &nbsp;</span>
             Learn How We Can Support Your Data Needs.</p>
        </div> 
        <div className='w-full lg:w-[40%] xl:w-[27%] mt-16 lg:mt-0 '>
        <h1 className='font-normal text-[30px] xl:text-[34px] 2xl:text-[40px] text-[#05525F] pb-5 text-center jomolhari-regular'>
        Service Offerings</h1>
        <div className='text-white text-[20px]  lg:text-[24px] 2xl:text-[30px] font-medium p-16 flex justify-center items-center text-center rounded-3xl bg-[#05525F] poppins-regular'>
        PI System <br/>
        Consulting
        </div>
        <div className='text-white text-[20px] lg:text-[24px] 2xl:text-[30px]  font-medium p-16 flex justify-center items-center text-center rounded-3xl bg-[#2A8E9E] mt-4 poppins-regular'>
        Database System <br/>
        Consulting
        </div>

        </div>

    </div>
  )
}

export default Section1


// import React from 'react';

// function Section1() {
//   return (
//     <div 
//       className="relative flex flex-col lg:flex-row px-[30px] lg:px-[74px] pt-14 bg-no-repeat bg-contain"
//       style={{ 
//         backgroundImage: "url('vector 8.png'), url('vector 8.png')", 
//         backgroundPosition: "550px -8px, 850px -12px"
//       }}
//     >
//       {/* Text Section */}
//       <div className='w-full lg:w-[60%] xl:w-[73%]'>
//         <h1 className='font-normal text-[44px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] text-[#201E1E]'>
//           Empowering Your<br />
//           Data With
//         </h1>
//         <h1 className='font-normal text-[44px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] text-[#05525F]'>
//           Precision & Insight
//         </h1>
//         <p className='text-[#222020] font-normal text-[24px] 2xl:text-[30px] leading-8 2xl:leading-10 pt-8 me-24 xl:me-64'>
//           Ready To Enhance Your Data Infrastructure With PI System Consulting Or Database Services?
//           <span className='font-bold'>&nbsp; Reach Out To Apttiv &nbsp;</span>
//           Learn How We Can Support Your Data Needs.
//         </p>
//       </div>

//       {/* Service Offerings */}
//       <div className='w-full lg:w-[40%] xl:w-[27%] mt-16 lg:mt-0 relative z-10'>
//         <h1 className='font-normal text-[30px] xl:text-[34px] 2xl:text-[40px] text-[#05525F] pb-5 text-center'>
//           Service Offerings
//         </h1>

//         <div className='text-white text-[20px] lg:text-[24px] 2xl:text-[30px] font-medium p-16 flex justify-center items-center text-center rounded-3xl bg-[#05525F] relative z-10'>
//           PI System <br />
//           Consulting
//         </div>
//         <div className='text-white text-[20px] lg:text-[24px] 2xl:text-[30px] font-medium p-16 flex justify-center items-center text-center rounded-3xl bg-[#2A8E9E] mt-4 relative z-10'>
//           Database System <br />
//           Consulting
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section1;
