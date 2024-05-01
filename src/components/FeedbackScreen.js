import React, { useEffect, useState } from 'react';

function FeedbackScreen({ navigateTo }) {

  const [isNextLevel, setIsNextLevel] = useState(false);
  const [nextLevel, setNextLevel] = useState(null);

  useEffect(() => {
    const gameType = localStorage.getItem('GameType');

    console.log(gameType);

    if(gameType === 'NumberSense'){
      setIsNextLevel(true);
      setNextLevel('NumberSense-Adv');
    }else if(gameType === 'CountingShapes'){
      setIsNextLevel(true);
      setNextLevel('CountingShapes-Adv');
    }else if(gameType === 'Equations'){
      setIsNextLevel(true);
      setNextLevel('Equations-Adv')
    }

    const correctAnswers = localStorage.getItem('correctAnswers');
    const timeTaken = localStorage.getItem('time');
    console.log(correctAnswers, timeTaken);
  }, []);

  const pageStyle = {
    backgroundColor: '#205d76',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

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

  const buttonStyle = {
    fontSize: '14px',
    backgroundColor: '#FFD700',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px'
  };
  const doneButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#04d627',
    marginRight: '10px',
  };


  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2>Feedback</h2>
        {/* Add feedback details and rewards here */}
        <p>Your score: {localStorage.getItem('correctAnswers')}/5</p>
        <p>Time taken for {isNextLevel? 'Level 1': 'Level 2'}: {localStorage.getItem('time')} seconds</p>
        <p>Overall Points: {localStorage.getItem('points')}</p>
        <p> </p>
        {isNextLevel && <button onClick={() => navigateTo(nextLevel)} style={doneButtonStyle}>Next Level</button>}
        <button onClick={() => navigateTo('category-selection')} style={buttonStyle}>Go Back</button>
      </div>
    </div>
  );
}

export default FeedbackScreen;
