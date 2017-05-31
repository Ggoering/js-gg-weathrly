import React, { Component } from 'react';

const HourCard = ({ hourData }) => {

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


    return (
      <div key={index} style={hourCardStyle}>
        <p>{card.condition}</p>
        <p>{card.temp}</p>
        <p>{card.time}</p>
      </div>
      )
    })
}
  return (<div style={hourlyStyle}>{renderCards()}</div>)
}
export default HourCard;
