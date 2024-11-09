import React from 'react'
import DetailsCard from './components/DetailsCard'
import BestSellingCourse from './components/BestSellingCourse'
import ChartComponents from './components/ChartComponents'

const AdminPage = () => {
  return (
    <div>
            <div className='border-2 border-violet-500 m-5'>
                NavBar
            </div>

            <div className='flex justify-start items-center m-5'>
                <h1 className='font-bold text-[36px] text-[#161439]'>Hello Mehan</h1>
            </div>
            <div className='flex gap-5 justify-between m-5'>
                <div className='m-3 grid grid-cols-4 '>
                    <DetailsCard/>
                    <DetailsCard/>
                    <DetailsCard/>
                </div>
                 <div>
                    <BestSellingCourse/>
                  </div>
            </div>

            <div className='flex justify-start items-start m-5'>
                    <ChartComponents/>
            </div>
    </div>
  )
}

export default AdminPage