import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const NextButton = ({ skipTrackHandler }) => {
  return (
    <>
      <div className='next-btn'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='play'
          size='2x'
          icon={faAngleRight}
        />
        <div className='next-triangle'></div>
      </div>
    </>
  );
};

export default NextButton;
