import React, { Component } from 'react';

const DayCard = ({ dayData }) => {





  const  renderCards = () => {
  return dayData.map((card, index) => {
    console.log(card.condition);
    return (
      <div key={index}>
        <p>{card.condition}</p>
        <p>{card.high}</p>
        <p>{card.low}</p>
        <p>{card.day}</p>
        </div>
      )
    })
}
  return (<div>{renderCards()}</div>)
}


export default DayCard
