import React, { useState } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ScreenTime from './Components/ScreenTime';
import Footer from './Components/Footer';
import AddLimits from './Components/AddLimits';

const App = () => {
  const [activePage, setActivePage] = useState(false);
  const [activeApp, setActiveApp] = useState(true);
  return (
    <div>
      <Header />
      <Navigation activeP={activePage} setActiveP={setActivePage} />
      {activePage ? <ScreenTime /> : <AddLimits />}
      <Footer setActiveApp={setActiveApp} />
      {!activeApp ? <div className='power-off'></div> : null}
    </div>
  );
};

export default App;
