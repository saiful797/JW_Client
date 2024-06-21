import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 rounded-b-full border-b-4 border-b-yellow-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li className="group">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-px text-white text-lg font-medium transition transform hover:bg-yellow-600 rounded-sm ${
                isActive ? 'bg-yellow-600 rounded-sm text-white' : 'text-white'
              }`
            }
          >
            Home
          </NavLink>
          <div className="h-1 bg-transparent rounded-sm group-hover:bg-white transition-all duration-300"></div>
        </li>

        <li className="group">
          <NavLink
            to="/data-table"
            className={({ isActive }) =>
              `flex items-center px-4 py-px text-white text-lg font-medium transition transform hover:bg-yellow-600 rounded-sm ${
                isActive ? 'bg-yellow-600 rounded-sm text-white' : 'text-white'
              }`
            }
          >
            Data Table
          </NavLink>
          <div className="h-1 bg-transparent rounded-sm group-hover:bg-white transition-all duration-300"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
