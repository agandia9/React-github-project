import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'

class App extends Component {

  state = {
    name: []
  }

  componentWillMount(props) {
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
        photo: res.avatar_url,
        loading: false
      })
      console.log(res)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='Card'>
        <SearchBar />
        <img className='Picture' src={this.state.photo} alt='profile img' />
        <p>Name: {this.state.name}</p>
        <p>Repos: {this.state.publicRepos}</p>
        <p>Location: {this.state.location}</p>
        <p>Username: {this.state.username}</p>
        <p>Followers: {this.state.followers}</p>
        <p>Following: {this.state.following}</p>
        </div>
      </div>
    );
  }
}

export default App
