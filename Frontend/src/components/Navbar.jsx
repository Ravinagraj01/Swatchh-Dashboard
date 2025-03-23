import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = 'text-green-500 font-semibold';
  const normalLinkStyle = 'text-white';
  
  return (
    <div className='fixed top-0 w-full bg-green-700 text-white z-50 h-16 '>
      <div className='flex justify-between p-4 bg-green-900 text-green-300 align-middle  '>
        <div className="w-[25%] text-2xl font-semibold">Swachh Dashboard</div>
        
        {/* Navigation Links */}
        <div className="flex w-[50%]">
          <ul className='flex gap-4'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/reports" className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>Reports</NavLink></li>
            <li><NavLink to="/contribution" className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>Contribution</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="font-semibold">
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
