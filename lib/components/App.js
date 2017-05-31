import React, { Component } from 'react';
import Search from './search';
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast.js'
import TenDayForecast from './TenDayForecast.js'
import 'whatwg-fetch';
import dummyData from '../../dummyData.js'


class App extends Component {

//     componentDidMount() {

//       var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/CA/San_Francisco.json'
//       fetch(url).then(response => response.json()).then(data => console.log(data));
// }

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
