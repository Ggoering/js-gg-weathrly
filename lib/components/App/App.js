import React, { Component } from 'react';
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'
import HourlyForecast from '../HourlyForecast/HourlyForecast.js'
import TenDayForecast from '../TenDayForeCast/TenDayForecast.js'
import 'whatwg-fetch';
import dummyData from '../../../dummyData'
import './App.css'
import Container from '../Container/Container'

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
      location: '',
      tabView: 'Hourly View'
    }
  }

  scrubData(data) {
    let tenDayArray = [];
    let sevenHourArray = [];
    let sevenHour;
    let tenDay;

    for (let i = 0; i < 7; i++) {
      sevenHourArray.push({hour: data.hourly_forecast[i].FCTTIME.civil,
      temp: data.hourly_forecast[i].temp.english, condition: data.hourly_forecast[i].condition})
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

  scrubDummyData(data) {
    let tenDayArray = [];
    let sevenHourArray = [];
    let sevenHour;
    let tenDay;

    for (let i = 0; i < 7; i++) {
      sevenHourArray.push({hour: dummyData.hourly_forecast[i].FCTTIME.civil,
      temp: dummyData.hourly_forecast[i].temp.english, condition: dummyData.hourly_forecast[i].condition})
    }

    for (let i = 0; i < 10; i++) {
      tenDayArray.push({dayName: dummyData.forecast.simpleforecast.forecastday[i].date.weekday, high: dummyData.forecast.simpleforecast.forecastday[i].high.fahrenheit , low: dummyData.forecast.simpleforecast.forecastday[i].low.fahrenheit, condition: dummyData.forecast.simpleforecast.forecastday[i].conditions})
    }

    let scrubbedData = {
      currentWeather: {
        location: dummyData.current_observation.display_location.full,
        temp: dummyData.current_observation.temp_f,
        condition: dummyData.current_observation.weather,
        high: dummyData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: dummyData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: dummyData.forecast.txt_forecast.forecastday[0].fcttext
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

  handleViewChange(event) {
    this.setState({tabView: event.target.text})
    // console.log(event.target.text)
  }

  getData() {
  //   var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/'
  //   + this.state.location + '.json'
  //   fetch(url).then(response => response.json()).then(dummyData => {
  //     const cleanData = this.scrubData(data)
  //     this.setState({currentWeather: cleanData.currentWeather})
  //     this.setState({sevenHour: cleanData.sevenHour})
  //     this.setState({tenDay: cleanData.tenDay})
  //   }).catch((error) => this.setState({location: 'error'}))
    }

  componentDidMount() {

    const cleanData = this.scrubDummyData(dummyData)
        this.setState({currentWeather: cleanData.currentWeather})
        this.setState({sevenHour: cleanData.sevenHour})
        this.setState({tenDay: cleanData.tenDay})


    // var url = 'http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/CA/San_Francisco.json'
    // fetch(url).then(response => response.json()).then(data => console.log(data));
  }

  render() {
      if (!localStorage.getItem('lastLocation')) {
        return (
          <div>
            <div>Welcome Bruh</div>
            <Search handleSubmit={this.handleSubmit.bind(this)}
                        getData = {this.getData.bind(this)}/>
          </div>
        )
      }
      else if (this.state.location === 'error') {
        let styleObj = {backgroundColor: 'black',
        color: 'white'}
        return (
            <div style={styleObj}>
          <Search handleSubmit={this.handleSubmit.bind(this)}
                  getData = {this.getData.bind(this)}/>
                <p>NOOOOOOOOOOOOO!</p></div>)
      }
      return (
        <main className="main">
          <CurrentWeather
            className = "current-weather" weatherData={this.state.currentWeather} />
          <div className="search-card-wrapper">
          <Search handleSubmit={this.handleSubmit.bind(this)}
                    getData = {this.getData.bind(this)}/>
          <Container
            className="container"
            weeklyData={this.state.tenDay}
            hourData={this.state.sevenHour}
            tabView={this.state.tabView}
            handleViewChange={(event) => {this.handleViewChange(event)}}
          />
        </div>
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
