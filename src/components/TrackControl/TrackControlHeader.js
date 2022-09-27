import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './TrackControlHeader.css'

function TrackControlHeader() {
  return (
    <div className='TrackControlHeader-container'>
        <RiArrowDownSLine size={24}/>
        <div className='header-title'>
            <p className='header-word'>PLAYING FROM PLAYLIST</p>
            <p className='song-title'>lorem2</p>
        </div>
        <BsThreeDotsVertical size={24}/>
    </div>
  )
}

export default TrackControlHeader