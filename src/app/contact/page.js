// import Navbar from '@/components/Navbar'

// import React from 'react'

// function page() {
//   return (
//     <div className='bg-[#05525F] '>
//         <Navbar/>
        
//     </div>
//   )
// }

// export default page


"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";

function Page() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <div className="bg-[#05525F] min-h-screen">
      {/* Pass openPopup function to Navbar */}
      <Navbar openPopup={openPopup} />

      {/* Contact Popup */}
      {showPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#0000009c] flex justify-center items-center z-50"
          onClick={closePopup} // Close when clicking outside
        >
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              ✖
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
