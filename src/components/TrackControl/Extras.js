import React from 'react'
import { MdComputer, MdOutlineShare, MdOutlineQueueMusic } from 'react-icons/md';
import './Extras.css'

function extras() {
  return (
    <div className='extras'>
        <MdComputer/>
        <div>
            <MdOutlineShare className='share'/>
            <MdOutlineQueueMusic/>
        </div>
    </div>
  )
}

export default extras