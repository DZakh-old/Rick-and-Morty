import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchBarValue: ''
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const characters = await res.json();
      this.setState({ characters: characters.results });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { characters, searchBarValue } = this.state;
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchBarValue.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>RICK AND MORTY</h1>
          <SearchBar
            placeholder="Search characters"
            handleChange={e => this.setState({ searchBarValue: e.target.value })}
          />
          <CardList characters={filteredCharacters} />
        </header>
      </div>
    );
  }
}

export default App;
