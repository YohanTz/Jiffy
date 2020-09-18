import React, { useEffect } from 'react';
import '../Styles/TimeBar.css';

const colors = [
  'linear-gradient(90deg, #9198e5, #0ff0b3)',
  'linear-gradient(90deg, #0ba29d, #c3ec52)',
  'linear-gradient(90deg, #da0641, #f2d50f)',
  'linear-gradient(90deg, #5b247a, #1bcedf)',
];

const TimeBar = ({ id, name, value, total }) => {
  useEffect(() => {
    document.getElementById(id).style.width = '100%';
  });

  return (
    <div className='site-elem' key={id}>
      <h2>{name}</h2>
      <div
        className='bars-container'
        style={{ width: (400 * value) / total + 'px' }}
      >
        <div
          className='bars'
          id={id}
          style={{
            backgroundImage: colors[Math.floor(Math.random() * colors.length)],
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimeBar;
