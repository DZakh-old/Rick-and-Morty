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
      filteredCharacters: [],
      searchBarValue: '',
      nextApiPage: 'https://rickandmortyapi.com/api/character/'
    };
  }

  updateFilteredCharacters = () => {
    const { characters, searchBarValue } = this.state;
    this.setState({
      filteredCharacters: searchBarValue
        ? [
            ...characters.filter(character =>
              character.name.toLowerCase().includes(searchBarValue.toLowerCase())
            )
          ]
        : [...characters]
    });
  };

  loadCharacters = async () => {
    const { nextApiPage, characters } = this.state;
    if (nextApiPage === ':') return;
    try {
      const res = await fetch(nextApiPage);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const { results, info } = await res.json();
      await this.setState({
        characters: [...characters, ...results],
        nextApiPage: info.next
      });
      this.updateFilteredCharacters();
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    this.setState({ searchBarValue: e.target.value });
  };

  async componentDidMount() {
    await this.loadCharacters();
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (this.state.searchBarValue !== nextState.searchBarValue) {
      this.updateFilteredCharacters();
      return true;
    }
    if (nextState.nextApiPage !== ':' && nextState.filteredCharacters.length < 20) {
      await this.loadCharacters();
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>RICK AND MORTY</h1>
          <SearchBar placeholder="Search characters" handleChange={this.handleChange} />
          <CardList characters={this.state.filteredCharacters} />
        </header>
      </div>
    );
  }
}

export default App;
