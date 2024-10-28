// src/components/Layout/Transcript.jsx
import React, { useState, useEffect } from 'react';
import ContextMenu from './ContextMenu';

const Transcript = () => {
  const [contextMenu, setContextMenu] = useState(null);
  
  const entries = [
    {
      name: 'Dillon Bowser',
      time: '00:32',
      content: 'Lorem ipsum dolor sit amet. Imperdiet aliquet volutpat in massa tellus leo. Amet quam in et nisl integer etiam urna venenatis. A sed pellentesque libero mauris ullamcorper aliquam leo. Blandit massa vel cras morbi risus donec. Et sit dictum.',
      color: 'bg-pink-400',
    },
    {
      name: 'Maj Vestal',
      time: '00:49',
      content: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mauris blandit turpis dolor ac enim. Eu ultrices velit convallis cursus pellentesque ac commodo turpis. Nisl sed nibh consequat amet facilisi diam varius aliquam. Nulla id mi non integer at.',
      color: 'bg-blue-400',
    },
    {
      name: 'Dani Meluski-Jimenez',
      time: '01:13',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu proin libero turpis scelerisque et purus. Non tincidunt mauris blandit turpis dolor ac enim. Eu ultrices velit convallis cursus pellentesque ac commodo turpis. Nisl sed nibh consequat amet facilisi diam varius aliquam. Nulla id mi non integer at.',
      color: 'bg-green-400',
    },
  ];

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const closeContextMenu = () => setContextMenu(null);

  // Add an event listener to detect clicks outside the context menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close the context menu if the click is outside it
      if (!event.target.closest('.context-menu')) {
        closeContextMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div onContextMenu={handleRightClick} className="space-y-6 overflow-y-auto">
      {entries.map((entry, index) => (
        <div key={index} className="p-6 rounded-lg shadow-md bg-light-crim">
          <div className="flex items-center space-x-3 mb-2">
            <div className={`px-4 py-2 rounded-full text-white ${entry.color}`}>
              <span className="font-semibold">{entry.name}</span>
            </div>
          </div>
          <div className="pl-6 border-l-2 border-gray-200">
            <div className="text-gray-500 text-sm mb-1">{entry.time}</div>
            <p className="text-gray-800">{entry.content}</p>
          </div>
        </div>
      ))}
      {contextMenu && (
        <div className="context-menu" style={{ position: 'absolute' }} onClick={closeContextMenu}>
          <ContextMenu x={contextMenu.x} y={contextMenu.y} />
        </div>
      )}
    </div>
  );
};

export default Transcript;
