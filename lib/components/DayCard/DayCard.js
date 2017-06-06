import React, { Component } from 'react';
import './DayCard.css'
import handleImages from '../Container/handleImages.js'

const DayCard = ({ dayName, high, low, condition }) => {

var displayImage = handleImages(condition)
console.log(displayImage)

  return (
    <div className="day-card" key={dayName}>

      <p>{dayName}</p>
      <p>Hi: {high}</p>
      <p>Lo: {low}</p>
      <img src={displayImage} />
    </div>
  )


}


export default DayCard
