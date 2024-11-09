import React from 'react'
import { Outlet } from 'react-router-dom'
const NewCourse = () => {
  return (
    <div>
            <div className="border-2 w-full m-8">
                    <h1>Nav bar</h1>
            </div >
            <div>
                <Outlet/>
            </div>
    </div>
  )
}

export default NewCourse