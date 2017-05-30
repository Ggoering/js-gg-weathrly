import React, { Component } from 'react';
import DayCard from './DayCard'

class TenDayForecast extends Component {
  constructor() {
    super()
    this.state = {
      day :[{
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '1'
          },
          {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '2'
          },
          {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '3'
          },
            {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '4'
          },
            {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '5'
          },
            {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '6'
          },
            {
            condition: 'rainy',
            high: '7',
            low: '3',
            day: '7'
          }]
    }
  }
  render() {
    let weatherData = this.state.day
    console.log(weatherData);
    return (
      <div>
        <DayCard dayData = { weatherData }/>
      </div>
    )
  }
}




export default TenDayForecast
