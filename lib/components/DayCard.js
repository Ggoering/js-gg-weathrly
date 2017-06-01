import React, { Component } from 'react';

const DayCard = ({ weeklyData }) => {





  const  renderCards = () => {
  return weeklyData.map((card, index) => {
    // console.log(card.condition);
    return (
      <div key={index}>
        <p>{card.dayName}</p>
        <p>{card.high}</p>
        <p>{card.low}</p>
        </div>
      )
    })
}
  return (<div>{renderCards()}</div>)
}


export default DayCard
