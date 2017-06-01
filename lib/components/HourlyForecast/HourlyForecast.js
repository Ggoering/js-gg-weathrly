import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard'
import './HourlyForecast.css'

const HourlyForecast = ({hourData}) => {
  return (
    <HourCard hourData = { hourData }/>
  )

}



export default HourlyForecast
