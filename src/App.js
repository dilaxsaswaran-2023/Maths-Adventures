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

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let pageContent;

  switch (currentPage) {
    case 'landing':
      pageContent = <LandingPage navigateTo={navigateTo} />;
      break;
    case 'category-selection':
      pageContent = <CategorySelection navigateTo={navigateTo} />;
      break;
    case 'Game Details':
      pageContent = <NumberSenseDetails navigateTo={navigateTo} />;
      break;
    case 'NumberSense':
      pageContent = <NumberSenseGame navigateTo={navigateTo} />;
      break;
    case 'NumberSense-Adv':
      pageContent = <NumberSenseGameAdv navigateTo={navigateTo} />;
      break;
    case 'CountingShapes':
      pageContent = <CountingShapesGame navigateTo={navigateTo}/>;
      break;
    case 'CountingShapes-Adv':
        pageContent = <CountingShapesGameAdv navigateTo={navigateTo}/>;
        break;
    case 'Equations':
        pageContent = <Equations navigateTo={navigateTo}/>;
        break;
    case 'Equations-Adv':
          pageContent = <EquationsAdv navigateTo={navigateTo}/>;
          break;
    case 'feedback-screen':
      pageContent = <FeedbackScreen navigateTo={navigateTo} />;
      break;
    default:
      pageContent = <LandingPage navigateTo={navigateTo} />;
  }

  return (
    <div>
      {pageContent}
    </div>
  );
}

export default App;
