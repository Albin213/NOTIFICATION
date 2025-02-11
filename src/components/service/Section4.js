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
       <h1 className="font-normal text-[30px] sm:text-[40px] xl:text-[50px] text-white sm:text-center pb-6 sm:pb-12 jomolhari-regular">
         Database Service Page
       </h1>
       <p className="text-white font-normal text-[20px] sm:text-[26px] xl:text-[30px] sm:leading-[45px] poppins-regular md:text-justify capitalize">
         Our additional database services provide critical support for businesses needing secure,
         optimized, and accessible data. From SQL administration to advanced troubleshooting, 
         we offer solutions that keep your database efficient.
       </p>
 
       {/* Subheading */}
       <h1 className="pt-16 sm:pt-28 text-[28px] sm:text-[30px] xl:text-[40px] text-white text-center pb-16 jomolhari-regular">
         Key Database Offering
       </h1>
 
       {/* Services Grid */}
       <div className="grid grid-cols-1 gap-y-6 poppins-regular">
         <div
           ref={(el) => (divRefs.current[0] = el)}
           className={`bg-[#0B3A4F] relative transition-all h-[210px] sm:h-[190px] py-6 sm:py-8 md:py-10 duration-700 ease-out transform ${
             visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           }`}
         >
           <img src="one.png" alt="" className="absolute left-4 sm:left-8 lg:left-10 top-4 sm:top-8 size-8 sm:size-auto" />
           <p className="text-white text-[24px] xl:text-[28px] pl-14 sm:px-20 rounded-[7px]">
             Database Administration
           </p>
           <p className="capitalize text-[20px] sm:text-[22px] xl:text-[24px] text-[#F5F9FA] pl-14 sm:pl-20 pr-4 md:px-20 pt-4 lg:pt-8 xl:pt-10 ">daily monitoring and management of SQL and other database</p>
         </div>
 
         <div
           ref={(el) => (divRefs.current[0] = el)}
           className={`bg-[#0B3A4F] relative transition-all h-[210px] sm:h-[190px] py-6 sm:py-8 md:py-10 duration-700 ease-out transform ${
             visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           }`}
         >
           <img src="two.png" alt="" className="absolute left-4 sm:left-8 lg:left-10 top-4 sm:top-8 size-8 sm:size-auto" />
           <p className="text-white text-[24px] xl:text-[28px] pl-14 sm:px-20 rounded-[7px]">
           Optimization Services
           </p>
           <p className="capitalize text-[20px] sm:text-[22px] xl:text-[24px] text-[#F5F9FA] pl-14 sm:pl-20 pr-4 md:px-20 pt-4 lg:pt-8 xl:pt-10 ">database turning to improve response times and minimize downtime.</p>

         </div>
 
         <div
           ref={(el) => (divRefs.current[0] = el)}
           className={`bg-[#0B3A4F] relative transition-all h-[210px] sm:h-[190px] py-6 sm:py-8 md:py-10 duration-700 ease-out transform ${
             visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           }`}
         >
           <img src="three.png" alt="" className="absolute left-4 sm:left-8 lg:left-10 top-4 sm:top-8 size-8 sm:size-auto" />
           <p className="text-white text-[24px] xl:text-[28px] pl-14 sm:px-20 rounded-[7px]">
           Remote Support
           </p>
           <p className="capitalize text-[20px] sm:text-[22px] xl:text-[24px] text-[#F5F9FA] pl-14 sm:pl-20 pr-4 md:px-20 pt-4 lg:pt-8 xl:pt-10">reliable remote DBA services to support your team anytime, anywhere.</p>

         </div>
       </div>
     </div>
   );
 }
 
export default Section4