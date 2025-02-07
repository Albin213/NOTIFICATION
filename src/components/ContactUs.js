import React from "react";

function ContactUs() {
  return (
    <div className=" w-full h-full flex justify-center items-center text-white px-4 md:px-0">
      <div className="w-full md:w-[750px] h-[450px] sm:h-[550px] md:h-[620px] bg-[#023347] py-8 pt-12 sm:py-16 rounded-[24px] px-6 sm:px-16">
        <h1 className="text-white text-[28px] sm:text-[38px] text-center">
          Connect With Us
        </h1>
        <div className="flex justify-between mt-7 sm:mt-10 gap-2 sm:gap-5">
          <input
            type="text"
            className="w-full h-[46px] sm:h-[59px] bg-white placeholder:text-[#8F9292] text-[18px] sm:text-[24px] text-black outline-none rounded-lg px-4"
            placeholder="First name"
          />

          <input
            type="text"
            className="w-full h-[46px] sm:h-[59px] bg-white placeholder:text-[#8F9292] text-[18px] sm:text-[24px] text-black outline-none rounded-lg px-4   "
            placeholder="Last name"
          />
        </div>
        <div className="w-full h-[46px] sm:h-[59px] bg-white mt-7 sm:mt-10 rounded-lg  flex items-center px-4">
          <img src="/email2.svg" alt="" className="size-4 sm:size-6" />
          <input
            type="email"
            className="w-full h-[46px] sm:h-[59px] bg-white placeholder:text-[#8F9292] text-[18px] sm:text-[24px] text-black outline-none rounded-lg px-2   "
            placeholder="Email"
          />
        </div>
        <div className="w-full h-[46px] sm:h-[59px] bg-white mt-7 sm:mt-10 rounded-lg  flex items-center px-4">
          <img src="/phone.svg" alt="" className="size-4 sm:size-6" />
          <input
            type="tel"
            className="w-full h-[46px] sm:h-[59px] bg-white placeholder:text-[#8F9292] text-[18px] sm:text-[24px] text-black outline-none rounded-lg px-2   "
            placeholder="Phone number"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white bg-[#2A8E9E] w-full sm:w-[236px] h-[36px] sm:h-[46px] rounded-[10px] text-[20px] sm:text-[28px] mt-10 sm:mt-16 flex justify-center items-center ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
