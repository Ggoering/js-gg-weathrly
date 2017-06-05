import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard';
import DayCard from '../DayCard/DayCard';
import '../HourlyForecast/HourlyForecast.css';
import '../TenDayForecast/TenDayForecast.css';
import './Container.css'


const Container = ({hourData, weeklyData, tabView, handleViewChange}) => {
  if (tabView === 'Hourly View') {
     return (
       <div className="card-container">
        <div>
          <a onClick={handleViewChange}>Hourly View</a>
          <a onClick={handleViewChange}>Weekly View</a>
        </div>
        <HourCard hourData = { hourData }/>
       </div>
     )
  }
    else if (tabView === 'Weekly View') {
      return (
        <div className="card-container">
          <div>
            <a onClick={handleViewChange}>Hourly View</a>
            <a onClick={handleViewChange}>Weekly View</a>
            <DayCard weeklyData = { weeklyData } />
          </div>
        </div>
     )
    }
}

export default Container
