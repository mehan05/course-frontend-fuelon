import React from 'react'

const LanguageFilterCard = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Language</h2>
          <div className="flex flex-col gap-2">
            {["Tamil", "English", "Hindi"].map((language, index) => (
              <label key={index} className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500" />
                {language}
              </label>
            ))}
          </div>
        </div>
      );
    };


export default LanguageFilterCard