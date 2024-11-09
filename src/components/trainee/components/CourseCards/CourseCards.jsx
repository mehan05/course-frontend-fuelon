/* eslint-disable react/prop-types */

const CourseCards = ({course}) => {
  return (
    <div className="m-5">
        <div  className="border-2 rounded-xl max-w-[300px] h-[400px] p-4  hover:transition-transform hover:scale-105 hover:duration-400 ">
              <div className="">
                <img src="/courseImage.png" alt="image" />
              </div>
              <div className="mt-3 flex justify-between text-center" >
                    <div className="border-2 p-1 rounded-xl  bg-slate-400 w-28">
                          <p>{course.courseType}</p>
                    </div>
                    <div className=""> 
                          <p>⭐({course.ratings})</p>
                    </div>
              </div>

              <div className="mt-5 ">
                  <div className="flex justify-start "  >
                    <h1 className="font-bold text-2xl">{course.courseName}</h1>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <p><span className="text-gray-500">By</span>  {course.courseAuthor}</p>
                    <p className="text-[#5751E1] text-2xl font-semibold">$ {course.price}</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default CourseCards