import React, { useState, useEffect } from 'react';
import TanyMCE from './TanyMCE';

const TranscriptEditor = () => {
  const [exportType, setExportType] = useState('View Export');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [transcription, setTranscription] = useState(''); // To store transcription data

  const handleExportTypeChange = (event) => {
    setExportType(event.target.value);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleGenerateTranscription = async () => {
    // Example: Trigger file upload or send an existing file URL to the server
    const response = await fetch('http://localhost:5000/api/transcriptions/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ audioUrl: 'path_to_audio_file' }) // Adjust accordingly
    });
    const data = await response.json();
    if (response.ok) {
      setTranscription(data.transcription); // Assuming the backend sends back the transcription text
    } else {
      console.error('Failed to generate transcription', data);
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-lg mx-auto w-full space-y-6">
      <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-full ">
        <div className="flex items-center space-x-4 ">
          <h2 className="text-2xl font-semibold">My Transcription</h2>
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Status: Combining</span>
        </div>
        <div className="flex items-center space-x-2  gap-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1  rounded-full">Verbatim</span>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full ">Speaker Required</span>
        </div>
        <div className=' flex items-center space-x-2 gap-2'>
          <span className='text-lg'>{currentTime}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Publish</button>
        </div>
      </div>
      <div className="flex space-x-6 items-center justify-between">
        <div className="bg-white p-3 rounded-lg shadow-md flex-1 max-w-7xl">
          <TanyMCE/>
          {transcription && <p className="mt-4">{transcription}</p>} {/* Display transcription */}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg flex gap-8 items-center justify-center ">
          <button onClick={handleGenerateTranscription} className="bg-blue-500 text-white px-8 border shadow-lg text-lg py-1 rounded-md">Generate</button>
          <select
            value={exportType}
            onChange={handleExportTypeChange}
            className="bg-gray-100 px-3 py-1 text-lg rounded-md border shadow-lg"
          >
            <option value="View Export">View Export</option>
            <option value="PNG">PNG</option>
            <option value="SVG">SVG</option>
            <option value="PDF">PDF</option>
            <option value="MP4">MP4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TranscriptEditor;
