import React, { Component } from 'react';
import Search from './search';
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast.js'
import TenDayForecast from './TenDayForecast.js'
import 'whatwg-fetch';
import dummyData from '../../dummyData'

console.log(dummyData);
//location
console.log(dummyData.current_observation.display_location.full)
//tempreature
console.log(dummyData.current_observation.temp_f);
//weather description
console.log(dummyData.current_observation.weather);
//high daily
console.log(dummyData.forecast.simpleforecast.forecastday[0].high.fahrenheit);
//low daily
console.log(dummyData.forecast.simpleforecast.forecastday[0].low.fahrenheit);
//weather summary
console.log(dummyData.forecast.txt_forecast.forecastday[0].fcttext);

class App extends Component {
  constructor() {
    super()

  }
//     componentDidMount() {

//       var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/CA/San_Francisco.json'
//       fetch(url).then(response => response.json()).then(data => console.log(data));
// }

render() {
  // console.log(this.state, dummyData)

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
