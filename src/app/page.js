import React from 'react'
import Section1 from '../components/homepage/Section1'
import Section2 from '../components/homepage/Section2'
import Section3 from '../components/homepage/Section3'
import Section4 from '../components/homepage/Section4'
import Section5 from '../components/homepage/Section5'



function page() {
  return (
    <div className='bg-[#F7FBFB] w-full h-full relative'>


     <div className='bg-img  xl:bg-contain'>

    
      <Section1/>
      <div className='mt-10 lg:mt-32'>
      <Section2/>
      </div>
     </div>
      <div className='bg-image bg-cover  xl:bg-contain 2xl:bg-cover'>
      <Section3/>
      </div>
      <Section4/>
      <div className=''>
      <Section5/>
      </div>
    

    </div>
  )
}

export default page

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Section1 from '../components/homepage/Section1';
// import Section2 from '../components/homepage/Section2';
// import Section3 from '../components/homepage/Section3';
// import Section4 from '../components/homepage/Section4';
// import Section5 from '../components/homepage/Section5';
// import Footer from '@/components/Footer';
// import ContactUs from '@/components/ContactUs';

// function Page() {
//   return (
//     <div className='bg-[#F7FBFB] w-full h-full relative'>

//       {/* Absolute div at the top-left corner */}
//       <div className="w-screen h-screen fixed top-0 left-0  bg-[#0000009c] flex justify-center items-center z-50">
//         <ContactUs/>
//       </div>

//       <div className='bg-img xl:bg-contain'>
//         <Navbar />
//         <Section1 />
//         <div className='mt-10 lg:mt-32'>
//           <Section2 />
//         </div>
//       </div>

//       <div className='bg-image bg-cover xl:bg-contain 2xl:bg-cover'>
//         <Section3 />
//       </div>

//       <Section4 />
//       <div>
//         <Section5 />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Page;

// "use client";
// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Section1 from "../components/homepage/Section1";
// import Section2 from "../components/homepage/Section2";
// import Section3 from "../components/homepage/Section3";
// import Section4 from "../components/homepage/Section4";
// import Section5 from "../components/homepage/Section5";
// import Footer from "@/components/Footer";
// import ContactUsPopUp from "@/components/ContactUsPopUp";

// function Page() {
//   const [showPopup, setShowPopup] = useState(false);

//   const openPopup = () => {
//     setShowPopup(true);
//     document.body.style.overflow = "hidden"; // Disable scrolling when popup is open
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     document.body.style.overflow = "auto"; // Enable scrolling when popup closes
//   };

//   return (
//     <div className="bg-[#F7FBFB] w-full h-full relative">
//       {/* Contact Popup */}
//       {showPopup && (
//         <div
//           className="w-full h-full fixed top-0 left-0 backdrop-blur-sm bg-[#0000002a] flex justify-center items-center z-50"
//           onClick={closePopup} // Close when clicking outside
//         >
//           <div
//             className="relative  rounded-lg shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-0 sm:top-3 right-5 sm:right-3  rotate-45 text-5xl sm:text-7xl text-gray-400 hover:text-gray-600"
//               onClick={closePopup}
//             >
//               +
//             </button>
//             <ContactUsPopUp/>
//           </div>
//         </div>
//       )}

//       <div className="bg-img xl:bg-contain">
//         <Navbar openPopup={openPopup} />
//         <Section1 />
//         <div className="mt-10 lg:mt-32">
//           <Section2 />
//         </div>
//       </div>

//       <div className="bg-image bg-cover xl:bg-contain 2xl:bg-cover">
//         <Section3 />
//       </div>

//       <Section4 />
//       <div>
//         <Section5 />
//       </div>

//       <Footer openPopup={openPopup} />
//     </div>
//   );
// }

// export default Page;
