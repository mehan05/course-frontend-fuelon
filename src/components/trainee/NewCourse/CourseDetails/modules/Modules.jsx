<<<<<<< HEAD
import React, { useState } from 'react';
import ModuleForm from './components/ModuleForm';
import ModuleBar from './components/ModuleBar';

const Modules = () => {
  const [modules, setModules] = useState([
    {
      moduleName: "",
      description: "",
      costOfModule: "",
      videoPath: "",
      quizzes: [],
    },
  ]);

  const handleAddModule = () => {
    setModules([...modules, {
      moduleName: "",
      description: "",
      costOfModule: "",
      videopath: "",
      quizzes: [],
    }]);
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
            placeholder="Add your modules Here..."
            className="flex-1 border-none outline-none p-2"
          />
          <button onClick={handleAddModule} className="bg-gray-300 hover:bg-violet-500 font-bold py-2 px-4 rounded-md text-black text-xl">
            <img src="/plusicon.png" className="w-5 h-5" alt="" />
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <ModuleBar modules={modules} onModuleChange={handleModuleChange} />
      </div>
    </div>
  );
}

export default Modules;
=======
import React from 'react'
import ModuleForm from './components/ModuleForm'


const Modules = () => {

  return (
    <div className='flex flex-col items-center'>
        <div className="flex flex-col items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Modules</h1>
            <span className="text-gray-400">Add Your Modules here...</span>
      </div>
      <div className=" border-2 border-gray-600 rounded-md p-1 w-full max-w-4xl mx-auto mb-3">
        <div className="flex items-center">
          <input
            type="text" 
            placeholder="Add your modules Here..."
            className="flex-1 border-none outline-none p-2"
          />
          <button className="bg-gray-300 hover:bg-violet-500  font-bold py-2 px-4 rounded-md text-black text-xl"><img src="/plusicon.png" className='w-5 h-5' alt="" /></button>
        </div>
      </div>
        <div className='w-full max-w-4xl'>

            <ModuleForm/>
        </div>
    </div>
  )
}

export default Modules
>>>>>>> 7e6c25ea1be3c0d54cd83b83ced373dee37e1ebd
