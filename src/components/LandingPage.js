// LandingPage.js
import React from 'react';
import landingImage from '../images/landing.png'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  margin: 'auto',
  width: 'calc(100vw - 300px)',
  height: 'calc(100vh - 300px)',
  fontFamily: 'Comic Sans MS, cursive',
  borderRadius: '10px',
};

const headerStyle = {
  fontSize: 'calc(4vmin)',
  color: '#000',
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

function LandingPage({ navigateTo }) {
  return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>Maths Games for Grade 2 Students</h1>
        <button
          onClick={() => navigateTo('category-selection')}
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = hoverButtonStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Let's Start
        </button>
        <img src={landingImage} alt="Landing Image" style={{ width: 'calc(36vw)', marginTop: '20px', marginBottom: '20px' }} />
      </div>
  );
}

export default LandingPage;
