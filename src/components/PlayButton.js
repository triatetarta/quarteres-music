import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ isPlaying, playSongHandler }) => {
  return (
    <>
      <div className='play-btn'>
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <div className='play-circle'></div>
      </div>
    </>
  );
};

export default PlayButton;
