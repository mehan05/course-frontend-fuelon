/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const CourseCards = ({ course }) => {
  const location = useLocation();
  
  return (
    <div className="m-5">
      <div className="border-2 rounded-xl max-w-[300px] h-auto p-4 hover:transition-transform hover:scale-105 hover:duration-400 max-h-[600px] flex-grow">
        <div className="">
          <img src="/courseImage.png" alt="Course" className="w-full h-32 object-cover rounded-lg" />
        </div>
        
        <div className="mt-3 flex justify-between text-center">
          <div className="border-2 p-1 rounded-xl bg-slate-400 w-28">
            <p>{course.courseType}</p>
          </div>
          <div>
            <p>⭐({course.ratings})</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-start">
            <h1 className="font-bold text-2xl">{course.courseName}</h1>
          </div>
          <div className="flex justify-between items-center mt-5">
            <p>
              <span className="text-gray-500">By</span> {course.courseAuthor}
            </p>
            <p className="text-[#5751E1] text-2xl font-semibold">${course.price}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          {location.pathname.startsWith("/student") && (
            <Link to="modules">
              <img src="/enrollnow_img.png" className="h-10 w-auto object-contain" alt="Enroll Now" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
