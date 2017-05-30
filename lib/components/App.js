import React, { Component } from 'react';
import Search from './search';
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast.js'



class App extends Component {
  render() {
    return (
      <main>
        <Search />
        <CurrentWeather />
        <HourlyForecast />
      </main>
    )
  }
}
export default App
