// LandingPage.js
import React from 'react';
import landingImage from '../images/landing.png'

const containerStyle = {
  display: 'flex',
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

const headerStyle = {
  fontSize: 'calc(4vmin)',
  color: '#fff',
  marginLeft: "20px"
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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

function LandingPage({ navigateTo }) {
  return (
    <div style={pageStyle}>
      <h1 style={{color: '#fff', fontFamily: 'Comic Sans MS, cursive', alignSelf: 'flex-start', marginLeft: '80px'}}>Maths Adventures</h1>
      <div style={containerStyle}>
        <div style={{ flex: '2', marginRight: '20px', textAlign: 'left', marginTop: '-180px' }}>
          <h1 style={headerStyle}>Math Games</h1>
          <h1 style={headerStyle}>For Grade 02 Students 🚀</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginRight: '150px' }}>
            <button
              onClick={() => navigateTo('category-selection')}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = hoverButtonStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Let's Start
            </button>
          </div>
        </div>
        <div style={{ flex: '3' }}>
          <img src={landingImage} alt="Landing Image" style={{ width: 'calc(45vw)', marginBottom: '180px' }} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
