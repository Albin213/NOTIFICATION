"use client";
import React, { useEffect, useRef, useState } from "react";

function Section5() {
  const divRefs = useRef([]); // Reference for all divs
  const [visible, setVisible] = useState(new Set()); // Using Set to track visible divs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = divRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !visible.has(index)) {
            setTimeout(() => {
              setVisible((prev) => new Set(prev).add(index));
            }, index * 300); // Delay effect per index
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
    <div className=" w-full bg-[#05525F]">
      {/* Header */}
     <div className="px-4 sm:px-[30px] lg:px-[74px] pt-20 2xl:pb-40  section5-bg">
     <h1 className="font-normal text-[30px] sm:text-[40px] lg:text-[50px] text-white text-center jomolhari-regular">
      Mobile App Development
      </h1>
      <h1 className="text-[26px] sm:text-[36px] poppins-regular text-white mt-12">Build Powerful & Scalable Mobile Applications</h1>
      <p className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-white leading-10 pt-4 md:pt-8  poppins-regular sm:text-justify capitalize">
      apttiv specializes in developing high-quality mobile applications tailored to your buisness needs. whether you need a customer-facing app, an internal enterprise solution,
       or an interactive kiosk-based app, we provide full-cycle development from design to deployment.
      </p>
     </div>

     <div className="py-20 section5-bg px-4 sm:px-[30px] lg:px-[74px] section5-bg-img">
         {/* Services Grid */}
      <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] text-white font-normal text-center">Our Expertise</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 pt-16 poppins-regular">
        {/* Service 1 */}
        <div
          ref={(el) => (divRefs.current[0] = el)}
          className={`font-normal text-[20px] sm:text-[28px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Cross-platform
            <br/>Development</h1>
        </div>

        {/* Service 2 */}
        <div
          ref={(el) => (divRefs.current[1] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Native App <br/> Development</h1>
        </div>

        {/* Service 3 */}
        <div
          ref={(el) => (divRefs.current[2] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Backend &<br/> API<br/> Development</h1>
        </div>

        {/* Service 4 */}
        <div
          ref={(el) => (divRefs.current[3] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>UI/UX Design</h1>
        </div>

        {/* Service 5 */}
        <div
          ref={(el) => (divRefs.current[4] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Integration
           <br/>Services</h1>
        </div>

        {/* Service 6 */}
        <div
          ref={(el) => (divRefs.current[5] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#023347] bg-gradient-to-r from-[#89C0C9] via-[#E9F2F4] to-[#EBF4F5] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Kiosk & 
          <br/> Tablet Apps</h1>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Section5;
