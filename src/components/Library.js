import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-playlist' : ''}`}>
      <h2>Playlist</h2>
      <div className='library-songs'>
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              song={song}
              setCurrentSong={setCurrentSong}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
