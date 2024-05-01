import React, { useState, useEffect } from 'react';

function Equations({ navigateTo }) {
  const [equations, setEquations] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showHints, setShowHints] = useState([]);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Sample equations
  const sampleEquations = [
    { id: 1, equation: 'What is 2 + 3?', answer: '5' },
    { id: 2, equation: 'What is 4 + 5?', answer: '9' },
    { id: 3, equation: 'What is 4 - 3?', answer: '1' },
    { id: 4, equation: 'What is 9 - 6?', answer: '3' },
    { id: 5, equation: 'What is 7 + 5?', answer: '12' }
  ];

  useEffect(() => {
    setEquations(sampleEquations);
    setAnswers(new Array(sampleEquations.length).fill(''));
    setShowHints(new Array(sampleEquations.length).fill(false));
    startTimer();
  }, []);

  useEffect(() => {
    if (timerRunning) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleHintClick = (index) => {
    const newShowHints = [...showHints];
    newShowHints[index] = true;
    setShowHints(newShowHints);
  };

  const checkAnswer = () => {
    let marks = 0;
    equations.forEach((eq, index) => {
      if (String(answers[index]) === String(eq.answer)) {
        marks += 1;
      }
    });
    terminate(marks);
  };     

  const endGame = () => {
    setTimerRunning(false);
    checkAnswer();
  };

  const terminate = (marks) => {
    localStorage.setItem('correctAnswers', marks);
    let points = 0
    points = Math.floor((marks * 10) - (time / 6));
    if (points < 0) {
      points = 0;
    }
    localStorage.setItem('points', points);
    localStorage.setItem('time', time);
    navigateTo('feedback-screen');
  };

  const buttonStyle = {
    fontSize: '14px',
    backgroundColor: '#FFD700',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
  };

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
  
  const innerDivStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  const inputStyle = {
    height: 'calc(1.8vw)',
    width: 'calc(4.2vw)',
    marginRight: '10px',
    marginLeft: '10px',
    background: 'linear-gradient(to right, #53b2cf, #73917f)',
    border: '1.5px solid #111',
    borderRadius: '5px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const hintButtonStyle = {
    ...buttonStyle,
    fontSize: '12px',
    marginRight: '10px',
    backgroundColor: '#04d627',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
			<h2 style={{color: '#ddd', fontSize: 30,}}>Equations Game - Level 1</h2>
        <p style={{ fontSize: 20, fontWeight: 900, marginTop: '-20px' }}>Solve the equations below:</p>
        <div style={innerDivStyle}>
          {equations.map((eq, index) => (
            <div key={eq.id} style={{ display: 'flex', alignItems: 'center', margin: '0px 30px 30px' }}>
              <p style={{ fontSize: 18, fontWeight: 900 }}>{eq.equation}</p>
              <input type="text" value={answers[index]} onChange={(e) => handleAnswerChange(e, index)} style={inputStyle} />
              <button onClick={() => handleHintClick(index)} style={hintButtonStyle}>Hint !</button>
              {showHints[index] && <p>{eq.answer}</p>}
            </div>
          ))}
        </div>
        <button onClick={endGame} style={buttonStyle}>End Game</button>
        <p>Time: {time} seconds</p>
      </div>
    </div>
  );
}

export default Equations;
