import React, { Component } from 'react';
import HourCard from './HourCard'

class HourlyForecast extends Component {
  constructor() {
    super()
    this.state = {
      hour :[{
            condition: 'rainy',
            temp: '55',
            time: '12:00'
          },
          {
            condition: 'rainy',
            temp: '55',
            time: '1:00'
          },
          {
            condition: 'rainy',
            temp: '55',
            time: '2:00'
          },
            {
            condition: 'rainy',
            temp: '55',
            time: '3:00'
          },
            {
            condition: 'rainy',
            temp: '55',
            time: '4:00'
          },
            {
            condition: 'rainy',
            temp: '55',
            time: '5:00'
          },
            {
            condition: 'rainy',
            temp: '55',
            time: '6:00'
          }]
    }
  }
  render() {
    let weatherData = this.state.hour
    
    console.log(weatherData);
    return (
        <HourCard hourData = { weatherData }/>
    )
  }
}

export default HourlyForecast
