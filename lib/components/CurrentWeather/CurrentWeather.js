import React, { Component } from 'react';
import './CurrentWeather.css'

const currentWeather = ({weatherData}) => {

  let {location, temp, condition, high, low, summary} = weatherData

  return (
    <section className="current-weather">
      <ul>
        <li>{location}</li>
        <li>{condition}</li>
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
