import React, { Component } from 'react'

import Character from '../components/Character'

class CharacterContainer extends Component {

  createCharacters = () => {
    return this.props.characters.map(character => <Character key={character.name} image={character.image1} character={character} context='characterContainer'/>)
  }

  render(){
    return(
    <div>
      {this.createCharacters()}
    </div>
    )
  }
}

export default CharacterContainer
