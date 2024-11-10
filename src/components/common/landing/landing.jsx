import React from 'react';
import Navbar from '../navbar/Navbar';
import TraineeNavbar from '../../trainee/components/TraineeNavbar/TraineeNavbar';

function Landing() {
  return (
    <div>
      <TraineeNavbar />
      <div className="w-full bg-gray-200 px-8 py-20 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="md:w-1/2 text-left pl-8">
          <h1 className="text-5xl font-semibold text-gray-800 font-poppins">
            Learn Without <span className="bg-yellow-500 text-black px-2">Limits</span>
          </h1>
          <div className="text-container mt-4">
            <h1 className="text-5xl font-semibold text-gray-800 mt-4 font-poppins">
              With FuelOn
            </h1>
            <p className="text-lg font-semibold text-gray-500 mt-4 font-poppins">Every teaching and learning journey is unique.</p>
            <p className="text-lg font-semibold text-gray-500 mt-4 font-poppins">We'll help guide your way.</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-4 flex items-center shadow-lg shadow-black font-poppins">
            Start Free Trial
            <img src="/arrow.png" alt="Arrow" className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="md:w-1/4 pl-5">
          <img src="/landingimage.png" alt="Learn Without Limits" className="object-cover w-full h-auto" />
        </div>
      </div>

      {/* Top Category Section */}
      <div className="w-full text-center py-10 font-poppins text-gray-700">
        <p className="text-4xl font-semibold">Top Category</p>
      </div>

      {/* New Section with Reduced Image Size Below Top Category */}
      <div className="w-full bg-white px-8 py-20 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="md:w-1/2">
          <img src="/landingimage2.png" alt="Courses Available" className="object-cover w-3/4 h-auto mx-auto" />
        </div>
        <div className="md:w-1/2 text-left pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-semibold text-gray-800 font-poppins">
            Thousand Of Top <span className="bg-yellow-500 text-black px-2">Courses</span>
            <br /> Now In One Place
          </h1>
          <ul className="text-lg font-semibold text-gray-500 mt-6 font-poppins space-y-3">
            <li>🔹 Flexible Course Plan</li>
            <li>🔹 Access Your Class Anywhere</li>
            <li>🔹 Flexible Course Plan</li>
          </ul>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-indigo-900 text-white py-10 flex justify-center rounded-[20px] font-poppins">
        <div className="flex justify-around items-center w-full max-w-5xl px-8 py-6 rounded-lg shadow-md bg-indigo-900">
          {[
            { number: '45K+', label: 'Active Students' },
            { number: '24K+', label: 'Faculty Courses' },
            { number: '14K+', label: 'Best Professors' },
            { number: '42K+', label: 'Award Achieved' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center px-6">
                <p className="text-3xl font-bold">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
              {index < 3 && <div className="h-16 w-px bg-white"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
