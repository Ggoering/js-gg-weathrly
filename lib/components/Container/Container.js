import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard';
import DayCard from '../DayCard/DayCard';
import '../HourlyForecast/HourlyForecast.css';
import '../TenDayForecast/TenDayForecast.css';
import './Container.css'


const Container = ({hourData, weeklyData, tabView, handleViewChange}) => {
  function renderCards(data) {
    if(!data.length) {
      return <div></div>
      }
    return data.map((card, index) => {
      if (data.length > 7) {
        return (
          <DayCard  key={index}
                    high={card.high}
                    low={card.low}
                    dayName={card.dayName}
                    />
      )
      } else {
        return (
          <HourCard key={index}
                    temp={card.temp}
                    hour={card.hour}
                    condition={card.condition}
                    />
      )}
    })
  }



  if (tabView === 'Hourly View') {
     return (
       <div className="card-container">
          <div>
            <a onClick={handleViewChange}>Hourly View</a>
            <a onClick={handleViewChange}>Weekly View</a>
          </div>
          {renderCards(hourData)}
        </div>
     )
  }
    else if (tabView === 'Weekly View') {
      // console.log(renderCards());
      return (
        <div className="card-container">
          <div>
            <a onClick={handleViewChange}>Hourly View</a>
            <a onClick={handleViewChange}>Weekly View</a>
          </div>
          <div>
              {renderCards(weeklyData)}
          </div>
        </div>
     )
    }

}

export default Container
