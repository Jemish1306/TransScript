import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SpeakersList = () => {
  const [speakers, setSpeakers] = useState([
    { name: 'Dillon Bowser', color: 'bg-pink-500' },
    { name: 'Maj Vestal', color: 'bg-blue-500' },
    { name: 'Lydia Mansel', color: 'bg-cyan-500' },
    { name: 'Dani Meluski', color: 'bg-green-500' },
    { name: 'Andrew Tejerina', color: 'bg-orange-500' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSpeakerName, setNewSpeakerName] = useState('');

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle adding a new speaker
  const handleAddSpeaker = () => {
    setSpeakers([...speakers, { name: newSpeakerName, color: 'bg-yellow-500' }]);
    toggleModal();
  };

  // Create pairs of speakers for each row
  const pairs = [];
  for (let i = 0; i < speakers.length; i += 2) {
    pairs.push(speakers.slice(i, i + 2));
  }

  return (
    <div className="relative flex flex-col space-y-2 p-4">
      {pairs.map((pair, index) => (
        <div key={index} className="flex justify-between mb-2 gap-4 py-1">  
          {pair.map((speaker, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center ${speaker.color} text-white rounded-full px-4 py-2 flex-1 mx-1`}
            >
              <span>{speaker.name}</span>
            </div>
          ))}
        </div>
      ))}
      <button onClick={toggleModal} className="bg-textcolor text-primary-black px-4 py-2 rounded-full mt-4 self-start">
        Add New Speaker +
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute ml-96 left-16 mt-2 w-64 bg-black text-textcolor p-4 rounded-lg shadow-lg z-50"
          style={{ minWidth: '250px' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Add New Speaker</h2>
            <button onClick={toggleModal} className="text-textcolor">
              <FaTimes />
            </button>
          </div>
          <input
            type="text"
            placeholder="Speaker Name"
            value={newSpeakerName}
            onChange={(e) => setNewSpeakerName(e.target.value)}
            className="w-full mt-2 p-2 bg-gray-800 text-black rounded-full outline-none"
          />
          <div className="flex justify-end space-x-4 mt-4">
            <button onClick={toggleModal} className="px-4 py-2 rounded-full border border-white text-white">
              Cancel
            </button>
            <button onClick={handleAddSpeaker} className="px-4 py-2 rounded-full bg-textcolor text-primary-black">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakersList;
