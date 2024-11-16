import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from react-icons

const Header = () => (
  <header className="bg-blue-600 p-4 text-white shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      {/* Logo and Home Link */}
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-200">ShoppyGlobe</Link>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center">
        {/* Cart Link with Icon */}
        <Link to="/cart" className="ml-4 flex items-center hover:text-gray-200">
          <FaShoppingCart className="text-2xl" /> {/* Cart Icon */}
          <span className="ml-2">Cart</span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
