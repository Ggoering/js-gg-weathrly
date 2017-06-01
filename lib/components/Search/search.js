import React, { Component } from 'react'
import './search.css'

class Search extends Component{
  render() {
    return (
    <section className="search-section">
      <input className="search-bar" type="text" placeholder="Type in your City/State/Zipcode"/>
      <input className="submit-button" type="submit"/>
    </section>
    )
  }
}

export default Search
