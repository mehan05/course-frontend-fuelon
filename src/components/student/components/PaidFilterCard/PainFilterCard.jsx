import React from 'react'

const PainFilterCard = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Paid</h2>
          <div className="flex flex-col gap-2">
            {["All", "Paid", "Free"].map((option, index) => (
              <label key={index} className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500" />
                {option}
              </label>
            ))}
          </div>
        </div>
      );
}

export default PainFilterCard