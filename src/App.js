import React, { Component } from 'react';
import './App.css';

import CharacterContainer from './container/CharacterContainer'
import HouseContainer from './container/HouseContainer'


class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/potter_stuff')
    .then(res => res.json())
    .then(this.setCharacters)
  }

  setCharacters = (characters) => {
    this.setState({characters})
  }

  render() {
    return (
      <div>
        <CharacterContainer characters={this.state.characters}/>
        <HouseContainer characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
