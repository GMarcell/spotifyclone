import React from 'react'
import './SuggestedArtist.css'

function SuggestedArtist({title, styling}) {
  return (
    <div className='PlayList'>
      <h2 className='section-title'>{title}</h2>
        <div className='row-artist'>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
          <div className='artist'>
            <img src='https://picsum.photos/150' alt='picsum' className={styling}/>
            <h3>lorem</h3>
          </div>
      </div>
    </div>
  )
}

export default SuggestedArtist