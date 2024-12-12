
import ProgressBar from "../../components/Progressbar";
import Animation from "../../../../smallcomponents/Animation";
import { useState } from "react";

const LevelForm = () => {
  const [toogleFeedback, setToogleFeedback] = useState(false);

  return (
    <div>
      <div className="m-4 sm:m-5">
        <ProgressBar precentage={100} />
      </div>

      <div className="flex flex-col items-start sm:p-6 md:p-8 min-h-screen">
        <div>
          <div className="flex flex-col items-start w-full max-w-4xl mx-auto mb-4 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Level
            </h1>
            <span className="text-gray-400 text-sm sm:text-base">
              Add your level here...
            </span>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 sm:p-6 md:p-8 w-full mx-auto mb-3">
          <form className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                <span className="text-red-500">*</span> Level
              </label>
              <select className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base">
                <option>Development</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                <span className="text-red-500">*</span> Duration
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base"
                placeholder="11hrs 32 mins"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                <span className="text-red-500">*</span> Certification
              </label>
              <select className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="flex flex-col mb-5">
              <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                <span className="text-red-500">*</span> Upload your quizzes here
              </label>
              <div className="flex items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
                <label htmlFor={`quiz-upload`} className="flex-1 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <input type="file" id={`quiz-upload`} className="hidden" />
                    <img
                      src="/galleryimg.png"
                      alt="upload"
                      className="max-h-32 md:max-h-48"
                    />
                  </div>
                  Click to upload your quiz
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="fixed bottom-4 right-4">
          <button
             onClick={() => {
              setToogleFeedback(true)
              setTimeout(()=>(
                setToogleFeedback(false)
              ),3000)
          }}
            className="bg-[#5072F5] px-4 py-2 text-center text-white rounded-lg font-semibold w-[150px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>

      {toogleFeedback && (
        <div className="fixed inset-0  flex items-center  justify-center bg-black bg-opacity-50 ">
          <div className="relative  bg-white  rounded-xl p-0.5 shadow-lg w-full max-w-[370px] ">
          
            <div className="p-4 border-2 border-dashed border-gray-400 m-4 rounded-xl ">
              <h2 className="text-lg font-semibold mb-4">
                <Animation/>
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelForm;
