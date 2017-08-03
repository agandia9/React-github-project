import React, { Component } from 'react'

class App extends Component {

  state = {
    repos: []
  }

  componentWillMount() {
    fetch('https://api.github.com/users/ddmarin94/repos')
      .then(res => res.json()) //We don't need use curly braces with a arrow function with one line.
      .then(res => {
        this.setState({
          repos: res,
          loading: false
        })
        console.log(res)
      })
  }

  render() {
    return (
      <div className="App">
          <h2>Github Repos Finder</h2>
          <input placeholder="Search your friends..." />
      </div>
    );
  }
}

export default App
