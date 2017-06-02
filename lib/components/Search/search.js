import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component{
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

submitItems(props) {
  this.props.handleSubmit(this.state.input)
  this.setState({input: ''})
  console.log(this.props)
  console.log(this.state);
}

  render() {
    return (
    <section className="search-section">
      <input className="search-bar" type="text" placeholder="Type in your City/State/Zipcode"
        value = {this.state.input}
        onChange = { (event) => this.setState({
          input: event.target.value
        })}/>
      <input className="submit-button"
                  type="submit"
                  onClick= {() => this.submitItems()}
                  disabled= {!this.state.input}
                />

    </section>
    )
  }
}

// export default Search
