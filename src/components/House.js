import React from 'react'

import Character from './Character'

class House extends React.Component {

  displayCharacters = () => {
    let houseCharacters = this.props.characters.filter(character => character.house === this.props.house)
    return houseCharacters.map(character => <Character character={character} context='house'/>)
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h1>{this.props.house}</h1>
        {this.displayCharacters()}
      </div>
    )
  }
}

export default House
