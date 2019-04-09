import React, {
  Component
} from 'react';
import CharList from './CharList'
import CharacterForm from './CharacterForm'




export default class HogwartsContainer extends Component {

  render() {

    return ( <
      div className = "HogwartsContainer" >


      <
      CharList chars = {
        this.props.chars
      }
      editHouse = {
        this.props.editHouse
      }
      />

      <
      CharacterForm / >


      <
      /
      div >
    )
  }
}