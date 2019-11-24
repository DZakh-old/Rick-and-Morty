import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const characters = await res.json();
      this.setState({ characters });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>THE RICK AND MORTY characters</h1>
          <CardList characters={this.state.characters} />
        </header>
      </div>
    );
  }
}

export default App;
