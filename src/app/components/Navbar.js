import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[100px] bg-white flex items-center justify-between px-[30px] lg:px-[74px] drop-shadow-md z-50'>
        <div className='font-normal text-[32px] text-[#181717]'>Apttiv</div>
        <div>
            <ul className='text-[24px] font-normal flex gap-10'>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar


