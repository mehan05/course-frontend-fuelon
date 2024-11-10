import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/common/login/Login';
import Trainee from './components/trainee/Trainee';
import Student from './components/student/Student';

function App() {
  return (
    <div className="m-0 p-0 w-full">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/trainee/*' element={<Trainee />} />  
        <Route path='/student/*' element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
