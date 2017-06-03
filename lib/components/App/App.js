import React, { Component } from 'react';
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'
import HourlyForecast from '../HourlyForecast/HourlyForecast.js'
import TenDayForecast from '../TenDayForeCast/TenDayForecast.js'
import 'whatwg-fetch';
import dummyData from '../../../dummyData'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {
        location: '',
        temp: '',
        condition: '',
        high: '',
        low: '',
        summary: '',
      },
      sevenHour: [],
      tenDay: [],
      location: ''
    }
  }

  scrubData(data) {
    let tenDayArray = [];
    let sevenHourArray = [];
    let sevenHour;
    let tenDay;

    for (let i = 0; i < 7; i++) {
      sevenHourArray.push({hour: data.hourly_forecast[i].FCTTIME.civil,
      temp: data.hourly_forecast[i].temp.english})
    }

    for (let i = 0; i < 10; i++) {
      tenDayArray.push({dayName: data.forecast.simpleforecast.forecastday[i].date.weekday, high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit , low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit, condition: data.forecast.simpleforecast.forecastday[i].conditions})
    }

    let scrubbedData = {
      currentWeather: {
        location: data.current_observation.display_location.full,
        temp: data.current_observation.temp_f,
        condition: data.current_observation.weather,
        high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: data.forecast.txt_forecast.forecastday[0].fcttext
      },
      sevenHour: sevenHourArray,
      tenDay: tenDayArray,
      }

      return scrubbedData
    }

  componentDidMount() {
if (localStorage.length) {
  this.handleSubmit(localStorage.getItem('lastLocation'))
}
}


  handleSubmit(string) {
    this.setState({location: string}, this.getData)
    localStorage.setItem('lastLocation', string)
  }


  getData() {
    var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/'
    + this.state.location + '.json'
    fetch(url).then(response => response.json()).then(data => {
      const cleanData = this.scrubData(data)
      this.setState({currentWeather: cleanData.currentWeather})
      this.setState({sevenHour: cleanData.sevenHour})
      this.setState({tenDay: cleanData.tenDay})
    });
  }

  // componentDidMount() {
  //
  //   var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/CA/San_Francisco.json'
  //   fetch(url).then(response => response.json()).then(data => console.log(data));
  // }

  render() {
      // console.log(this.scrubData(dummyData));
      return (
        <main className="main">
          <Search handleSubmit={this.handleSubmit.bind(this)}
                  getData = {this.getData.bind(this)}/>
          <CurrentWeather weatherData={this.state.currentWeather} />
          <HourlyForecast className="hourly-forecast" hourData={this.state.sevenHour}/>
          <TenDayForecast className="ten-day-forecast" weeklyData={this.state.tenDay}/>
        </main>
      )
    }

    // console.log(dummyData);
    // //location
    // console.log(dummyData.current_observation.display_location.full)
    // //tempreature
    // console.log(dummyData.current_observation.temp_f);
    // //weather description
    // console.log(dummyData.current_observation.weather);
    // //high daily
    // console.log(dummyData.forecast.simpleforecast.forecastday[0].high.fahrenheit);
    // //low daily
    // console.log(dummyData.forecast.simpleforecast.forecastday[0].low.fahrenheit);
    // //weather summary
    // console.log(dummyData.forecast.txt_forecast.forecastday[0].fcttext);
}


export default App
