import React, { Component } from 'react';
import './CurrentWeather.css'
import handleImages from '../Container/handleImages.js'


const currentWeather = ({weatherData}) => {

  let {location, temp, condition, high, low, summary} = weatherData
  let displayImage = handleImages(condition)
  let date= new Date();

  date = (date.getMonth() + 1) +
    "/" + date.getDate() +
    "/" + date.getFullYear()

  return (
    <section className="current-weather">
      <ul>
        <li className="current-location">
          {location}
        </li>
        <img src={displayImage} />
        <li className="current-Date">
          {date}
        </li>
        <li>
          {temp} &#8457;
        </li>
        <li className="current-hi-low">
          Hi: {high}
        </li>
        <li className="current-hi-low">
          Lo: {low}
        </li>
        <li className="current-summary">
          {summary}
        </li>
      </ul>
    </section>
  )
}


export default currentWeather
