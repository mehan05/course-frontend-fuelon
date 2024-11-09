import React from 'react';
import ProgressBar from '../../components/Progressbar';

const CoursDetails = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Course</h1>
        <span className="text-gray-400">Add Your course here...</span>
      </div>
      <div className='mb-5'> 

        <ProgressBar/>
      </div>
      <form className="w-full max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label htmlFor="small-input" className="text-sm font-medium text-gray-900">
            Title of the Course
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6 flex flex-col items-start">
          <label htmlFor="course-type" className="text-sm font-medium text-gray-900">
            Course Type
          </label>
          <select
            name="role"
            id="course-type"
            className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          >
            <option value="trainee">Trainee</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label htmlFor="base-input" className="text-sm font-medium text-gray-900">
            Trainee Name
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label htmlFor="large-input" className="text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6 flex flex-col gap-2 items-start hover:transition hover:ease-in hover:duration-200 hover:scale-[1.01] ">
          <p className="text-sm font-medium text-gray-900">Upload Course Image</p>
          <label htmlFor="image-upload" className="w-full">
            <div className="w-full border-4 border-dashed rounded-lg border-violet-400 p-8 md:p-24 flex justify-center items-center">
              <img src="/galleryimg.png" alt="img" className="max-h-32 md:max-h-48" />
            </div>
          </label>
          <input type="file" id="image-upload" className="hidden" />
        </div>
            <button className='bg-violet-500 p-2 rounded-lg font-semibold w-[100px] min-h-[10px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 hover:duration-300'>
                Next
            </button>
      </form>
    </div>
  );
};

export default CoursDetails;
