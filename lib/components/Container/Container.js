import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard';
import DayCard from '../DayCard/DayCard';
import '../HourlyForecast/HourlyForecast.css';
import '../TenDayForecast/TenDayForecast.css';


const Container = ({hourData, weeklyData, tabView}) => {
  if (tabView === 'Hourly') {
     return (
       <div>
        <a>Hourly</a>
        <a>Weekly</a>
        <HourCard hourData = { hourData }/>
       </div>
     )
  }
    else if (tabView === 'Weekly') {
      return (
        <div>
          <a>Hourly</a>
          <a>Weekly</a>
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
