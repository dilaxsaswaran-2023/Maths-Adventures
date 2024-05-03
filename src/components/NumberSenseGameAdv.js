import React, { useState, useEffect } from 'react';

function NumberSenseGameAdv({ navigateTo }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showHints, setShowHints] = useState(false);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Sample questions with the format changed
  const sampleQuestions = [
    { id: 1, question: ' 7', answer: 'seven' },
    { id: 2, question: ' 8', answer: 'eight' },
    { id: 3, question: ' 5', answer: 'five' },
    { id: 4, question: ' 11', answer: 'eleven' },
    { id: 5, question: ' 3', answer: 'three' }
  ];

  useEffect(() => {
    setQuestions(sampleQuestions);
    setAnswers(new Array(sampleQuestions.length).fill(''));
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
    console.log(answers)
  };

  const handleHintClick = (index) => {
    localStorage.setItem('isHint', true);
    setShowHints(!showHints);
  };

  const checkAnswer = () => {
    let marks = 0;
    const cleanedAnswers = answers.map(answer => answer.replace(/\s/g, '').toLowerCase());
    questions.map((q, index) => {
      if (String(cleanedAnswers[index]).toLowerCase() === String(questions[index].answer).toLowerCase()) {
        marks+=1;
      }
    });
    terminate(marks);
  };     

  const endGame = () => {
    localStorage.setItem('GameType', 'finished');
    setTimerRunning(false);
    checkAnswer();
  };

  const terminate = (marks) => {
    localStorage.setItem('correctAnswers', marks);
    let oldPoints = 0
    oldPoints = localStorage.getItem('points');
    let newPoints = 0
    newPoints = Math.floor((marks * 10) - (time / 6));
    newPoints = parseInt(oldPoints) + parseInt(newPoints);
    if (newPoints < 0) {
      newPoints = 0;
    }
    localStorage.setItem('points', newPoints);
    localStorage.setItem('time', time)
    navigateTo('feedback-screen');
  }

  const buttonStyle = {
    fontSize: '14px',
    backgroundColor: '#060c42',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: 'auto',
    width: 'calc(100vw - 800px)',
    height: 'calc(100vh - 200px)',
    fontFamily: 'Comic Sans MS, cursive',
    borderRadius: '10px',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.6)'
  };
  
  const innerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left', 
  };

  const inputStyle = {
    height: 'calc(1.8vw)',
    width: 'calc(8.2vw)',
    marginRight: '10px',
    marginLeft: '30px',
    background: 'transparent',
    border: '1.5px solid #111',
    borderRadius: '3px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const hintButtonStyle = {
    fontSize: '14px',
    fontWeight: 600,
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    marginLeft: '300px',
    color: '#060c42',
  };

  return (
      <div style={containerStyle}>
        <h2 style={{color: '#000', fontSize: 30, alignSelf: 'center', marginTop: '10px'}}>Number Sense Game - Level 2</h2>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '-30px'}}>
          <p style={{fontSize: 20, fontWeight: 900, marginLeft: '20px'}}>Write the numbers in the words</p>
          <button onClick={() => handleHintClick()} style={hintButtonStyle}>Hint !</button>
        </div>
        
        <div style={innerDivStyle}>
          {questions.map((question, index) => (
            <div key={question.id} style={{ display: 'flex', alignItems: 'center', marginLeft: '60px' }}>
              <p style={{fontSize: 18, fontWeight: 900}}>{index+1}. {question.question}</p>
              <input type="text" value={answers[index]} onChange={(e) => handleAnswerChange(e, index)} style={inputStyle} />
              {/* <button onClick={() => checkAnswer(index)} style={buttonStyle}>Done</button> */}
              {showHints && <p>{question.answer}</p>}
            </div>
          ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <button onClick={endGame} style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFC107'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#060c42'}>Done</button>
          <p>Time: {time} seconds</p>
        </div>
      </div>
  );
}

export default NumberSenseGameAdv;
