import React, { useState } from 'react';

const Chatbot = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const emojis = [
    { id: 1, src: "/emoji1.png", alt: "Happy" },
    { id: 2, src: "/emoji2.png", alt: "Angry" },
    { id: 3, src: "/emoji3.png", alt: "Sad" },
    { id: 4, src: "/emoji4.png", alt: "Love" }
  ];

  const tags = ["Over all service", "Effeciency", "Payment issue"];

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border-2 border-dashed border-blue-200 font-poppins">
      <div className="flex justify-around mb-4">
        {emojis.map(({ id, src, alt }) => (
          <button
            key={id}
            onClick={() => setSelectedEmoji(id)}
            className={`p-2 rounded-full ${selectedEmoji === id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
          >
            <img src={src} alt={alt} className="w-12 h-12" />
          </button>
        ))}
      </div>
      <h2 className="text-center text-lg font-semibold mb-4">Tell Us What Can Be Improve?</h2>
      <div className="flex justify-center gap-2 mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(index)}
            className={`px-3 py-1 text-sm rounded-lg ${selectedTag === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <textarea
        className="w-full p-3 border rounded-lg mb-4 text-sm text-gray-700"
        placeholder="other suggestions..."
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
        Send
      </button>
    </div>
  );
};

export default Chatbot;
