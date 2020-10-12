import React from 'react';
import '../Styles/Limit.css';
import { timeConverter } from '../utils/time';

const Limit = ({ domain, limit }) => {
  return (
    <div className='limit'>
      <h2 className='title'>{domain}</h2>
      <h2>{timeConverter(limit)}</h2>
    </div>
  );
};

export default Limit;
