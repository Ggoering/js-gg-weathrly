import React, { Component } from 'react'
import './Search.css'

class Search extends Component{
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

submitItems() {

}

  render() {
    return (
    <section className="search-section">
      <input className="search-bar" type="text" placeholder="Type in your City/State/Zipcode"
        value = {this.state.input}
        onChange = { (event) => this.setState({
          input: event.target.value
        })}/>
      <input className="submit-button" type="submit"/>
    </section>
    )
  }
}

export default Search
