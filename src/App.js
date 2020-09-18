import React, { useState } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ScreenTime from './Components/ScreenTime';

const App = () => {
  const [activeP, setActiveP] = useState(true);
  return (
    <div className='App'>
      <Header />
      <Navigation activeP={activeP} setActiveP={setActiveP} />
      {activeP ? <ScreenTime/> : null}
    </div>
  );
};

export default App;
