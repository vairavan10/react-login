import React from 'react';
import logo1 from './image/kologo.png';
import './App.css';
import Form from './component/form';
function App() {
  return (
    <div className="container">
      
      <div className="top-section">
        
        <div className="left-section">
          <img src={logo1} alt="KO Fleetz Logo" className="logo" />
          <div className="image-container"></div>
        </div>

        
        <Form/>
      </div>

      
      <p className="welcome-text">
      Welcome to the Ko Fleetz Admin Login page! As an authorized user, you can access and manage vehicle tracking and delivery operations through our intuitive interface.
      </p>
    </div>
  );
}

export default App;
