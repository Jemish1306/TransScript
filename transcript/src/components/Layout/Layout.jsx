// src/components/Layout.js
import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';  // Import Chevron icons for toggling
import TranscriptHeader from './TranscriptHeader';

import LeftPanel from './LeftPanel';
import RightSidePanel from './RightPanel';

const Layout = () => {
  const [isRightPanelVisible, setRightPanelVisible] = useState(true); // State to manage the right panel visibility

  // Toggle function to change the visibility of the right panel
  const toggleRightPanel = () => {
    setRightPanelVisible(!isRightPanelVisible);
  };

  return (
    <div className="flex flex-col ">
      {/* Full-width Header */}
      <div className="top-0 left-0 w-full z-50 bg-white border-b border-gray-300">
        <TranscriptHeader />
      </div>

      {/* Main content area */} 
      <div className="flex flex-1 ">
        {/* Left Panel - Main Transcript Area */}
        <div className="flex-1 overflow-auto p-4  bg-gray-100">
          <LeftPanel />
        </div>

        {/* Toggle Button for Right Side Panel */}
        <button
          onClick={toggleRightPanel}
          className={`focus:outline-none z-50  ${isRightPanelVisible ? 'rotate-180' : ''}`}
          style={{
            position: 'absolute', right: isRightPanelVisible ? '33%' : '0', top: '90%', transform: 'translateY(-50%)'
          }}
        >
          {isRightPanelVisible ?   <FaChevronRight size={28}  className='bg-gray-300    rounded-2xl ' />: <FaChevronLeft size={28} className='bg-gray-300 rounded-2xl '/>}
        </button>

        {/* Right Side Panel - Additional Details and Tools */}
        {isRightPanelVisible && (
          <div className="w-1/3 flex border-l border-gray-300 p-4 bg-gray-100">
            <RightSidePanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
