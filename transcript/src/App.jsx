// src/App.js
import React from 'react';
import {   Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'

import Home from './Pages/Home';


const App = () => {
  return (
    <>
    <Routes>
      
        <Route path="/" element={<Home/>} />
        {/* Add other routes as needed */}
        
    </Routes>
    
    </>
  );
};

export default App;
