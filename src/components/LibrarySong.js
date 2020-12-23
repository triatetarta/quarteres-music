import React from 'react';

const LibrarySong = ({
  song,
  songs,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const { name, cover, artist, active } = song;

  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? 'selected' : ''}`}
    >
      <img src={cover} alt={name} />
      <div className='song-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
