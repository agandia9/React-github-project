import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    //We don't need the code below because we are using the bing that arrow function includes! :D
    //this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  handleSubmit = (event) => {
    console.log(this.state.value)
    this.setState({value: ''})
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <h1 className='MainTitle'> Github Finder </h1>
        <form className='SearchBarPosition' onSubmit={this.handleSubmit}>
          <input placeholder='Username' type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' placeholder='Search' />
        </form>
      </div>
    )
  }
}
export default SearchBar
