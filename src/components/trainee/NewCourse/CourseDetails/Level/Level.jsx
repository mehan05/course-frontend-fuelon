import React from 'react';
import { Link } from 'react-router-dom';

const LevelForm = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 min-h-screen">
      <div className="flex flex-col items-start w-full max-w-xl mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-1">Level</h1>
        <span className="text-gray-400 text-sm md:text-base">Add your level here...</span>
      </div>

      <div className="border border-gray-300 rounded-md p-4 md:p-6 w-full  mx-auto mb-3">
        <form className="space-y-4 md:space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm md:text-base mb-1">
              <span className="text-red-500">*</span> Level
            </label>
            <select className="border border-gray-300 rounded-md p-2 outline-none text-sm md:text-base">
              <option>Development</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm md:text-base mb-1">
              <span className="text-red-500">*</span> Duration
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 outline-none text-sm md:text-base"
              placeholder="11hrs 32 mins"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm md:text-base mb-1">
              <span className="text-red-500">*</span> Certification
            </label>
            <select className="border border-gray-300 rounded-md p-2 outline-none text-sm md:text-base">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </form>
      </div>

      <div className="fixed bottom-12 right-9">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md text-sm md:text-xl">
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default LevelForm;
