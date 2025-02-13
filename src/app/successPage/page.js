import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-3 sm:px-0">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg text-center max-w-md">
        <img
          src="/success-icon.png" // Replace with your success icon
          alt="Success"
          className="w-16 h-16 mx-auto"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          Your Email Verified Successfully!
        </h1>
        <p className="text-gray-600 mt-2">Thank you for verifying your email.</p>
        <p className="text-gray-700 font-semibold mt-4">— Apttiv Team</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default page