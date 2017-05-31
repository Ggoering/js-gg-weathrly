import React, { Component } from 'react';
import Search from './search';
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast.js'
import TenDayForecast from './TenDayForecast.js'



class App extends Component {
  render() {
    let appStyle = {
      border: 0,
      margin: 0,
      boxStyle: 'borderBox',
      color: 'red',
      padding: 50
    }
    return (
      <main style={appStyle}>
        <Search />
        <CurrentWeather />
        <HourlyForecast />
        <TenDayForecast />
      </main>
    )
  }
}
export default App
