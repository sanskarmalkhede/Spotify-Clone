import React from 'react';
import './Sidebar.css';
// Material UI Icons
// https://mui.com/material-ui/material-icons/
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const myPlaylist = [
  { id: 1, name: 'Liked Songs' },
  { id: 2, name: 'free thug' },
  { id: 3, name: 'Indie India' },
  { id: 4, name: 'lofi beats' },
  { id: 5, name: 'Punjabi 101' },
  { id: 6, name: 'Playlist: R&B' },
  { id: 7, name: 'bollywood bangers' },
  { id: 8, name: 'Underground' },
  { id: 9, name: 'Seedhe Maut ke bina kya jeevan hai' },
  { id: 10, name: 'The Melodic Blue' },
  { id: 11, name: 'lovey dubby bullshit' }
];

export const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className="block-1">
          <div className="sidebar-items"><HomeIcon /> Home</div>
          <div className="sidebar-items"><SearchIcon /> Search</div>
        </div>
        <div className="block-2"><div className="sidebar-items"><LibraryMusicIcon /> Your Library</div>

          <div className="sidebar-options">
            {
              myPlaylist.map((item) => {
                return (
                  <div className="sidebar-playlists" key={item.id}>
                    {item.name}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
