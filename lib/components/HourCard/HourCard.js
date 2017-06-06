import React, { Component } from 'react';
import './HourCard.css'
import handleImages from '../Container/handleImages.js'


const HourCard = ( {hour, temp, condition} ) => {

  console.log('asdkjlfasdjk', condition)
  let hourCondition = handleImages(condition)

  return (<div className="hour-card" key={hour}>
          <p>Time: {hour}</p>
          <p> Temperature: {temp}</p>
          <img src={hourCondition} />
        </div>)
}
export default HourCard;
