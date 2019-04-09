import React from 'react';
import CharItem from './CharItem'


const CharList = (props) => {

  const allCharacters = props.chars.map(char => {

    return <CharItem key={char.id} character={char} editHouse={props.editHouse}/>
  })

  return (

    <div className="CharList">

        <div className="row">
        {allCharacters}

        </div>



     </div>
  )
}

export default CharList