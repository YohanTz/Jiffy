import React from 'react';
import Limit from './Limit';
import '../Styles/AddLimits.css';

const limits = [
  { domain: 'facebook.com', payload: 3600 },
  { domain: 'youtube.com', payload: 4200 },
  { domain: 'twitter.com', payload: 1800 },
];

const AddLimits = () => {
  return (
    <div className='limits'>
      <div>
        {limits.map((limit, id) => (
          <Limit key={id} domain={limit.domain} limit={limit.payload} />
        ))}
      </div>
    </div>
  );
};

export default AddLimits;
