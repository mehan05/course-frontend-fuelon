import React, { useContext } from 'react'
import StudentNavBar from '../components/SrudentNavbar/StudentNavBar'
import CourseCards from '../../trainee/components/CourseCards/CourseCards'
import MyContext from '../../../context/context';

const TestPage = () => {
    const {courses} = useContext(MyContext);
    console.log(courses) 
  return (
    <div className=" m-2">

    <div className="  mb-8">
                <StudentNavBar/>
    </div >
            

    <div className='pl-5 pr-5'>
      
            <h1 className='text-[#161439] text-2xl font-bold'>Access YourSelf</h1>
            <p className='text-gray-700'>Complete the test now</p>

            <div className='flex gap-5'>
                <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-2 " > 
                {
                  courses.map((course,id)=>(
                              <CourseCards  key={id} course={course}/>
                  ))
                }
            </div>
    </div>

        </div>


</div>
  )
}

export default TestPage