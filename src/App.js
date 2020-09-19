import React, { useState } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ScreenTime from './Components/ScreenTime';
import Footer from './Components/Footer';

const App = () => {
  const [activePage, setActivePage] = useState(true);
  const [activeApp, setActiveApp] = useState(true);
  return (
    <div className='App'>
      <Header />
      <Navigation activeP={activePage} setActiveP={setActivePage} />
      {activePage ? <ScreenTime /> : null}
      <Footer activeApp={activeApp} setActiveApp={setActiveApp} />
    </div>
  );
};

export default App;
