/* eslint-disable no-unused-vars */
import  { useContext, useEffect, useState } from 'react';
import MyContext from '../../../../context/context';
import { Link, useNavigate } from 'react-router-dom';
import PopupCard from './components/PopupCard';
import Videojs from '../../components/VideoPlayer/Videojs';

const EnrolledCourse = () => {
  const[courseId,setCourseId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [testWritten, setTestWritten] = useState(false); 
  const[isVideoOpen,setisVideoOpen] = useState(false);
  const [courseState, setCourseState] = useState();
  const { courses } = useContext(MyContext);
  console.log(courses);
  const navigate = useNavigate();
  const handleOpenPopup = (id) => {
    setCourseId(id);
    setIsPopupOpen(true);
  }
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleConfirm = () => {
    console.log("Test taken");
    // setTestWritten(true);  
    navigate(`/student/quiz/quizpage/${courseId}`);
    setIsPopupOpen(false); 
  };

  useEffect(() => {
    if (courses && courses.length > 0) {
      setCourseState(courses);
      console.log("State:", courseState);
    } else {
      console.log("No updatedCourse or courses are empty");
    }
  }, [courses, courseState]);

  const handleCloseVideo = () => {
    setisVideoOpen(false);
  };
  return (
    <div className="max-h-[500px] overflow-y-auto">
      {courses.map((course, id) => (
        <div key={id} className="relative max-h-40 flex border-2 p-5 border-gray-400 rounded-xl mb-2">
          <div className="flex w-full gap-5 shadow-xl">
            <div className="flex-shrink-0  p-2">
              <img src="/courseImage.png" alt="image" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col justify-between w-2/3">
              <div className='flex flex-col gap-4'>
                <h1 className="text-xl font-semibold">
                  {course?.updatedCourse?.courseName ? course.updatedCourse.courseName : course.courseName}
                </h1>
                <p>
                  <span className="text-gray-500 text-sm">By {course?.updatedCourse?.courseAuthor ? course.updatedCourse.courseAuthor : course.courseAuthor}</span>
                </p>
              </div>
            </div>

            <div className="flex pr-10 items-center self-center space-x-3">
             
              {
                testWritten ? (
                  <div>
                  <Link to={`/student/quiz/quizpage/${id}`} className="">
                    <div className='text-blue-500 max-w-36 min-w-24 hover:scale-105  border-2 p-2 rounded-xl border-gray-400 flex justify-center items-center'>
                       Test
                    </div>
                  </Link>
                 
                  </div>
                ) : (
                  <div
                    className='text-red-500 max-w-36 min-w-24 hover:scale-105  border-2 p-2 rounded-xl border-gray-400 flex justify-center items-center'
                    onClick={()=>handleOpenPopup(id)}
                  >
                     Test
                  </div>
                )

              }
              {
                isVideoOpen ?(
                                <div className="fixed inset-0 flex items-center justify-center bg-opacity-100">
                      <div className="">
                      <Videojs onClose={handleCloseVideo} />
                    </div>
                  </div>
                ):(
                  <div className='text-blue-500 max-w-36 min-w-24 hover:scale-105  border-2 p-2 rounded-xl border-gray-400 flex justify-center items-center'>
                    <button onClick={()=>setisVideoOpen(true)} >Video</button>
                  </div>
                )
              }
              <div className="text-blue-500 max-w-36 min-w-24 hover:scale-105 border-2 p-2 rounded-xl border-gray-400 flex justify-center items-center">
                <p className="text-sm font-semibold whitespace-nowrap">Marks: 10/15</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <PopupCard
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default EnrolledCourse;
