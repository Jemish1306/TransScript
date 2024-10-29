// src/components/modals/AddCollaborator.jsx
import React from 'react';

const AddCollaborator = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-black text-white p-6 rounded-lg w-[600px] relative shadow-lg">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl font-semibold">✕</button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Add a Collaborator</h2>
        <p className="text-sm text-gray-400 mb-6">
          Add a Collaborator by entering their name or email address in the field below.
        </p>

        {/* Input Field with Role Dropdown */}
        <div className="flex items-center space-x-2 mb-6 m-4  border-white  border rounded-full ">
          <input
            type="email"
            placeholder="Add emails"
            className="w-full p-3 bg-gray-800 text-white bg-black    placeholder-gray-500 outline-none focus:ring-2 focus:ring-neon-yellow"
          />
          <select className="bg-gray-800 text-white  rounded-lg bg-black cursor-pointer outline-none">
            <option>Editor</option>
            <option>Viewer</option>
            <option>Manager</option>
          </select>
        </div>

        {/* Collaborators with Access Section */}
        <h3 className="text-lg font-semibold mb-4">Collaborators with Access</h3>
        <div className="space-y-4 mb-6">
          {/* Collaborator List */}
          {[
            { name: 'Dani Meluski (You)', email: 'dani@bighuman.com', role: 'Manager', initials: 'DM' },
            { name: 'Dillon Bowser', email: 'dillon@bighuman.com', role: 'Editor', initials: 'DB' },
            { name: 'Maj Vestal', email: 'maj@bighuman.com', role: 'Editor', initials: 'MV' }
          ].map((collaborator, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Initials */}
                <div className="bg-gray-600 w-10 h-10 border border-white text-textcolor flex items-center justify-center rounded-full font-semibold">
                  {collaborator.initials}
                </div>
                {/* Name and Email */}
                <div>
                  <p className="font-semibold">{collaborator.name}</p>
                  <p className="text-gray-400 text-sm">{collaborator.email}</p>
                </div>
              </div>
              {/* Role */}
              <div>
                {collaborator.role === 'Manager' ? (
                  <span className="text-gray-400">{collaborator.role}</span>
                ) : (
                  <select className="bg-gray-800 text-white bg-black p-2 rounded-lg border border-gray-600 cursor-pointer outline-none">
                    <option>Editor</option>
                    <option>Viewer</option>
                    <option>Manager</option>
                  </select>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* General Access Section */}
        <h3 className="text-lg font-semibold mb-4">General Access</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6 flex items-center justify-between bg-dark-gray">
          <div>
            <p className="text-sm font-semibold">Anyone with the link can</p>
            <p className="text-gray-400 text-xs">This link lets anyone view the transcription in the editor.</p>
          </div>
          <button className="border border-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition">
            Copy Link
          </button>
        </div>

        {/* Done Button */}
        <button
          className="bg-gray-600 text-gray-400 justify-end px-4 py-2 bg-dark-gray border border-white rounded-full text-lg font-semibold  cursor-not-allowed"
          disabled
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default AddCollaborator;
