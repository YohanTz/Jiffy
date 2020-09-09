import React, { useState } from 'react';
import Header from './Components/Header';

const App = () => {
  const [activeP, setActiveP] = useState(true);
  return (
    <div className='App'>
      <Header activeP={activeP} setActiveP={setActiveP} />
    </div>
  );
};

export default App;
