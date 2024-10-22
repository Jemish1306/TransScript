// src/components/RightSidePanel.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing an icon from React Icons
import CommentsTab from './../SIdeTabs/CommentsTab';
import ShortcutsTab from './../SIdeTabs/ShortcutsTab';
import SettingsTab from './../SIdeTabs/SettingsTab';
import DetailsTab from '../SIdeTabs/DetailsTab';

const RightSidePanel = () => {
  const [activeTab, setActiveTab] = useState('comments');
  const [isVisible, setIsVisible] = useState(true); 

  const renderContent = () => {
    switch (activeTab) {
      case 'comments':
        return <CommentsTab />;
      case 'shortcuts':
        return <ShortcutsTab />;
      case 'settings':
        return <SettingsTab />;
      case 'details':
        return <DetailsTab />;
      default:
        return null;
    }
  };


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`bg-white shadow-md p-4 min-h-screen w-full right-0 ${!isVisible ? 'hidden' : ''}`}>
      <ul className="flex items-center justify-evenly">
        <li>
          <button onClick={() => setActiveTab('comments')} className={`block w-full text-left p-2 px-4 rounded ${activeTab === 'comments' ? 'bg-gray-200 text-blue-500 font-semibold' : 'hover:bg-gray-100'}`}>
            Comments
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('details')} className={`block w-full text-left py-2 px-4 rounded ${activeTab === 'details' ? 'bg-gray-200 text-blue-500 font-semibold' : 'hover:bg-gray-100'}`}>
            Details
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('shortcuts')} className={`block w-full text-left py-2 px-4 rounded ${activeTab === 'shortcuts' ? 'bg-gray-200 text-blue-500 font-semibold' : 'hover:bg-gray-100'}`}>
            Shortcuts
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('settings')} className={`block w-full text-left py-2 px-4 rounded ${activeTab === 'settings' ? 'bg-gray-200 text-blue-500 font-semibold' : 'hover:bg-gray-100'}`}>
            Settings
          </button>
        </li>
       
      </ul>

      <div className="mt-4 bg-gray-100 rounded p-2 ">{renderContent()}</div>
     
    </div>
  );
};

export default RightSidePanel;
