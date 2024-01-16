import React from 'react'
import './PlaylistView.css'

const Playlist = [
  { id: 1, title: 'Sugar', artist: 'Maroon 5', album: 'V', duration: '3:56' },
  { id: 2, title: 'Happier', artist: 'Marshmello', album: 'Happier', duration: '3:34' },
  { id: 3, title: 'Memories', artist: 'Maroon 5', album: 'Memories', duration: '3:09' },
  { id: 4, title: 'One More Night', artist: 'Maroon 5', album: 'Overexposed', duration: '3:39' },
  { id: 5, title: 'Maps', artist: 'Maroon 5', album: 'V', duration: '3:10' },
  { id: 6, title: 'Shape of You', artist: 'Ed Sheeran', album: '÷', duration: '3:53' },
  { id: 7, title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', album: 'Uptown Special', duration: '4:30' },
  { id: 8, title: 'Closer', artist: 'The Chainsmokers ft. Halsey', album: 'Collage', duration: '4:04' },
  { id: 9, title: 'Thinking Out Loud', artist: 'Ed Sheeran', album: 'x', duration: '4:41' },
  { id: 10, title: 'Counting Stars', artist: 'OneRepublic', album: 'Native', duration: '4:17' },
]

export const PlaylistView = () => {
  return (
    <div className='playlistView'>
      <div className="playlist-header">
        <div className="playlist-cover-photo">
          
        </div>
        <div className="playlist-body">
          <p>Playlist</p>
          <h1>Top Hits of 2010s</h1>
          <p>By Spotify</p>
        </div>
      </div>

      <div className="playlist-list">
        <div className="playlist-list-id">
          #
        </div>
        <div className="playlist-list-title">
          TITLE
        </div>
        <div className="playlist-list-album">
          ALBUM
        </div>
        <div className="playlist-list-duration">
          DURATION
        </div>
      </div>

      <div className="playlist-container">
        {Playlist.map((item) => {
          return (
            <div className="playlist-item" key={item.id}>
              <div className="playlist-item-id">
                {item.id}
              </div>
              <div className="playlist-item-title">
                {item.title}
              </div>
              <div className="playlist-item-album">
                {item.album}
              </div>
              <div className="playlist-item-duration">
                {item.duration}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
