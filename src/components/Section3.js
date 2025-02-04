// "use client"
// import React from "react";
// import React, { useEffect, useRef, useState } from "react";

// function Section3() {
//   const divRefs = useRef([]); // Reference for all divs
//   const [visible, setVisible] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, index) => {
//           if (entry.isIntersecting) {
//             setVisible((prev) => [...prev, index]);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     divRefs.current.forEach((div) => {
//       if (div) observer.observe(div);
//     });

//     return () => {
//       divRefs.current.forEach((div) => {
//         if (div) observer.unobserve(div);
//       });
//     };
//   }, []);

//   const services = [
//     "System Architecture & Design",
//     "Implementation & Configuration",
//     "Troubleshooting & Support",
//     "Performance Optimization",
//     "Training & Knowledge",
//     "Security & Compliance",
//   ];
//   return (
//     <div className="px-4 sm:px-[30px] lg:px-[74px] pt-12 ">
//       <h1 className="font-normal text-[30px] sm:text-[40px] lg:text-[50px] text-[#222020] text-center jomolhari-regular">
//         What Is PI System Consulting?
//       </h1>
//       <p className="text-[22px] sm:text-[26px] lg:text-[28px] font-normal leading-10 pt-8 md:pt-16 sm:px-8 xl:px-0 poppins-regular sm:text-justify capitalize">
//         we know the value of accurate, real-time data in maintaining efficient
//         operation. Our OSI soft PI System consulting services offer customized
//         support across the lifecycle of your PI system, from initial setup and
//         configuration to long-term optimization. with a focus on delivering
//         measurable results, we help companies in energy, manufacturing, and
//         other industrial sectors to make the most of their operational data.
//       </p>

//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 mt-10 sm:mt-40 poppins-regular">
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             System Architecture
//             <br /> & <br /> Design
//           </h1>
//         </div>
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             Implementation <br />
//             &<br />
//             Configuration
//           </h1>
//         </div>
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             Troubleshooting
//             <br />
//             &<br />
//             Support
//           </h1>
//         </div>
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             Performance
//             <br /> Optimization
//           </h1>
//         </div>
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             Training
//             <br /> & <br /> Knowledge
//           </h1>
//         </div>
//         <div className="font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md">
//           <h1>
//             Training <br /> & <br /> Knowledge
//           </h1>
//         </div>
//       </div> */}

//
//       <p className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal leading-10 pt-8 md:pt-16 pb-10 sm:pb-44 poppins-regular sm:text-justify capitalize">
//       Energy, manufacturing, utilities, water treatment, and other data-intensive industries benefit from our PI system expertise.</p>
//     </div>
//   );
// }

// export default Section3;


"use client";
import React, { useEffect, useRef, useState } from "react";

function Section3() {
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
    <div className="px-4 sm:px-[30px] lg:px-[74px] pt-12">
      {/* Header */}
      <h1 className="font-normal text-[30px] sm:text-[40px] lg:text-[50px] text-[#222020] text-center jomolhari-regular">
        What Is PI System Consulting?
      </h1>
      <p className="text-[22px] sm:text-[26px] lg:text-[28px] font-normal leading-10 pt-8 md:pt-16 sm:px-8 xl:px-0 poppins-regular sm:text-justify capitalize">
        We know the value of accurate, real-time data in maintaining efficient
        operation. Our OSIsoft PI System consulting services offer customized
        support across the lifecycle of your PI system, from initial setup and
        configuration to long-term optimization. With a focus on delivering
        measurable results, we help companies in energy, manufacturing, and
        other industrial sectors make the most of their operational data.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 mt-10 sm:mt-40 poppins-regular">
        {/* Service 1 */}
        <div
          ref={(el) => (divRefs.current[0] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>System Architecture <br/>& <br/>Design</h1>
        </div>

        {/* Service 2 */}
        <div
          ref={(el) => (divRefs.current[1] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Implementation<br/> &<br/> Configuration</h1>
        </div>

        {/* Service 3 */}
        <div
          ref={(el) => (divRefs.current[2] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Troubleshooting<br/> &<br/> Support</h1>
        </div>

        {/* Service 4 */}
        <div
          ref={(el) => (divRefs.current[3] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Performance <br/> Optimization</h1>
        </div>

        {/* Service 5 */}
        <div
          ref={(el) => (divRefs.current[4] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Training<br/> & <br/>Knowledge</h1>
        </div>

        {/* Service 6 */}
        <div
          ref={(el) => (divRefs.current[5] = el)}
          className={`font-normal text-[20px] sm:text-[27px] text-[#012333] bg-[#E9F2F4] p-16 text-center rounded-[7px] drop-shadow-md transition-all duration-700 ease-out transform ${
            visible.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>Training<br/> &<br/> Knowledge</h1>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal leading-10 pt-8 md:pt-16 pb-10 sm:pb-44 poppins-regular sm:text-justify capitalize">
        Energy, manufacturing, utilities, water treatment, and other data-intensive industries benefit from our PI system expertise.
      </p>
    </div>
  );
}

export default Section3;
