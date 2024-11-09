import { Route, Routes } from 'react-router-dom'
import Login from '../common/login/Login'
import MyCourses from './MyCourses/MyCourses'
import NewCourse from './NewCourse/NewCourse'
import CoursDetails from './NewCourse/CourseDetails/course_1/CoursDetails'
import Modules from './NewCourse/CourseDetails/modules/Modules'
import Level from './NewCourse/CourseDetails/Level/Level'
const Trainee = () => {
  return (

    <div>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/trainne/mycourses' element={<MyCourses/>}/> 
        <Route path="/trainee/newcourse" element={<NewCourse/>}>
              <Route path='course_1' element={<CoursDetails/>}/>
              <Route path='course_1/modules' element={<Modules/>}/>
              <Route path='course_1/modules/levels' element={<Level/>}/>
        </Route>
    </Routes>
          
    </div>
  )
}

export default Trainee