import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaRedo, FaForward, FaVolumeUp, FaDownload, FaVideo, FaUpload, FaUndo } from 'react-icons/fa';
import { IoArrowBack } from "react-icons/io5";
import audio from '../../assets/icons/Audio.png';
import audiopink from '../../assets/icons/Audiopink.png';
import audiogreen from '../../assets/icons/Audiogreen.png';

const MediaPlayer = () => {
  const mediaRef = useRef(null); // Changed to mediaRef to handle both audio and video
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [mediaSrc, setMediaSrc] = useState(''); // State for the uploaded media file
  const [isVideo, setIsVideo] = useState(false); // State to check if the media is a video

  const togglePlayPause = () => {
    if (isPlaying) {
      mediaRef.current.pause();
    } else {
      mediaRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(mediaRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(mediaRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    mediaRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const changePlaybackRate = () => {
    const newRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
    setPlaybackRate(newRate);
    mediaRef.current.playbackRate = newRate;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const mediaURL = URL.createObjectURL(file);
      setMediaSrc(mediaURL); // Set the uploaded media as the source
      setIsVideo(file.type.startsWith('video')); // Check if the uploaded file is a video
      setIsPlaying(false);    // Reset the play state
      setCurrentTime(0);      // Reset the time display
    }
  };

  return (
    <div className="bg-black text-white rounded-lg p-6 mb-4 w-full max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <button className="text-neon-yellow text-2xl rounded-full p-1 mr-2 border border-white">
          <IoArrowBack />
        </button>
        <h1 className="text-lg font-semibold">8.3.24 Design Meeting Notes</h1>
      </div>

      {/* Audio Tracks with Waveform Icons */}
      <div className="bg-pinkish rounded-lg py-6 px-4 space-y-4 mb-4">
        <div className="bg-primary-black h-12 rounded-lg flex items-center justify-center">
          <img src={audio} alt="Audio Track 1" className="h-6" />
        </div>
        <div className="bg-primary-black h-12 rounded-lg flex items-center justify-center">
          <img src={audiopink} alt="Audio Track 2" className="h-6" />
        </div>
        <div className="bg-primary-black h-12 rounded-lg flex items-center justify-center">
          <img src={audiogreen} alt="Audio Track 3" className="h-6" />
        </div>
      </div>

      {/* Combined Playback Progress Bar and Controls */}
      <div className="bg-light-crim rounded-lg py-3 px-4 flex flex-col items-center text-primary-black">
        {/* Progress Bar */}
        <div className="relative bg-light-crim rounded-full h-2 w-full mb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleProgressChange}
            className="absolute inset-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #00C3FF ${(currentTime / duration) * 100}%, #D1D5DB ${(currentTime / duration) * 100}%)`,
            }}
          />
        </div>

        {/* Time and Playback Controls */}
        <div className="flex justify-between items-center w-full">
          {/* Time Display */}
          <span className="text-xs font-semibold">{formatTime(currentTime)}</span>

         {/* Control Buttons */}
         <div className="flex items-center space-x-4 justify-center">
            <button onClick={togglePlayPause} className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={() => (mediaRef.current.currentTime -= 10)} className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              <FaRedo />
            </button>
            <button onClick={() => (mediaRef.current.currentTime += 10)} className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              <FaUndo />
            </button>
            <button className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              <FaVolumeUp />
            </button>
            <button onClick={changePlaybackRate} className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              {playbackRate}x
            </button>
            <button className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              <FaDownload />
            </button>
            <button className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full justify-center flex items-center">
              <FaVideo />
            </button>
            <label className="w-6 h-6 hover:bg-black hover:text-textcolor rounded-full cursor-pointer flex items-center justify-center">
              <FaUpload />
              <input
                type="file"
                accept="audio/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </label>
          </div>

          {/* Total Duration Display */}
          <span className="text-xs font-semibold">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Hidden Media Element */}
      {mediaSrc && (
        isVideo ? (
          <video
            ref={mediaRef}
            src={mediaSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="hidden"
          />
        ) : (
          <audio
            ref={mediaRef}
            src={mediaSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="hidden"
          />
        )
      )}
    </div>
  );
};

export default MediaPlayer;
