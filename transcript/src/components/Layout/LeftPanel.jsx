import React, { useState } from 'react';

const LeftPanel = () => {
  
  const [transcriptionEntries, setTranscriptionEntries] = useState([
    { id: 1, speaker: 'Dr. Smith', time: '00:02:50', text: 'Thank you for joining today\'s session.' },
    { id: 2, speaker: 'Jane Doe', time: '00:03:15', text: 'It\'s my pleasure, really looking forward to our discussion.' },
    
  ]);

  return (
    <div className="bg-white shadow-xl border border-gray-300 text-black w-full md:w-2/3 min-h-screen p-4 mt-4 ml-48 ">
      <h2 className="text-lg font-semibold mb-4">Live Transcription Feed</h2>
      {transcriptionEntries.map(entry => (
        <div key={entry.id} className="mb-4 p-2 border-b">
          <p><strong>Speaker:</strong> {entry.speaker}</p>
          <p><strong>Time:</strong> {entry.time}</p>
          <p>{entry.text}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;
