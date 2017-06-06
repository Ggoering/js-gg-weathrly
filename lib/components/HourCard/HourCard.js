import React, { Component } from 'react';
import './HourCard.css'
import handleImages from '../Container/handleImages.js'


const HourCard = ( {hour, temp, condition} ) => {

handleImages(condition)

  return (<div className="hour-card" key={hour}>
          <p>Time: {hour}</p>
          <p> Temperature: {temp}</p>
          <img src={condition} /> 
        </div>)
}
export default HourCard;
