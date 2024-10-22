// src/components/Layout/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Transcript App</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-yellow-500">Home</a></li>
        <li><a href="/settings" className="hover:text-yellow-500">Settings</a></li>
        <li><a href="/profile" className="hover:text-yellow-500">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
