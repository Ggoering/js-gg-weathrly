import React, { Component } from 'react';

const currentWeather = ({weatherData}) => {
  let {location, temp, condition, high, low, summary} = weatherData
  let currentStyle = {
    display: 'inline-block',
    backgroundColor: 'green',
    width: 400
  }
  return (
    <section style={currentStyle}>
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
