import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'

class App extends Component {

  state = {
    name: []
  }

  componentWillMount() {
    fetch('https://api.github.com/users/ddmarin94')
      .then(res => res.json()) //We don't need use curly braces with a arrow function with one line.
      .then(res => {
        this.setState({
          name: res.name,
          publicRepos: res.public_repos,
          location: res.location,
          username: res.login,
          followers: res.followers,
          following: res.following,
          loading: false
        })
        console.log(res)
      })
  }

  render() {
    return (
      <div className="App">
          <h2 className="MainTitle">Github Repos Finder</h2>
          <SearchBar />
          <p>Name: {this.state.name}</p>
          <p>Repos: {this.state.publicRepos}</p>
          <p>Location: {this.state.location}</p>
          <p>Username: {this.state.username}</p>
          <p>Followers: {this.state.followers}</p>
          <p>Following: {this.state.following}</p>
      </div>
    );
  }
}

export default App
