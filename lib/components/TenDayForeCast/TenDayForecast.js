import React, { Component } from 'react';
import DayCard from '../DayCard/DayCard';
import './TenDayForecast.css'

const TenDayForecast = ({ weeklyData }) => {
  return (
    <DayCard weeklyData = { weeklyData } />
  )
}

export default TenDayForecast
