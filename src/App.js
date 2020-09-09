import React, { useState } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

const App = () => {
  const [activeP, setActiveP] = useState(true);
  return (
    <div className='App'>
      <Header />
      <Navigation activeP={activeP} setActiveP={setActiveP} />
    </div>
  );
};

export default App;
