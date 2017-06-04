import React, { Component } from 'react';
import './HourCard.css'


const HourCard = ( {hourData} ) => {

  const  renderCards = () => {
  return hourData.map((card, index) => {

    return (
      <div className="hour-card" key={index}>
        <p>Time: {card.hour}</p>
        <p> Temp: {card.temp}</p>
      </div>
      )
    })
}
  return (<div className="hour-card-container">{renderCards()}</div>)
}
export default HourCard;
