import React, { Component } from 'react';
import DayCard from './DayCard'

const TenDayForecast = ({ weeklyData }) => {
  return (
    <DayCard weeklyData = { weeklyData } />
  )
}

export default TenDayForecast
