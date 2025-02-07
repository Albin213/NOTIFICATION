// import React from 'react'

// function Section4() {
//   return (
//     <div className='bg-[#023347] px-4 sm:px-[30px] lg:px-[74px] py-12'>
//         <h1 className='font-normal text-[34px] sm:text-[40px] lg:text-[50px] text-white text-center pb-12 jomolhari-regular'>Database Service Page</h1>
//         <p className='text-white font-normal text-[22px] sm:text-[26px] lg:text-[30px] leading-[45px] poppins-regular sm:text-justify capitalize'>
//             our additional database services provide critical support for buisnesses needing secure,
//              optimized. and accessible data. From SQL administration to advanced trobleshooting, 
//             we offer solutions that keep your database efficiently.</p>
//             <h1 className='pt-28 text-[28px] sm:text-[30px] lg:text-[40px] text-white text-center pb-16 jomolhari-regular'>Key Database Offering</h1>
//             <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-6 poppins-regular'>
//                 <div className='bg-[#0B3A4F] relative'>
//                     <img src="one.png" alt=""  className='absolute left-12 top-8'/>
//                     <p className='text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]'>Database<br/>
//                     Administration</p>

//                 </div>
//                 <div className='bg-[#0B3A4F] relative'>
//                 <img src="two.png" alt=""  className='absolute left-12 top-8'/>

//                     <p className='text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]'>Optimization
//                         <br/>
//                     Services</p>

//                 </div> <div className='bg-[#0B3A4F] relative'>
//                 <img src="three.png" alt=""  className='absolute left-12 top-8'/>

//                     <p className='text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]'>Remote 
//                     <br/>
//                     Support</p>

//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Section4


"use client";
import React, { useEffect, useRef, useState } from "react";

function Section4() {
  const divRefs = useRef([]); // Reference for all divs
  const [visible, setVisible] = useState(new Set()); // Track which divs are visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = divRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !visible.has(index)) {
            setTimeout(() => {
              setVisible((prev) => new Set(prev).add(index));
            }, index * 300); // Delay effect per index (0ms, 300ms, 600ms)
          }
        });
      },
      { threshold: 0.3 }
    );

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div);
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, [visible]);

  return (
    <div className="bg-[#023347] px-4 sm:px-[30px] lg:px-[74px] py-16">
      {/* Header */}
      <h1 className="font-normal text-[34px] sm:text-[40px] lg:text-[50px] text-white text-center pb-12 jomolhari-regular">
        Database Service Page
      </h1>
      <p className="text-white font-normal text-[22px] sm:text-[26px] lg:text-[30px] leading-[45px] poppins-regular sm:text-justify capitalize">
        Our additional database services provide critical support for businesses needing secure,
        optimized, and accessible data. From SQL administration to advanced troubleshooting, 
        we offer solutions that keep your database efficient.
      </p>

      {/* Subheading */}
      <h1 className="pt-28 text-[28px] sm:text-[30px] lg:text-[40px] text-white text-center pb-16 jomolhari-regular">
        Key Database Offering
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-6 poppins-regular">
        <div
          ref={(el) => (divRefs.current[0] = el)}
          className={`bg-[#0B3A4F] relative transition-all duration-700 ease-out transform ${
            visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src="one.png" alt="" className="absolute left-12 top-8" />
          <p className="text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]">
            Database <br /> Administration
          </p>
        </div>

        <div
          ref={(el) => (divRefs.current[1] = el)}
          className={`bg-[#0B3A4F] relative transition-all duration-700 ease-out transform ${
            visible.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src="two.png" alt="" className="absolute left-12 top-8" />
          <p className="text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]">
            Optimization <br /> Services
          </p>
        </div>

        <div
          ref={(el) => (divRefs.current[2] = el)}
          className={`bg-[#0B3A4F] relative transition-all duration-700 ease-out transform ${
            visible.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src="three.png" alt="" className="absolute left-12 top-8" />
          <p className="text-white text-[24px] sm:text-[28px] text-center p-16 sm:p-20 rounded-[7px]">
            Remote <br /> Support
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
