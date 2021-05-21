import React from 'react';
import Webcam from 'react-webcam';
import WebcamComponent from './components/camera/index.js';
import Footer from './components/Footer/Footer';
import './App.css'


function App() {
  return (
    <>
      <WebcamComponent />
      <Footer />
    </>
  );
}

export default App;
