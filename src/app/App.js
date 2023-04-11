import React from 'react';
import './App.css';
import Background from '../components/Background/Background';
import BackgroundLeftArrow from '../components/BackgroundLeftArrow/BackgroundLeftArrow';
import BackgroundRightArrow from '../components/BackgroundRightArrow/BackgroundRightArrow';

function App() {
  return (
    <div className="App">
      <Background />
      <aside>
        <BackgroundLeftArrow />
      </aside>
      <aside>
        <BackgroundRightArrow />
      </aside>
    </div>
  );
}

export default App;
