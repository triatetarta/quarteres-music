import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const PrevButton = ({ skipTrackHandler }) => {
  return (
    <>
      <div className='prev-btn'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='play'
          size='2x'
          icon={faAngleLeft}
        />
        <div className='prev-triangle'></div>
      </div>
    </>
  );
};

export default PrevButton;
