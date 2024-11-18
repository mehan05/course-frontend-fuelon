<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom';
=======
import { Link, NavLink } from 'react-router-dom'
import MyContext from '../../../../context/context';
import { useContext } from 'react';
>>>>>>> 39a58061ac2881d7502415816da2648d1bbfb7a2

const StudentNavBar = () => {
  const{searchQuery,setSearchQuery}=useContext(MyContext);
  return (
<<<<<<< HEAD
    <nav className="bg-white shadow-md">
      <div className="px-4 py-4 flex items-center justify-between w-full flex-wrap">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-4">
          <NavLink to="/student/home" className="text-xl font-bold text-gray-800">
            FuelOn
          </NavLink>
=======
    <nav className="bg-white">
    <div className="px-4 py-6 flex items-center w-full">
      <div className="flex gap-12">
        <NavLink
          to="/student/home"
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold text-xl" : "text-gray-700 font-bold "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/student/mycourses"
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold text-xl" : "text-gray-700 font-bold "
          }
        >
          Courses
        </NavLink>
      </div>

      <div className="flex items-center flex-grow justify-center relative min-w-[1000px] ml-5">
        <input
          type="text"
          placeholder="Search for Courses..."
          onChange={(e)=>setSearchQuery(e.target.value)}
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
        { 
        location.pathname.startsWith("/trainee") ? (

        <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-4 flex items-center gap-2">
          <Link to="/trainee/newcourse/course_1">
            New Course
          </Link>
          <img className="w-5 h-5 invert" src="/plusicon.png" alt="Plus Icon" />
>>>>>>> 39a58061ac2881d7502415816da2648d1bbfb7a2
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm md:text-lg font-medium text-gray-700 flex-wrap">
          <NavLink
            to="/student/home"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-bold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/student/mycourses"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-bold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Courses
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search for Courses..."
            className="border border-gray-300 pl-12 pr-20 py-2 rounded-full w-full text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

        {/* Additional Options */}
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <a
            href="/wishlist"
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa fa-heart"></i>
          </a>
          <a
            href="/cart"
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa fa-shopping-cart"></i>
          </a>

          {location.pathname.startsWith('/trainee') ? (
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <Link to="/trainee/newcourse/course_1">New Course</Link>
              <img className="w-5 h-5 invert" src="/plusicon.png" alt="Plus Icon" />
            </div>
          ) : null}

          {location.pathname.startsWith('/trainee') ? (
            <Link to="/trainee/dashboard">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          ) : (
            <a
              href="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default StudentNavBar;
