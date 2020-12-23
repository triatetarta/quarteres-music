import React from 'react';

const BackgroundShapes = ({ currentSong }) => {
  return (
    <>
      <div className='triangle'></div>
      <div
        style={{
          background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
        }}
        className='square'
      ></div>
      <div className='circle'></div>
    </>
  );
};

export default BackgroundShapes;
