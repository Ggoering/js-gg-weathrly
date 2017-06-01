import React, { Component } from 'react';

const HourCard = ( {hourData} ) => {

  let hourlyStyle = {
    display: 'flex',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexWrap: 'wrap'
  }

  const  renderCards = () => {
  return hourData.map((card, index) => {
    let hourCardStyle = {
      flexGrow: 1,
      display: 'inline-block',
      // width: 100
    }
// console.log(card)
    return (
      <div key={index} style={hourCardStyle}>
        <p>{card.hour}</p>
        <p>{card.temp}</p>
      </div>
      )
    })
}
  return (<div style={hourlyStyle}>{renderCards()}</div>)
}
export default HourCard;
