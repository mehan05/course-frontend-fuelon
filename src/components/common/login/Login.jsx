import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const[role,setRole] = useState();
  console.log(role)
  const handleSubmit = (e) => {
    e.preventDefault();
    {role==="student"?navigate("/student/home"):navigate("/trainee/home")};
  }
  return (
    <div className="flex flex-col  justify-end items-center  bg-gray-50">
      <div className="flex justify-end w-full p-10">
        <button className="pr-5 pl-5 pt-2 pb-2 rounded-lg bg-[#5072f5] border-2 text-white">Signup</button>
      </div>

      <div className="flex items-center justify-around  w-full ">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl text-[#161439] font-semibold font-poppins">Welcome!</h1>
          <h3 className="text-3xl text-[#161439] font-semibold font-poppins">Login to your account</h3>
          <div className="w-[400px] h-[266px]">
            <img src="/loginPageImage.png" alt="Login Page" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="border-2 p-10 w-[508px] h-[512px] rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-col items-start">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sahil@gmail.com"
                required
              />
            </div>
            <div className="mb-5 flex flex-col items-start">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5 flex flex-col items-start">
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="trainee">Trainee</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className="flex justify-between mb-5">
              <button className="text-gray-500">Forgot Password?</button>
              <button className="rounded-lg pr-5 pl-5 pt-2 pb-2 bg-[#5072f5] border-2 text-white">
                Login
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p>Login With</p>
              <div className="flex gap-6">
                <button>
                  <img src="/facebookLogo.png" alt="Facebook Logo" className="w-[42px] h-[42px]" />
                </button>
                <button>
                  <img src="/GoogleLogo.png" alt="Google Logo" className="w-[42px] h-[42px]" />
                </button>
                <button type='submit'>
                  <img src="/linkedinLogo.png" alt="LinkedIn Logo" className="w-[42px] h-[42px]" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
