import  { useState } from 'react'

const FiltersCard = () => {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "Datascience",
    "Artificial Intelligence",
    "Machine learning",
    "Mobile App develop",
    "UI&UX",
    "Linux",
  ];

  const displayedCategories = showMore ? categories : categories.slice(0, 5);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Category</h2>
      <div className="flex flex-col gap-2">
        {displayedCategories.map((category, index) => (
          <label key={index} className="flex items-center text-gray-700 text-lg">
            <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500" />
            {category}
          </label>
        ))}
      </div>
      <button 
        className="text-blue-500 mt-4  focus:outline-none text-lg" 
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less -" : "Show More +"}
      </button>
    </div>
  );
};



export default FiltersCard