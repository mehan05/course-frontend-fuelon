import React, { useState } from 'react';
import ModuleBar from './components/ModuleBar';

const Modules = () => {
  const [modules, setModules] = useState([]);

  const [newModuleTitle, setNewModuleTitle] = useState("");

  const handleAddModule = () => {
    setModules([
      ...modules,
      {
        title: newModuleTitle,
        description: "",
        cost: "",
        video: "",
        quiz: [],
      },
    ]);
    setNewModuleTitle("");
  };

  const handleModuleChange = (event, index, field) => {
    const newModules = [...modules];
    newModules[index][field] = event.target.value;
    setModules(newModules);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Modules</h1>
        <span className="text-gray-400">Add Your Modules here...</span>
      </div>
      <div className="border-2 border-gray-600 rounded-md p-1 w-full max-w-4xl mx-auto mb-3">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter module title..."
            className="flex-1 border-none outline-none p-2"
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
          />
          <button onClick={handleAddModule} className="bg-gray-300 hover:bg-violet-500 font-bold py-2 px-4 rounded-md text-black text-xl">
            <img src="/plusicon.png" className="w-5 h-5" alt="Add Module" />
          </button>
        </div>
      </div>
        {
          modules.length?
          <div className="w-full max-w-4xl">
            <ModuleBar modules={modules} handleModuleChange={handleModuleChange} />
          </div>
          :<div></div>
        }
    </div>
  );
}

export default Modules;
