qgccrrtye64vb335oxe52rr5ieaodh9rl1lqmypgvky3cojv




project-root/
├── client/                        # Frontend (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                # Images, fonts, icons
│   │   ├── components/            # Reusable React components
│   │   │   ├── Editor/
│   │   │   ├── PlaybackToolbar/
│   │   ├── context/               # Context API for state management
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── layouts/               # Page layouts
│   │   ├── pages/                 # Individual page components
│   │   │   ├── Home.js
│   │   │   └── Editor.js
│   │   ├── services/              # API services
│   │   ├── styles/                
│   │   │   ├── globals.css        # Tailwind global properties
│   │   │   ├── tailwind.config.js # Tailwind configuration
│   │   ├── App.js
│   │   ├── index.js
│   │   └── main.css               # Main CSS file
│   ├── .env                       # Environment variables
│   └── package.json
├── server/                        # Backend (Node.js)
│   ├── controllers/               # API controllers
│   ├── models/                    # Database models
│   ├── routes/                    # API routes
│   │   ├── authRoutes.js
│   │   └── editorRoutes.js
│   ├── config/                    # Configuration files (DB, authentication)
│   ├── middleware/                # Middleware functions
│   ├── utils/                     # Utility functions
│   ├── server.js                  # Main server file
│   └── package.json
├── .gitignore
└── README.md
















// src/components/Layout2/MainContent.jsx
import React, { useState } from 'react';
import { FaUndo, FaRedo, FaFont, FaSearch, FaKeyboard, FaSave } from 'react-icons/fa';

import Transcript from './Transcript';

const MainContent = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 5, y: 0 });

  // List of toolbar icons and their names
  const toolbarIcons = [
    { icon: <FaUndo />, name: 'Undo' },
    { icon: <FaRedo />, name: 'Redo' },
    { icon: <FaFont />, name: 'Font' },
    { icon: <FaSearch />, name: 'Search' },
    { icon: <FaKeyboard />, name: 'Keyboard' },
    { icon: <FaSave />, name: 'Save' },
  ];

  // Function to show tooltip on hover, adjusting position to be centered above the icon
  const showTooltip = (e, text) => {
    const iconRect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      x: iconRect.left-80 + iconRect.width / 2,
      y: iconRect.top - 80, // Position above the icon, adjust as needed
      
    });
  };

  // Function to hide tooltip
  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="flex flex-col w-3/4 bg-gray-50 p-6 relative">
      {/* Toolbar Section */}
      <div className="flex items-center justify-between bg-light-crim p-3 rounded-lg shadow-md mb-4">
        <div className="flex space-x-3">
          {toolbarIcons.map((item, index) => (
            <button
              key={index}
              onMouseEnter={(e) => showTooltip(e, item.name)}
              onMouseLeave={hideTooltip}
              className="p-2 hover:bg-black hover:text-textcolor rounded-full"
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Right Side: Add Collaborator, Download, Rating */}
        <div className="flex items-center space-x-4">
          <button
            onMouseEnter={(e) => showTooltip(e, 'Add Collaborator')}
            onMouseLeave={hideTooltip}
            className="hover:bg-black hover:text-textcolor px-3 py-2 rounded-full"
          >
            Add Collaborator
          </button>
          <button
            onMouseEnter={(e) => showTooltip(e, 'Download')}
            onMouseLeave={hideTooltip}
            className="hover:bg-black hover:text-textcolor px-3 py-2 rounded-full"
          >
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

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute bg-black text-textcolor text-xs px-2 py-1 rounded-full"
          style={{
            top: tooltip.y,
            left: tooltip.x,
            transform: 'translateX(-50%)', // Center horizontally
            whiteSpace: 'nowrap',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default MainContent;
