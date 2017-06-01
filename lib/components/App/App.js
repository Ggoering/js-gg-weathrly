import React, { Component } from 'react';
import Search from '../search/search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'
import HourlyForecast from '../HourlyForecast/HourlyForecast.js'
import TenDayForecast from '../TenDayForeCast/TenDayForecast.js'
import 'whatwg-fetch';
import dummyData from '../../../dummyData'
import './App.css'

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
this.state = {
  currentWeather: {
    location: dummyData.current_observation.display_location.full,
    temp: dummyData.current_observation.temp_f,
    condition: dummyData.current_observation.weather,
    high: dummyData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: dummyData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: dummyData.forecast.txt_forecast.forecastday[0].fcttext
  },
  sevenHour: [],
  tenDay: []

}
  }

  

  componentDidMount() {
    for (let i = 0; i < 7; i++) {
    this.state.sevenHour.push({hour: dummyData.hourly_forecast[i].FCTTIME.civil,
    temp: dummyData.hourly_forecast[i].temp.english})
    this.setState(this.state.sevenHour)
    }
    for (let i = 0; i < 10; i++) {
    this.state.tenDay.push({dayName: dummyData.forecast.simpleforecast.forecastday[i].date.weekday, high: dummyData.forecast.simpleforecast.forecastday[i].high.fahrenheit , low: dummyData.forecast.simpleforecast.forecastday[i].low.fahrenheit, condition: dummyData.forecast.simpleforecast.forecastday[i].conditions})
    this.setState(this.state.tenDay)
    }

}

//     componentDidMount() {

//       var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/CA/San_Francisco.json'
//       fetch(url).then(response => response.json()).then(data => console.log(data));
// }

render() {
  // console.log(this.state, dummyData)

  console.log(this.state.tenDay);
    return (
      <main className="main">
        <Search />
        <CurrentWeather weatherData={this.state.currentWeather} />
        <HourlyForecast className="hourly-forecast" hourData={this.state.sevenHour}/>
        <TenDayForecast className="ten-day-forecast" weeklyData={this.state.tenDay}/>
      </main>
    )
  }
}
export default App
