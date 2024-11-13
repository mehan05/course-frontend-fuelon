import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const TraineeNavbar = () => {
    const location = useLocation();
    return (
        <nav className="bg-white">
          <div className="px-4 py-6 flex items-center  w-full">
            <div className="flex  flex-grow gap-12">
              <NavLink
                to="/trainee/home"
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold text-xl" : "text-gray-700 font-bold "
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/trainee/mycourses"
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold text-xl" : "text-gray-700 font-bold "
                }
              >
                Courses
              </NavLink>
            </div>

            <div className="flex items-center justify-center relative min-w-[1100px] ml-5">
              <input
                type="text"
                placeholder="Search for Courses..."
                className="border border-gray-300 pl-12 pr-20 py-2 rounded-full w-full text-gray-500 placeholder-gray-400"
              />

              <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
    
              <button
                className="absolute right-16 top-1/2 transform -translate-y-1/2 w-8 h-8 p-1 bg-transparent border-none"
                aria-label="Favourite"
              >
                <img
                  src="/favourite.png"
                  alt="Favourite Icon"
                  className="w-full h-full object-contain"
                />
              </button>
    
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 p-1 bg-transparent border-none"
                aria-label="Cart"
              >
                <img
                  src="/cart.png"
                  alt="Cart Icon"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
    
            <div className="flex items-center">
              <a href="/wishlist" className="text-gray-500 hover:text-gray-700 ml-4"><i className="fa fa-heart"></i></a>
              <a href="/cart" className="text-gray-500 hover:text-gray-700 ml-4"><i className="fa fa-shopping-cart"></i></a>
              
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-4 flex items-center gap-2">
                <Link to="/trainee/newcourse/course_1">
                  New Course
                </Link>
                <img className="w-5 h-5 invert" src="/plusicon.png" alt="Plus Icon" />
              </div>

              {location.pathname.startsWith("/trainee") ? (
                <Link to="/trainee/dashboard">
                  <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full ml-4"/>
                </Link>
              ) : (
                <a href="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full ml-4">
                  Login
                </a>
              )}
            </div>
          </div>
        </nav>
    );
}

export default TraineeNavbar;
