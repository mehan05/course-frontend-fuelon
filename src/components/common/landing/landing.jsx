import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import TraineeNavbar from '../../trainee/components/TraineeNavbar/TraineeNavbar';
import { useLocation } from 'react-router-dom';
import StudentNavBar from '../../student/components/SrudentNavbar/StudentNavBar';
import Reminders from '../../smallcomponents/Remainders';

function Landing() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  useEffect(() => {
    const isPopupShown = localStorage.getItem("popup");
    if (!isPopupShown) {
      setToggle(true);
      localStorage.setItem("popup", "true");
    }
    const handleUnload = () => {
      localStorage.removeItem("popup");
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClosePopup = () => {
    setToggle(false);
  };

  return (
    <div>
      {location.pathname.startsWith("/trainee") ? <TraineeNavbar /> : <StudentNavBar />}

      <div className="w-full bg-gray-200 px-4 py-8 md:px-8 md:py-20 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
            Learn Without <span className="bg-yellow-500 text-black px-2">Limits</span>
          </h1>
          <div className="text-container mt-4">
            <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 mt-4">With FuelOn</h1>
            <p className="text-sm md:text-lg font-semibold text-gray-500 mt-4">Every teaching and learning journey is unique.</p>
            <p className="text-sm md:text-lg font-semibold text-gray-500 mt-4">We'll help guide your way.</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-4 flex items-center shadow-lg">
            Start Free Trial
            <img src="/arrow.png" alt="Arrow" className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="md:w-1/4 mt-8 md:mt-0">
          <img src="/landingimage.png" alt="Learn Without Limits" className="object-cover w-full h-auto" />
        </div>
      </div>

      {toggle && location.pathname.startsWith("/student") && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
            >
              X
            </button>
            <div>
              <Reminders />
            </div>
          </div>
        </div>
      )}

      <div className="w-full text-center py-10">
        <p className="text-3xl md:text-4xl font-semibold text-gray-700">Top Category</p>
      </div>

      <div className="w-full bg-white px-4 md:px-8 py-8 md:py-20 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="md:w-1/2">
          <img src="/landingimage2.png" alt="Courses Available" className="object-cover w-full md:w-3/4 h-auto mx-auto" />
        </div>
        <div className="md:w-1/2 text-left pl-4 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Thousands Of Top <span className="bg-yellow-500 text-black px-2">Courses</span> <br /> Now In One Place
          </h1>
          <ul className="text-sm md:text-lg font-semibold text-gray-500 mt-6 space-y-3">
            <li>🔹 Flexible Course Plan</li>
            <li>🔹 Access Your Class Anywhere</li>
            <li>🔹 Expert Instructors</li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-indigo-900 text-white py-10 px-4 md:px-8 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center w-full max-w-5xl mx-auto">
          {[{ number: '45K+', label: 'Active Students' }, { number: '24K+', label: 'Faculty Courses' }, { number: '14K+', label: 'Best Professors' }, { number: '42K+', label: 'Award Achieved' }].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-sm md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center py-10 md:py-20 font-poppins">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">Explore Our Best Courses</h2>
        <div className="flex justify-center mt-6">
          <ul className="flex flex-wrap space-x-4 md:space-x-8 text-gray-500 text-sm md:text-lg font-semibold">
            {['All Courses', 'Design', 'Business', 'Development'].map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer ${selectedCategory === category ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center mt-10 gap-6">
          {[{
            title: 'Laravel',
            category: 'Development',
            level: 'Expert',
            price: '$15.00',
            reviews: '4.8 Reviews',
            image: '/laravel.png'
          }, {
            title: 'The Complete Graphic Design for Beginners',
            category: 'Design',
            level: 'Beginner',
            price: '$19.00',
            reviews: '4.5 Reviews',
            image: '/graphic.png'
          }, {
            title: 'Learning Digital Marketing on Facebook',
            category: 'Marketing',
            level: 'Pro Expert',
            price: '$24.00',
            reviews: '4.3 Reviews',
            image: '/marketingl.png'
          }, {
            title: 'Financial Analyst Training & Investing Course',
            category: 'Business',
            level: 'Crash Course',
            price: '$12.00',
            reviews: '4.8 Reviews',
            image: '/finance.png'
          }].map((course, index) => (
            <div key={index} className="w-full md:w-80 bg-white shadow-lg rounded-lg overflow-hidden relative flex flex-col">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">{course.title}</h3>
                <div className="text-sm text-gray-500">{course.category} | {course.level}</div>
                <p className="text-lg text-gray-800 mt-2">{course.price}</p>
                <p className="text-sm text-gray-500">{course.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
