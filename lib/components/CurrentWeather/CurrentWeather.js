import React, { Component } from 'react';
import './CurrentWeather.css'
import handleImages from '../Container/handleImages.js'


const currentWeather = ({weatherData}) => {

  let {location, temp, condition, high, low, summary} = weatherData
  let displayImage = handleImages(condition)

  return (
    <section className="current-weather">
      <ul>
        <li>{location}</li>
        <img src={displayImage} />
        <li>today</li>
        <li>{temp}</li>
        <li>{high}</li>
        <li>{low}</li>
        <li>{summary}</li>
      </ul>
    </section>
  )
}


export default currentWeather
