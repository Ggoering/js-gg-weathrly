import React, { Component } from 'react';
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import 'whatwg-fetch';
import './App.css';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super();
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
      tabView: 'Hourly View',
    };
  }

  scrubData(data) {
    const tenDayArray = [];
    const sevenHourArray = [];

    for (let i = 0; i < 7; i++) {
      sevenHourArray.push({ hour: data.hourly_forecast[i].FCTTIME.civil,
      temp: data.hourly_forecast[i].temp.english, condition: data.hourly_forecast[i].condition });
    }

    for (let i = 0; i < 10; i++) {
      tenDayArray.push({ dayName: data.forecast.simpleforecast.forecastday[i].date.weekday,
        high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
        low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit,
        condition: data.forecast.simpleforecast.forecastday[i].conditions });
    }

    const scrubbedData = {
      currentWeather: {
        location: data.current_observation.display_location.full,
        temp: data.current_observation.temp_f,
        condition: data.current_observation.weather,
        high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      },
      sevenHour: sevenHourArray,
      tenDay: tenDayArray,
    };

    return scrubbedData;
  }

  handleSubmit(string) {
    string = string.split(', ');
    this.setState({ location: string }, this.getData);
    localStorage.setItem('lastLocation', string);
  }

  handleViewChange(event) {
    this.setState({ tabView: event.target.text });
  }

  getData() {
    const url = `http://api.wunderground.com/api/2e6f0aa46ebc0269/conditions/hourly/forecast10day/q/${this.state.location[1]}/${this.state.location[0]}.json`;
    fetch(url).then(response => response.json()).then(data => {
      const cleanData = this.scrubData(data);
      this.setState({ currentWeather: cleanData.currentWeather });
      this.setState({ sevenHour: cleanData.sevenHour });
      this.setState({ tenDay: cleanData.tenDay });
    })
    .catch((error) => this.setState({ location: 'error' }));
  }

  componentDidMount() {
    if (localStorage.length) {
      this.handleSubmit(localStorage.getItem('lastLocation'));
    }
  }

  render() {
    if (!localStorage.getItem('lastLocation')) {
      return (
        <div className="welcome-screen">
        <h1 className="welcome-text">Welcome Bruh!!!</h1>
        <p> Please enter a city or zip code to get the weather.</p>
        <Search handleSubmit={this.handleSubmit.bind(this)}
                   getData = {this.getData.bind(this)}/>

          </div>
        );
    }
    else if (this.state.location === 'error') {
      return (
        <div className="error-page">
        <h1>Please enter a valid city or zip code.</h1>
        <Search handleSubmit={this.handleSubmit.bind(this)}
                   getData = {this.getData.bind(this)}/>

        </div>
      );
    } return (
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
            handleViewChange={(event) => { this.handleViewChange(event) }} />
        </div>
        </main>
      );
  }
}


export default App;
