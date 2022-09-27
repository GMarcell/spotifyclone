import React from 'react'
import TrackControlHeader from './TrackControlHeader'
import TrackController from './TrackController'
import Extras from './Extras'
import './TrackControlPage.css'
import TrackInfo from './TrackInfo'

function TrackControlPage() {
  return (
    <div className='track-container'>
        <TrackControlHeader/>
          <section id='foto-cover'>
            <img src='https://picsum.photos/300' alt='picsum' className='song-img'/>
          </section>
          <section id='song-information'>
            <TrackInfo/>
          </section>
          <section className="slidecontainer" id='seek-track'>
            <input type="range" min="1" max="100" defaultValue="10" className='slider' id="myRange"></input>
          </section>
        <section id='Track-Control'>
          <TrackController/>
        </section>
        <section id='extras'>
          <Extras/>
        </section>
    </div>
  )
}

export default TrackControlPage