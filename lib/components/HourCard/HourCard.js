import React, { Component } from 'react';
import './HourCard.css'


const HourCard = ( {hour, temp, condition} ) => {

  return (<div className="hour-card" key={hour}>
          <p>Time: {hour}</p>
          <p> Temperature: {temp}</p>
          <p> Condition: {condition}</p>
        </div>)
}
export default HourCard;
