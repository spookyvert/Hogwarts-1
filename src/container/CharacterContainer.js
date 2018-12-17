import React, { Component } from 'react'

import Character from '../components/Character'
import Search from '../components/Search'

class CharacterContainer extends Component {
  state = {
    searchTerm: ''
  }

  handleSearch = (e) => {
    let searchTerm = e.target.value
    this.setState({searchTerm})
  }

  filterCharacterList = () => {
    if (this.state.searchTerm.length > 0) {
      return this.props.characters.filter(character => character.name.includes(this.state.searchTerm) || character.house.includes(this.state.searchTerm))
    }else{
      return this.props.characters
    }
  }

  createCharacters = () => {
    // return this.props.characters.map(character => <Character key={character.name} image={character.image1} handleChange={this.props.handleChange} character={character} context='characterContainer'/>)
    return this.filterCharacterList().map(character => <Character key={character.name} image={character.image1} handleChange={this.props.handleChange} character={character} context='characterContainer'/>)
  }

  render(){
    console.log(this.state);
    return(
    <div>
      <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
      {this.createCharacters()}
    </div>
    )
  }
}

export default CharacterContainer
