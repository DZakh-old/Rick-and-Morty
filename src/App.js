import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Shrek'
        },
        {
          name: 'Ice cube'
        },
        {
          name: 'Yellow'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
          <ul>
            {this.state.monsters.map(monster => (
              <li key={monster.name}>{monster.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
