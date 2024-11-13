import React from "react";

const Reminders = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 font-poppins"
      style={{
        border: "2px dashed #D1D5DB", // Dashed border with light gray color
        borderRadius: "12px", // Rounded corners
        padding: "16px", // Space between border and content
        boxSizing: "border-box", // Ensures proper layout alignment
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">Reminders</h2>
        <button className="text-red-500 font-bold text-xl leading-none">X</button>
      </div>

      {/* UI UX Test */}
      <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
        <div className="mr-4 ml-6">
          <img
            src="/uiuxclock.png" // Referencing the image in the public directory
            alt="UI UX Clock Icon"
            className="w-8 h-8" // Size of the icon (adjust as needed)
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-blue-800 font-semibold text-base leading-tight">UI UX</h3>
          <p className="text-gray-600 text-sm leading-snug">Complete your test</p>
        </div>
        <span className="text-blue-800 font-bold text-sm">11:30–12:30</span>
      </div>

      {/* C++ Test */}
      <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
        <div className="mr-4 ml-6"> {/* Added image for C++ section */}
          <img
            src="/c++image.png" // Referencing the C++ image in the public directory
            alt="C++ Icon"
            className="w-8 h-8" // Size of the icon (adjust as needed)
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-red-800 font-semibold text-base leading-tight">C++</h3>
          <p className="text-gray-600 text-sm leading-snug">Complete your test</p>
        </div>
        <span className="text-red-800 font-bold text-sm">9:00–10:00</span>
      </div>

      {/* UI UX for Pro */}
      <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
        <div className="mr-4 ml-6">
          <img
            src="/uiuxclock.png" // Referencing the image in the public directory
            alt="UI UX Clock Icon"
            className="w-8 h-8" // Size of the icon (adjust as needed)
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-blue-800 font-semibold text-base leading-tight">UI UX for Pro</h3>
          <p className="text-gray-600 text-sm leading-snug">Complete your full module</p>
        </div>
        <span className="text-blue-800 font-bold text-sm">11:00–12:00</span>
      </div>

      {/* C-Level Registration */}
      <div className="flex items-center bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <div className="mr-4 ml-6"> {/* Added image for C section */}
          <img
            src="/cimage.png" // Referencing the C image in the public directory
            alt="C Level Icon"
            className="w-8 h-8" // Size of the icon (adjust as needed)
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-yellow-800 font-semibold text-base leading-tight">C-Level</h3>
          <p className="text-gray-600 text-sm leading-snug">Register Latest Course</p>
        </div>
        <button className="text-yellow-800 font-bold text-sm">Register</button>
      </div>
    </div>
  );
};

export default Reminders;
