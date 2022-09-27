import React from 'react'
import './HomeHeader.css'
import { BsGearFill, BsClockHistory, BsBell } from 'react-icons/bs';

function HomeHeader() {
  let timeoftheday
  const date = new Date()
  const hours = date.getHours()
  if(hours >= 4 && hours < 10){
    timeoftheday = "Morning"
  } else if (hours >= 10 && hours < 17){
    timeoftheday = "Afternoon"
  } else {
    timeoftheday = "Evening"
  }
  return (
    <div className='header-container'>
      <h2>Good {timeoftheday}</h2>
      <div className='buttons'>
        <BsBell size={28} className="button"/>
        <BsClockHistory size={28} className="button"/>
        <BsGearFill size={28} className="button"/>
      </div>
    </div>
  )
}

export default HomeHeader