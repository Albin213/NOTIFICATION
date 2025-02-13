// "use client";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactUsPopUp from "@/components/ContactUsPopUp";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



// export default function RootLayout({ children }) {
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
//    <>
      
//         {/* Global Navbar
//         <Navbar openPopup={openPopup} />

//         {/* Page Content */}
//         <main>{children}</main>

//         {/* Global Footer */}
//         <Footer openPopup={openPopup} />

//         {/* Contact Popup */}
//         {showPopup && (
//           <div
//             className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[#0000002a] flex justify-center items-center z-50"
//             onClick={closePopup} // Close when clicking outside
//           >
//             <div
//               className="relative rounded-lg shadow-lg"
//               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//             >
//               <button
//                 className="absolute top-0 sm:top-3 right-8 sm:right-3 rotate-45 text-5xl sm:text-7xl text-gray-400 hover:text-gray-600"
//                 onClick={closePopup}
//               >
//                 +
//               </button>
//               <ContactUsPopUp />
//             </div>
//           </div>
//         )}
//      </> */}
//   );
// }
"use client";
import ContactUsPopUp from '@/components/ContactUsPopUp';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React , { useState } from 'react'

function ApttivLayout({children}) {

    const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when popup is open
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto"; // Enable scrolling when popup closes
  };
  return (
    <>
      
    {/* Global Navbar */}
    <Navbar openPopup={openPopup} />

    {/* Page Content */}
    <main>{children}</main>

    {/* Global Footer */}
    <Footer openPopup={openPopup} />

    {/* Contact Popup */}
    {showPopup && (
      <div
        className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[#0000002a] flex justify-center items-center z-50"
        onClick={closePopup} // Close when clicking outside
      >
        <div
          className="relative rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button
            className="absolute top-0 sm:top-3 right-8 sm:right-3 rotate-45 text-5xl sm:text-7xl text-gray-400 hover:text-gray-600"
            onClick={closePopup}
          >
            +
          </button>
          <ContactUsPopUp />
        </div>
      </div>
    )}
 </>
  )
}

export default ApttivLayout
