import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/common/login/Login';
import Trainee from './components/trainee/Trainee';
import Student from './components/student/Student';
import QuestionPage from './components/student/questionpage/QuestionPage';
import Remainders from './components/smallcomponents/Remainders'

function App() {
  return (
    <div className="m-5">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/trainee/*' element={<Trainee />} />  
        <Route path='/student/*' element={<Student />} />
        <Route path='/quiz' element={<QuestionPage/>} /> 
        <Route path='remainders' element={<Remainders/>} />
      </Routes>
    </div>
  );
}

export default App;
