// NumberSenseDetails.js
import React, { useState, useEffect } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  width: 'calc(100vw - 300px)',
  height: 'calc(100vh - 300px)',
  fontFamily: 'Comic Sans MS, cursive',
  background: 'linear-gradient(45deg, #060c42, #ffa09e)',
  borderRadius: '10px',
  margin: 'auto',
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.8)',
};

const headingStyle = {
  fontSize: 'calc(5vmin)',
  color: '#fff',
};

const descriptionStyle = {
  fontSize: 'calc(1vmin + 10px)', // Adjusted font size
  marginBottom: '30px',
};

const buttonStyle = {
  fontSize: 'calc(1vw)',
  color: '#fff',
  backgroundColor: '#060c42',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease',
  fontFamily: 'Comic Sans MS, cursive',
};

const hoverButtonStyle = {
  backgroundColor: '#FFC107',
};

const pageStyle = {
  backgroundColor: '#205d76',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function NumberSenseDetails({ navigateTo }) {

  useEffect(() => {
    const GameType = localStorage.getItem('GameType');
    // console.log(GameType);
  }, []);

  const Descriptions = {
    NumberSense :'This game helps you improve your number sense skills!',
    CountingShapes: 'This game helps you improve your counting skills!',
    Equations: 'This game helps you improve your equations skills!'
  };

  const gameType = {
    NumberSense :'Number Sense',
    CountingShapes: 'Counting Shapes',
    Equations: 'Equations'
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>{gameType[localStorage.getItem('GameType')]} Game</h2>
        <p style={descriptionStyle}>Description: {Descriptions[localStorage.getItem('GameType')]}</p>
        <button
          onClick={() => navigateTo(localStorage.getItem('GameType'))}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = hoverButtonStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Let's Play
        </button>
      </div>
    </div>
  );

}

export default NumberSenseDetails;
