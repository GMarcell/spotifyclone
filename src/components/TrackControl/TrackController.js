import React from 'react'
import { IoShuffleOutline } from 'react-icons/io5';
import { RiPauseFill } from 'react-icons/ri';
import { MdSkipNext, MdOutlineRepeat, MdSkipPrevious } from 'react-icons/md';
import './TrackController.css'

function TrackController() {
  return (
    <div className='TrackController-container'>
        <IoShuffleOutline size={24}/>
        <MdSkipPrevious size={24}/>
        <RiPauseFill size={24} className='pause-btn'/>
        <MdSkipNext size={24}/>
        <MdOutlineRepeat size={24}/>
    </div>
  )
}

export default TrackController