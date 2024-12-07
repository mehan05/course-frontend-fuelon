import React, { useState } from "react";

const FeedBackCard = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [suggestion, setSuggestion] = useState("");



  const tags = ["Payment Issue", "Refund Policy", "Surprise me"];

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border-2 border-dashed border-blue-200 font-poppins sm:max-w-sm">
     

      <h2 className="text-center text-lg font-semibold mb-4">
        Chat With FuelOn Chatbot
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(index)}
            className={`px-4 py-2 text-sm rounded-lg transition-all ${
              selectedTag === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <textarea
        className="w-full p-3 border rounded-lg mb-4 text-sm text-gray-700 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="May I Help You"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />

      <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Send
      </button>
    </div>
  );
};

export default FeedBackCard;
