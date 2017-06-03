import React, { Component } from 'react';
import './DayCard.css'

const DayCard = ({ weeklyData }) => {
  if (!weeklyData[0]) {
    return <div></div>
  }

  // if (card.condition == "Partly Cloudy") {
  //   card.condition = "Assets/morning-snow.svg"
  // } else {
  //   card.condition = "Assets/storm.svg"
  // }
  function getImages(card) {
  switch (card.condition) {
    case "Chance of Flurries":
      card.condition = "Assets/snowing.svg";
      break;
    case "Chance of Rain":
      card.condition = "Assets/raining.svg";
      break;
    case "Chance of Sleet":
      card.condition = "Assets/raining.svg";
      break;
    case "Chance of Snow":
      card.condition = "Assets/snowflake.svg";
      break;
    case "Chance of Thunderstorm":
      card.condition = "Assets/storm.svg";
      break;
    case "Clear":
      card.condition = "Assets/sunny.svg";
      break;
    case "Cloudy":
      card.condition = "Assets/clouds.svg";
      break;
    case "Flurries":
      card.condition = "Assets/snowflake.svg";
      break;
    case "Mostly Cloudy":
      card.condition = "Assets/clouds.svg";
      break;
    case "Mostly Sunny":
      card.condition = "Assets/clouds-and-sun.svg";
      break;
    case "Rain":
      card.condition = "Assets/raining.svg";
      break;
    case "Sleet":
      card.condition = "Assets/raining.svg";
      break;
    case "Snow":
      card.condition = "Assets/snowing.svg";
      break;
    case "Sunny":
      card.condition = "Assets/sunny.svg";
      break;
    case "Hazy":
      card.condition = "Assets/storm.svg";
      break;
    case "Partly Cloudy":
      card.condition = "Assets/clouds-and-sun.svg";
      break;
    case "Mostly Sunny":
      card.condition = "Assets/storm.svg";
      break;
    case "Partly Sunny":
      card.condition = "Assets/clouds-and-sun.svg";
      break;
    case "Mostly Cloudy":
      card.condition = "Assets/clouds-and-sun.svg";
      break;
    case "Fog":
      card.condition = "Assets/storm.svg";
      break;
    }
  }


  // console.log(weeklyData[0].condition)


  const  renderCards = () => {
  return weeklyData.map((card, index) => {
    getImages(card)
    return (
      <div className="day-card" key={index}>
        <p>{card.dayName}</p>
        <p>Hi: {card.high}</p>
        <p>Lo: {card.low}</p>
        <img src={card.condition} />
      </div>
      )
    })
}
  return (<div className="day-card-container">{renderCards()}</div>)
}


export default DayCard
