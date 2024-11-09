import  { useState } from 'react'
import MyContext from './context';

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const[courses,setCourses] = useState([]);
  return (
    <MyContext.Provider value={{courses,setCourses}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider