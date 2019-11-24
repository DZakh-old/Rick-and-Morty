import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const monsters = await res.json();
      this.setState({ monsters });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>World Monsters!</h1>
          <ul>
            {this.state.monsters.map(monster => (
              <li key={monster.id}>{monster.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
