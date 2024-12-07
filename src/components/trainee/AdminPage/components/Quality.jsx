import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Animation from '../../../smallcomponents/Animation';
import QualityPopupCard from '../../../smallcomponents/QualitypopupCard';

const Quality = () => {
    const [show,setShow] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true);     
        },3000)
    })
  return (
    <div className=''>
            {
                !show ? (
                    <Animation/>
                ):(
                    <QualityPopupCard/>
                )
            }
    </div>
  )
}

export default Quality