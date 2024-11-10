import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from './Courses/Course'
import Landing from '../common/landing/landing'
import ModulePage from './ModulePage/ModulePage'

const Student = () => {
  return (
    <div>
        <Routes>
          <Route path='home' element={<Landing/>} />
          <Route path='mycourses' element={<Course/>} />
          <Route path='mycourses/modules' element={<ModulePage/>} />
        </Routes>
    </div>
  )
}

export default Student