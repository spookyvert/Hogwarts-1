import React from 'react';
import CharItemAlt from './CharItemAlt'


const HogwartsHouse = (props) => {

  const gryfCards = props.chars.map(char => {
    if (char.house === "Gryffindor") {
      return <CharItemAlt key = {
        char.id
      }
      character = {
        char
      }
      editHouse = {
        props.editHouse
      }
      />
    }
  })

  const slyCards = props.chars.map(char => {
    if (char.house === "Slytherin") {
      return <CharItemAlt key = {
        char.id
      }
      character = {
        char
      }
      editHouse = {
        props.editHouse
      }
      />
    }
  })

  const huffCards = props.chars.map(char => {
    if (char.house === "HufflePuff") {
      return <CharItemAlt key = {
        char.id
      }
      character = {
        char
      }
      editHouse = {
        props.editHouse
      }
      />
    }
  })

  const raveCards = props.chars.map(char => {
    if (char.house === "Ravenclaw") {
      return <CharItemAlt key = {
        char.id
      }
      character = {
        char
      }
      editHouse = {
        props.editHouse
      }
      />
    }
  })

  return (
    <div >

    <div className = "Gryffindor" >

      <h2> House of Gryffindor </h2>
      <div className="row">
    {gryfCards}
    </div>
  </div>


    <div className = "Slytherin" >

      <h2> House of Slytherin </h2>
      <div className="row">
    {slyCards}
    </div>
  </div>


    <div className = "HufflePuff" >
      <h2> House of HufflePuff </h2>
      <div className="row">
     {huffCards}
    </div>
  </div>


    <div className = "Ravenclaw" >
      <h2> House of Ravenclaw </h2>
      <div className="row">
    {raveCards}
     </div>
   </div>

    </div>


  )
}

export default HogwartsHouse