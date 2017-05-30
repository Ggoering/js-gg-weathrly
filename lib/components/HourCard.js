import React, { Component } from 'react';

const HourCard = ({ hourData }) => {





  const  renderCards = () => {
  return hourData.map((card, index) => {
    console.log(card.condition);
    return (
      <div key={index}>
        <p>{card.condition}</p>
        <p>{card.temp}</p>
        <p>{card.time}</p>
        </div>
      )
    })
}
  return (<div>{renderCards()}</div>)
}
export default HourCard;
