import { useContext, useEffect } from "react"
import CourseCards from "../components/CourseCards/CourseCards"
import MyContext from "../../../context/context"
import axios from "axios";

const MyCourses = () => {
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
    <div>
        <div className="border-2 w-full m-8">
                    <h1>Nav bar</h1>
        </div >
        <div className=" flex justify-start">
            <h1 className=" font-semibold text-3xl text-[##161439]">
                My Courses
            </h1>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-2 " > 
            {
        courses.map((course,id)=>(
                 
                    <CourseCards  key={id} course={course}/>
        ))
        }
       </div>
    </div>
  )
}

export default MyCourses