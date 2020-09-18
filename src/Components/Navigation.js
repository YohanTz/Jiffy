import React from 'react';
import '../Styles/Navigation.css';

const Navigation = ({ activeP, setActiveP }) => {
  return (
    <div className='container'>
      <nav>
        <div className={activeP === true && 'active-left'} onClick={() => setActiveP(true)}>Screen Time</div>
        <div className={activeP === false && 'active-right'} onClick={() => setActiveP(false)} >Add a new limit</div>
      </nav>
    </div>
  );
};

export default Navigation;
