import React from 'react'
import HomeHeader from './HomeHeader'
import './HomePage.css'
import SuggestedArtist from './SuggestedArtist'
import PlayedPlaylist from './PlayedPlaylist'

function HomePage() {
  return (
    <div className='HomePage'>
      <HomeHeader/>
      <section className='breadcumb'>
        <button>Music</button>
        <button>Podcasts & Shows</button>
      </section>
      <section className='Most-Played-Playlist'>
        <div className='row'>
          <PlayedPlaylist/>
          <PlayedPlaylist/>
          <PlayedPlaylist/>
        </div>
        <div className='row'>
          <PlayedPlaylist/>
          <PlayedPlaylist/>
          <PlayedPlaylist/>
        </div>
      </section>
      <section className='Playlist-Container'>
        <SuggestedArtist title="Suggested Artist" styling="lingkaran"/>
      </section>
      <section className='Playlist-Container'>
        <SuggestedArtist title="Recommended for Today" styling=""/>
      </section>
    </div>
  )
}

export default HomePage