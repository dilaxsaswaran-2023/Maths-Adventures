// App.js
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import CategorySelection from './components/CategorySelection';
import NumberSenseDetails from './components/NumberSenseDetails';
import NumberSenseGame from './components/NumberSenseGame';
import NumberSenseGameAdv from './components/NumberSenseGameAdv';
import FeedbackScreen from './components/FeedbackScreen';
import CountingShapesGame from './components/CountingShapesGame';
import CountingShapesGameAdv from './components/CountingShapesGameAdv';
import Equations from './components/EquationsGame';
import EquationsAdv from './components/EquationsGameAdv';

import BG1 from './images/bgs/1.png';
import BG2 from './images/bgs/2.png';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const pageComponents = {
    'landing': LandingPage,
    'category-selection': CategorySelection,
    'Game Details': NumberSenseDetails,
    'NumberSense': NumberSenseGame,
    'NumberSense-Adv': NumberSenseGameAdv,
    'CountingShapes': CountingShapesGame,
    'CountingShapes-Adv': CountingShapesGameAdv,
    'Equations': Equations,
    'Equations-Adv': EquationsAdv,
    'feedback-screen': FeedbackScreen
  };

  const pageStyle = {
    backgroundImage: currentPage === 'landing' ? `url(${BG2})` : `url(${BG1})`,
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  };

  const PageComponent = pageComponents[currentPage] || LandingPage;

  return (
    <div style={pageStyle}>
      <div>
        <PageComponent navigateTo={navigateTo} />
      </div>
    </div>
  );
}

export default App;
