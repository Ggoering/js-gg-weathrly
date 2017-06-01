import React, { Component } from 'react';
import './DayCard.css'

const DayCard = ({ weeklyData }) => {





  const  renderCards = () => {
  return weeklyData.map((card, index) => {
    // console.log(card.condition);
    return (
      <div className="day-card" key={index}>
        <p>{card.dayName}</p>
        <p>{card.high}</p>
        <p>{card.low}</p>
        </div>
      )
    })
}
  return (<div className="day-card-container">{renderCards()}</div>)
}


export default DayCard
