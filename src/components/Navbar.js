// import React from 'react'

// function Navbar() {
//   return (
//     <div className='w-full h-[100px] bg-white flex items-center justify-between px-[30px] lg:px-[74px] drop-shadow-md z-50'>
//         <div className='font-normal text-[32px] text-[#181717]'>Apttiv</div>
//         <div>
//             <ul className='text-[24px] font-normal flex gap-10'>
//                 <li>About</li>
//                 <li>Service</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar


// "use client";
// import React, { useState } from "react";

// function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//     if (!drawerOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling when drawer is open
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling when closed
//     }
//   };

//   // Navigation items
//   const navItems = ["About", "Service", "Contact"];

//   return (
//     <div className="w-full">
//       {/* Navbar Header */}
//       <div className="w-full h-[100px] bg-white flex items-center justify-between px-[30px] lg:px-[74px] drop-shadow-md z-50">
//         <div className="font-normal text-[32px] text-[#181717] kadwa-regular">Apttiv</div>

//         {/* Navigation Links - Visible on larger screens */}
//         <div className="hidden md:flex ">
//           <ul className="text-[24px] font-normal flex gap-10 jomolhari-regular">
//             {navItems.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Drawer Toggle Button - Visible on smaller screens */}
//         <div className="md:hidden">
//           <button onClick={toggleDrawer} className="text-black text-3xl">
//             {drawerOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Drawer for Small Screens */}
//       <div
//         className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#05525F] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } z-40`}
//       >
//         {/* Close Button */}
//         <button onClick={toggleDrawer} className="text-white text-5xl absolute rotate-45 top-4 right-4">
          
// +
//         </button>

//         {/* Drawer Navigation Links */}
//         <ul className="mt-20 space-y-6 text-[24px] font-normal text-white jomolhari-regular">
//           {navItems.map((item) => (
//             <li key={item} onClick={toggleDrawer} className="cursor-pointer hover:text-gray-500">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay for Drawer */}
//       {drawerOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
//           onClick={toggleDrawer}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



// "use client";
// import React, { useState } from "react";
// import Link from "next/link"; // Use Next.js Link for better navigation

// function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//     if (!drawerOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling when drawer is open
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling when closed
//     }
//   };

//   // Navigation items with links
//   const navItems = [
//     { name: "About", link: "/about" },
//     { name: "Service", link: "/service" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <div className="w-full">
//       {/* Navbar Header */}
//       <div className="w-full h-[100px] bg-white flex items-center justify-between px-4 sm:px-[30px] lg:px-[74px] drop-shadow-md z-50">
//       <Link href={"/"} className="">

//         <div className="font-normal text-[32px] text-[#181717] kadwa-regular cursor-pointer">Apttiv</div>
//         </Link>

//         {/* Navigation Links - Visible on larger screens */}
//         <div className="hidden md:flex">
//           <ul className="text-[24px] font-normal flex gap-10 jomolhari-regular">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link href={item.link} className="hover:text-gray-500">
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Drawer Toggle Button - Visible on smaller screens */}
//         <div className="md:hidden">
//           <button onClick={toggleDrawer} className="text-black text-3xl">
//             {drawerOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Drawer for Small Screens */}
//       <div
//         className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#05525F] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } z-40`}
//       >
//         {/* Close Button */}
//         <button onClick={toggleDrawer} className="text-white text-5xl absolute rotate-45 top-4 right-4">
//           +
//         </button>

//         {/* Drawer Navigation Links */}
//         <ul className="mt-20 space-y-6 text-[24px] font-normal text-white jomolhari-regular">
//           {navItems.map((item) => (
//             <li key={item.name} onClick={toggleDrawer} className="cursor-pointer hover:text-gray-300">
//               <Link href={item.link}>{item.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay for Drawer */}
//       {drawerOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
//           onClick={toggleDrawer}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar({ openPopup }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    document.body.style.overflow = drawerOpen ? "auto" : "hidden"; // Toggle scrolling
  };

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Contact", action: openPopup }, // Call popup function for "Contact"
  ];

  return (
    <div className="w-full">
      <div className="w-full h-[100px] bg-white flex items-center justify-between px-4 sm:px-[30px] lg:px-[74px] drop-shadow-md z-50">
        <Link href={"/"}>
          <div className="font-normal text-[32px] text-[#181717] kadwa-regular cursor-pointer">
            Apttiv
          </div>
        </Link>

        <div className="hidden md:flex">
          <ul className="text-[24px] font-normal flex gap-10 jomolhari-regular">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={item.action || null}
                className={`cursor-pointer hover:text-gray-500 ${item.action ? "text-[#181717]" : ""}`}
              >
                {item.link ? <Link  href={item.link}>{item.name}</Link> : item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-black text-3xl">
            {drawerOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Drawer for Small Screens */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#05525F] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <button onClick={toggleDrawer} className="text-white text-5xl absolute rotate-45 top-4 right-4">
          
        </button>

        <ul className="mt-20 space-y-6 text-[24px] font-normal text-white jomolhari-regular">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                toggleDrawer();
                if (item.action) item.action();
              }}
              className="cursor-pointer hover:text-gray-300"
            >
              {item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
            </li>
          ))}
        </ul>
      </div>

      {drawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
