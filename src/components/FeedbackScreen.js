import React, { useEffect, useState } from 'react';
import REWARDS from '../images/bgs/reward.png';

function FeedbackScreen({ navigateTo }) {

  const [isNextLevel, setIsNextLevel] = useState(false);
  const [nextLevel, setNextLevel] = useState(null);
  const [isHinted, setIsHinted] = useState(false);

  useEffect(() => {
    const gameType = localStorage.getItem('GameType');
    const isHint = localStorage.getItem('isHint');

    console.log(isHint);
    setIsHinted(isHint);

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    margin: 'auto',
    width: isNextLevel?'calc(100vw - 800px)': 'calc(100vw - 1000px)',
    height: isNextLevel? 'calc(100vh - 200px)': 'calc(100vh - 300px)',
    fontFamily: 'Comic Sans MS, cursive',
    borderRadius: '10px',
    background: 'transparent',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.6)'
  };
  
  const buttonStyle = {
    fontSize: 'calc(1vw)',
    color: '#fff',
    marginBottom: '10px',
    backgroundColor: '#060c42',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Comic Sans MS, cursive',
  };

  const inlineContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: '-10px',
    boxSizing: 'border-box'
  };

  const videoContainerStyle = {
    width: '36%',
    height: 'auto',
    marginBottom: '30px',
    marginTop: '10px',
  };

  return (
    <div>
    {isNextLevel && <div style={containerStyle}>
      <h2>{(!isHinted && localStorage.getItem('correctAnswers') == 5) ? 'Congratulations': 'Good Job!'}</h2>
      {/* Add feedback details and rewards here */}
      <div style={inlineContainerStyle}>
        <p>Your score: {localStorage.getItem('correctAnswers')}/5</p>
        <p>Time taken: {localStorage.getItem('time')} sec</p>
        <p>Overall Points: {localStorage.getItem('points')}</p>
      </div>
      <div style={inlineContainerStyle}>
        <img src={REWARDS} alt="Rewards" style={{ width: '60px', height: '60px', marginTop:'20px' }} />
        {
          <p style={{ width: '300px', fontSize: '22px', fontWeight: 400, textAlign: 'center' }}>{localStorage.getItem('correctAnswers') == 5 ? 'All the answers are Correct!' : 'Good Job!'} {localStorage.getItem('isHint') == true ? '' : '& You hav\'t use any hints!'}</p>
        }
        <img src={REWARDS} alt="Rewards" style={{ width: '60px', height: '60px', marginTop:'20px' }} />
      </div>
      <div style={inlineContainerStyle}>
        <p>Watch this video as a reward</p>
      </div>
      {/* Embed YouTube video */}
      <div style={videoContainerStyle}>
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/yi2caADuDfQ?autoplay=1" // autoplay
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={inlineContainerStyle}>
        {isNextLevel && <button onClick={() => navigateTo(nextLevel)} style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFC107'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#060c42'}>Next Level</button>}
        <button onClick={() => navigateTo('category-selection')} style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFC107'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#060c42'}>{isNextLevel ? 'Go Back' : 'End Game'}</button>
      </div>
    </div>}

    {!isNextLevel &&<div style={containerStyle}>
        <h2>{localStorage.getItem('isHint') ? 'Good Job!': 'Congratulations!'}</h2>
        {/* Add feedback details and rewards here */}
        <div style={inlineContainerStyle}>
          <img src={REWARDS} alt="Rewards" style={{ width: '60px', height: '60px', marginTop:'20px' }} />
          {
            <p style={{ width: '300px', fontSize: '22px', fontWeight: 400, textAlign: 'center' }}>{localStorage.getItem('correctAnswers') == 5 ? 'All the answers are Correct!' : 'Good Job!'} {localStorage.getItem('isHint') == true ? '' : '& You hav\'t use any hints!'}</p>
          }
          <img src={REWARDS} alt="Rewards" style={{ width: '60px', height: '60px', marginTop:'20px' }} />
        </div>
        <p>Your score: {localStorage.getItem('correctAnswers')}/5</p>
        <p>Time taken for {isNextLevel? 'Level 1': 'Level 2'}: {localStorage.getItem('time')} sec</p>
        <p>Overall Points: {localStorage.getItem('points')}</p>

        {isNextLevel && <button onClick={() => navigateTo(nextLevel)} style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFC107'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#060c42'}>Next Level</button>}
        <button onClick={() => navigateTo('category-selection')} style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFC107'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#060c42'}>{isNextLevel ? 'Go Back' : 'End Game'}</button>
      </div>}
      </div>
  );
}

export default FeedbackScreen;
