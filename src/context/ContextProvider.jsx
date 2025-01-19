import  { useState } from 'react'
import MyContext from './context';

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const[courses,setCourses] = useState([]);
    const[SelectedCategoryContext,setSelectedCategoryContext] = useState([]);
    const[languageContext,setLanguageContext] = useState([]);
    const[PaidContext,setPaidContext] = useState([]);
    const[searchQuery,setSearchQuery] = useState("");
    const [show,setShow] = useState(false);
            //use the test id from backend to store the marks
    // const[marksFromContext,setMarksFromContext] = useState([{}]);



  return (
    <MyContext.Provider value={{show,setShow,courses,setCourses,searchQuery,setSearchQuery,setSelectedCategoryContext,SelectedCategoryContext,languageContext,setLanguageContext,PaidContext,setPaidContext,}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider