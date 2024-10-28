// src/components/Layout2/MainContent.jsx
import React from 'react';
import { FaUndo, FaRedo, FaFont, FaSearch, FaKeyboard, FaSave } from 'react-icons/fa';

import Transcript from './Transcript';

const MainContent = () => {
  return (
    <div className="flex flex-col w-3/4 bg-gray-50 p-6">
      {/* Toolbar Section */}
      <div className="flex items-center justify-between bg-light-crim p-3 rounded-lg shadow-md mb-4">
        <div className="flex space-x-3">
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaUndo /></button>
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaRedo /></button>
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaFont /></button>
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaSearch /></button>
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaKeyboard /></button>
          <button className="p-2 hover:bg-black hover:text-textcolor rounded-full"><FaSave /></button>
        </div>

        {/* Right Side: Add Collaborator, Download, Rating */}
        <div className="flex items-center space-x-4">
          <button className="hover:bg-black hover:text-textcolor px-3 py-2 rounded-full">
            Add Collaborator
          </button>
          <button className="hover:bg-black hover:text-textcolor px-3 py-2 rounded-full">
            Download
          </button>
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400">⭐</span>
            ))}
          </div>
        </div>
      </div>

      {/* Transcript Content */}
      <Transcript />
    </div>
  );
};

export default MainContent;
