import React from 'react';
import '../Styles/TimeBar.css';

const colors = [
  'linear-gradient(90deg, #9198e5, #0ff0b3)',
  'linear-gradient(90deg, #0ba29d, #c3ec52)',
  'linear-gradient(90deg, #da0641, #f2d50f)',
  'linear-gradient(90deg, #5b247a, #1bcedf)',
];

const TimeBar = ({ id, name, value, total }) => {
  return (
    <div className='site-elem' key={id}>
      <h2>{name}</h2>
      <div
        className='bars'
        style={{
          backgroundImage: colors[Math.floor(Math.random() * colors.length)],
          width: (400 * value) / total + 'px',
        }}
      ></div>
    </div>
  );
};

export default TimeBar;
