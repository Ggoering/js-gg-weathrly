import React, { Component } from 'react';
import HourCard from '../HourCard/HourCard';
import DayCard from '../DayCard/DayCard';
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
                    condition={card.condition}
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
          <div className="tab-btns">
            <a onClick={handleViewChange}
              className="active-tab">
              Hourly View
            </a>
            <a onClick={handleViewChange}>Weekly View</a>
          </div>
          {renderCards(hourData)}
        </div>
     )
  }
    else if (tabView === 'Weekly View') {
      return (
        <div className="card-container">
          <div className="tab-btns">
            <a onClick={handleViewChange}>Hourly View</a>
            <a onClick={handleViewChange}
              className="active-tab">
              Weekly View
            </a>
          </div>
            {renderCards(weeklyData)}
        </div>
     )
    }

}

export default Container
