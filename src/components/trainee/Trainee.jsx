import { Route, Routes } from 'react-router-dom'
import Login from '../common/login/Login'
import MyCourses from './MyCourses/MyCourses'
import NewCourse from './NewCourse/NewCourse'
import CoursDetails from './NewCourse/CourseDetails/course_1/CoursDetails'
import Modules from './NewCourse/CourseDetails/modules/Modules'
import Level from './NewCourse/CourseDetails/Level/Level'
import AdminPage from './AdminPage/AdminPage'
const Trainee = () => {
  return (

    <div className='p-10'>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/trainnee/mycourses' element={<MyCourses/>}/> 
        <Route path="/trainee/newcourse" element={<NewCourse/>}>
              <Route path='course_1' element={<CoursDetails/>}/>
              <Route path='course_1/modules' element={<Modules/>}/>
              <Route path='course_1/modules/levels' element={<Level/>}/>
        </Route>
        <Route path='/trainee/admin' element={<AdminPage/>}/>
    </Routes>
          
    </div>
  )
}

export default Trainee