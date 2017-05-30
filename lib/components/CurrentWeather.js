import React, { Component } from 'react';

class CurrentWeather extends Component {
  constructor() {
    super()
    this.state = {
      city: "Denver",
      condition: "nice :)",
      day: "Tuesday",
      temperature: "75 deg",
      high: "90 deg",
      low: "65 deg",
      summary: "friggin' nice"
    }
  }
  render() {
    let {city, condition, day, temperature, high, low, summary} = this.state
    return (
      <section>
        <ul>
          <li>{city}</li>
          <li>{condition}</li>
          <li>{day}</li>
          <li>{temperature}</li>
          <li>{high}</li>
          <li>{low}</li>
          <li>{summary}</li>
        </ul>
      </section>    
    )
  }
}

export default CurrentWeather
