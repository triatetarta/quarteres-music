import React from 'react';

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className='song-container'>
      <div className='image'>
        <img src={currentSong.cover} alt={currentSong.name} />
        <div className={`square-1 ${isPlaying ? 'animate-play' : ''}`}></div>
        <div className={`square-2 ${isPlaying ? 'animate-play' : ''}`}></div>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
