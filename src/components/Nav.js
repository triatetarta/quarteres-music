import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setLibraryStatus, libraryStatus, isPlaying }) => {
  return (
    <nav>
      <div className='left'>
        <div className='logo'>
          <FontAwesomeIcon
            icon={faCompactDisc}
            size='2x'
            className={isPlaying ? 'animate-play' : ''}
          />
        </div>
        <h1>Quarters</h1>
      </div>

      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Playlist
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
