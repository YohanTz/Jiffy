import React from 'react';
import '../Styles/Navigation.css';

const Navigation = ({ activeP, setActiveP }) => {
  return (
    <div className='container'>
      <nav>
        <div className='active-left'>Screen Time</div>
        <div>Add a new limit</div>
      </nav>
    </div>
  );
};

export default Navigation;
