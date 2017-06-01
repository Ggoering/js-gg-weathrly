import React, { Component } from 'react';
import HourCard from './HourCard'

const HourlyForecast = ({hourData}) => {
  return (
    <HourCard hourData = { hourData }/>
  )

}



export default HourlyForecast
