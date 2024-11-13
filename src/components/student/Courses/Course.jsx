import React, { useContext, useEffect } from 'react'
import MyContext from '../../../context/context';
import StudentNavBar from '../components/SrudentNavbar/StudentNavBar';
import CourseCards from '../../trainee/components/CourseCards/CourseCards';
import axios from 'axios';
import FiltersCard from '../components/FiltersCard/FiltersCard';
import LanguageFilterCard from '../components/languageFilterCard/LanguageFilterCard';
import PainFilterCard from '../components/PaidFilterCard/PainFilterCard';

const Course = () => {
    const {courses,setCourses} = useContext(MyContext);

    const api = axios.create({
            baseURL:"http://localhost:5000",
            headers:{
                "Content-Type":"application/json",
            }
    })
    const getCourses = async () => {
        try{
            const response = await api.get("/courses");
            setCourses(response.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getCourses();
    },[])
    console.log(courses);
  return (
    <div className=" m-2">
        <div className="  mb-8">
                    <StudentNavBar/>
        </div >
       
       <div className='flex gap-5'>

            <div className='flex flex-col  gap-4 items-center'>
                <div  className='border-2 p-2 shadow-lg'>

                    <FiltersCard/>
                </div>
                <div className='border-2 p-2 shadow-lg'>

                    <LanguageFilterCard/>
                </div>
                <div className='border-2 p-2 shadow-lg'>
                    <PainFilterCard/>

                </div>
            </div>
                <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-2 " > 
                    {
                courses.map((course,id)=>(
                            <CourseCards  key={id} course={course}/>
                ))
                }
            </div>

       </div>

    </div>
  )
}

export default Course