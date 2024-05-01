// CategorySelection.js
import React from 'react';
import NSImage from '../images/selectionPage/NS.png';
import CSImage from '../images/selectionPage/CS.png';
import EQImage from '../images/selectionPage/EQ.png';

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

const pageStyle = {
  backgroundColor: '#205d76',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const headingStyle = {
  fontSize: 'calc(7vmin)',
  color: '#fff',
};

const buttonColors = ['#FFA07A', '#87CEEB', '#98FB98'];

const images = {
  NS: NSImage,
  CS: CSImage,
  EQ: EQImage,
};

const names = ["NumberSense", "CountingShapes", "Equations"]
const disNames = ["Number Sense", "Counting Shapes", "Equations"]

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

function CategorySelection({ navigateTo }) {
  const buttonStyle = {
    marginLeft: '30px',
    width: '200px',
    height: '200px',
    position: 'relative',
    cursor: 'pointer', // Added cursor property
    border: 'none', // Remove default button border
    background: 'transparent', // Make button background transparent
  };

  const pageSelected = (index) => {
    localStorage.setItem('GameType', names[index]);
    localStorage.setItem('points', 0);
    navigateTo('Game Details');
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Select a Game</h2>
        <div style={rowStyle}>
          {Object.keys(images).map((key, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <button
                onClick={() => pageSelected(index) }
                style={{
                  ...buttonStyle,
                  backgroundImage: `url(${images[key]})`,
                  backgroundColor: buttonColors[index],
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-block',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></button>
              <div style={{ textAlign: 'center', marginTop: '10px', color: '#fff' }}>
                {disNames[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelection;
