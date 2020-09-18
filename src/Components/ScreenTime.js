import React from 'react';
import '../Styles/ScreenTime.css';
import TimeBar from './TimeBar';

const data = [
  { name: 'Facebook', value: 3600 },
  { name: 'Youtube', value: 2485 },
  { name: 'Twitter', value: 1585 },
];

const ScreenTime = () => {
  return (
    <div className='chart'>
      <div>
        {data.map((elem, id) => (
          <TimeBar
            id={id}
            name={elem.name}
            value={elem.value}
            total={data
              .map((item) => item.value)
              .reduce((prev, next) => prev + next)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenTime;
