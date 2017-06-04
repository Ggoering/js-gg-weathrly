import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard';
import DayCard from '../DayCard/DayCard';
import '../HourlyForecast/HourlyForecast.css';
import '../TenDayForecast/TenDayForecast.css';


const Container = ({hourData, weeklyData, tabView, handleViewChange}) => {
  if (tabView === 'Hourly View') {
     return (
       <div>
        <a onClick={handleViewChange}>Hourly View</a>
        <a onClick={handleViewChange}>Weekly View</a>
        <HourCard hourData = { hourData }/>
       </div>
     )
  }
    else if (tabView === 'Weekly View') {
      return (
        <div>
          <a onClick={handleViewChange}>Hourly View</a>
          <a onClick={handleViewChange}>Weekly View</a>
          <DayCard weeklyData = { weeklyData } />
        </div>
     )
    }
}

const HourlyForecast = ({hourData}) => {
  return (
    <HourCard hourData = { hourData }/>
  )

}


export default Container
