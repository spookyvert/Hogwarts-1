import React, {
  Component
} from 'react';
import adapter from '../adapter.js'


export default class CharacterForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const newChar = {
      name: event.target.children[0].value,
      age: +event.target.children[1].value,
      role: event.target.children[2].value,
      house: event.target.children[3].value,
      image1: event.target.children[4].value,
      image2: event.target.children[5].value

    }
    if (newChar.name != "" && newChar.image2 != "") {
      adapter.post(newChar)
    }

  }

  render() {

      return ( <
          div >
          <label> Add New Character</label> <
          form onSubmit = {
            event => this.handleSubmit(event)
          } >
          <
          input type = "text"
          name = "name"
          placeholder = "name" / >
          <
          input type = "text"
          name = "age"
          placeholder = "age" / >

          <select name = "role" >
      <option value = "student" > student < /option>
        <option value = "professor" > professor < /option>
       < /select >

      <select name = "house" >
      <option value = "Gryffindor" > Gryffindor < /option> <
      option value = "Slytherin" > Slytherin < /option> <
      option value = "HufflePuff" > HufflePuff < /option> <
      option value = "Ravenclaw" > Ravenclaw < /option>
       < /select >
       <
      input type = "text"
      name = "image1"
      placeholder = "image1" / >
      <
      input type = "text"
      name = "image2"
      placeholder = "image2" / >
      <
      input type = "submit"
      value = "Submit" / >

      <
      /form> < /
      div >
    )
  }
}