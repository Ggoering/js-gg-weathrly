import React, { Component } from 'react'

class Search extends Component{
  render() {
    return (
      <section>
    <input type="text" placeholder="Type in your City/State/Zipcode"/>
    <input type="submit"/>
    </section>
    )
  }
}

export default Search
