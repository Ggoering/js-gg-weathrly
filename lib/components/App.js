import React, { Component } from 'react';
import Search from './search';
import CurrentWeather from './CurrentWeather'
class App extends Component {
  render() {
    return (
      <main>
    <Search />
    <CurrentWeather />
    </main>
    )
  }
}
export default App
