import React, { Component } from 'react';
import './HourCard.css'
import handleImages from '../Container/handleImages.js'


const HourCard = ( {hour, temp, condition} ) => {

  console.log('asdkjlfasdjk', condition)
  let hourCondition = handleImages(condition)

  return (<div className="hour-card" key={hour}>
          <p className="first-item">Time: {hour}</p>
          <img
            className="center-item"
            src={hourCondition}
          />
          <p className="second-item"> Temperature: {temp} &#8457;</p>
        </div>)
}
export default HourCard;
