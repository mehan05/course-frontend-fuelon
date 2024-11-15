import React from 'react';

function Navbar() {
  const handleFavouriteClick = () => {
    alert('Favourite icon clicked!');
  };

  const handleCartClick = () => {
    alert('Cart icon clicked!');
  };

  return (
    <nav className="bg-white">
      <div className="px-4 py-6 flex items-center ">
        <div className="flex items-center gap-3 space-x-4">
          <a href="/" className="text-blue-500 font-bold text-lg">Home</a>
          <a href="/courses" className="text-gray-700 font-bold text-lg">Courses</a>
        </div>

        <div className="flex items-center justify-center flex-grow relative">
          <input
            type="text"
            placeholder="Search for Courses..."
            className="border border-gray-300 px-10 py-2 rounded-full w-[600px] ml-3  text-gray-500 placeholder-gray-400 text-center"
          />
          <i className="fa fa-search absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>

          <button
            onClick={handleFavouriteClick}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 p-2 bg-transparent border-none"
            aria-label="Favourite"
          >
            <img
              src="/favourite.png"
              alt="Favourite Icon"
              className="w-full h-full object-contain"
            />
          </button>

          <button
            onClick={handleCartClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 p-2 bg-transparent border-none"
            aria-label="Cart"
          >
            <img
              src="/cart.png"
              alt="Cart Icon"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/wishlist" className="text-gray-500 hover:text-gray-700">
            <i className="fa fa-heart"></i>
          </a>
          <a href="/cart" className="text-gray-500 hover:text-gray-700">
            <i className="fa fa-shopping-cart"></i>
          </a>
          <a href="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
