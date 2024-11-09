import React from 'react';

<<<<<<< HEAD
function ModuleForm({ handleAddModule, handleModuleChange, index, module }) {
  return (
    <div className="bg-gray-200 border-violet-500 border-2 shadow-md rounded-md p-4 w-full">
      <div className="space-y-4">
        
        <div className="flex gap-5">
          <label htmlFor={`module-title-${index}`} className="text-gray-700 w-40">
            Title of the module:
          </label>
          <input
            type="text"
            id={`module-title-${index}`}
            placeholder="What is Laravel?"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={module.title || ""}
            onChange={(e) => handleModuleChange(e, index, 'title')}
          />
        </div>
        
        <div className="flex gap-5">
          <label htmlFor={`module-cost-${index}`} className="text-gray-700 w-40">
            Cost of the module:
          </label>
          <input
            type="text"
            id={`module-cost-${index}`}
            placeholder="$15"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={module.cost || ""}
            onChange={(e) => handleModuleChange(e, index, 'cost')}
          />
        </div>
        
        <div className="flex gap-5">
          <label htmlFor={`module-description-${index}`} className="text-gray-700 w-40">
            Description for Module:
          </label>
          <textarea
            id={`module-description-${index}`}
            placeholder="In this lesson, we will discuss Laravel."
            className="border border-gray-300 rounded-md p-2 h-24 w-full"
            value={module.description || ""}
            onChange={(e) => handleModuleChange(e, index, 'description')}
          />
        </div>

        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your video here:</label>
          <div className="flex items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor={`video-upload-${index}`} className="flex-1 cursor-pointer">
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  id={`video-upload-${index}`}
                  className="hidden"
                  onChange={(e) => handleModuleChange(e, index, 'video')}
                />
                <img src="/galleryimg.png" alt="upload" className="max-h-32 md:max-h-48" />
              </div>
              Click to upload your video
            </label>
          </div>
        </div>

        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your Quizzes here:</label>
          <div className="flex items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor={`quiz-upload-${index}`} className="flex-1 cursor-pointer">
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  id={`quiz-upload-${index}`}
                  className="hidden"
                  onChange={(e) => handleModuleChange(e, index, 'quiz')}
                />
                <img src="/galleryimg.png" alt="upload" className="max-h-32 md:max-h-48" />
              </div>
              Click to upload your quiz
            </label>
          </div>
        </div>

        <div className="text-right mt-4">
          <button
            onClick={() => handleAddModule(index)}
            className="bg-violet-500 text-white px-4 py-2 rounded-md shadow hover:bg-violet-600"
          >
            Add Module
          </button>
=======
function ModuleForm() {
  return (
    <div className="bg-gray-200 border-violet-500 border-2 shadow-md rounded-md p-4 w-full">
      <div className="space-y-4">
        <div className="flex gap-5">
          <label htmlFor="module-title" className="text-gray-700 w-40">Title of the module:</label>
          <input type="text" id="module-title" placeholder="What is Laravel?" className="border-none border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="flex gap-5">
          <label htmlFor="module-cost" className="text-gray-700 w-40">Cost of the module:</label>
          <input type="text" id="module-cost" placeholder="$15" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="flex gap-5">
          <label htmlFor="module-description" className="text-gray-700 w-40">Description for Module:</label>
          <textarea id="module-description" placeholder="In this lesson we will discussion about Laravel" className="border border-gray-300 rounded-md p-2 h-24 w-full" />
        </div>
        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your video here:</label>
          <div className="flex  items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor="video-upload" className="flex-1 cursor-pointer">
              <div className='flex justify-center items-center'>
            <input type="file" id="video-upload" className="hidden" />
            <img src="/galleryimg.png" alt="img" className="max-h-32 md:max-h-48" />
              </div>
            Click to upload your videos</label>

          </div>
        </div>
        <div className='flex gap-5'>
        <label className="text-gray-700 w-40">Upload your Quizzes here:</label>

          <div className="flex  items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
              <label htmlFor="video-upload" className="flex-1 cursor-pointer">
                <div className='flex justify-center items-center'>
              <input type="file" id="video-upload" className="hidden" />
              <img src="/galleryimg.png" alt="img" className="max-h-32 md:max-h-48" />
                </div>
              Click to upload your videos</label>

            </div>
>>>>>>> 7e6c25ea1be3c0d54cd83b83ced373dee37e1ebd
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ModuleForm;
=======
export default ModuleForm;
>>>>>>> 7e6c25ea1be3c0d54cd83b83ced373dee37e1ebd
