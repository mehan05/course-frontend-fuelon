import React from 'react'

const DetailsCard = ({Headerlogo,arrowLogo }) => {
  return (
    <div className={`border-2 shadow-md rounded-md p-2 w-full flex flex-col items-center gap-5  `}  >
        <div className='flex center-items justify-center   gap-10  '>
            <img src={Headerlogo} alt="" className='w-[32px]  h-[32px]' />
            <h2 className='text-[24px] text-[#161439] '>Total Cost</h2>
        </div>
        <div className='flex gap-20'>
            <h4>$15000</h4>
            <img src={arrowLogo} alt="" />
        </div>
        <div  className='flex justify-center'>
            <h5 className='text-gray-500'>{`This Month:${12321}`}</h5>
        </div>
    </div>
  )
}

export default DetailsCard