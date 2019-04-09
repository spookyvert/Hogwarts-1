import React from 'react';


const CharItemAlt = (props) => {


  return (
    <div>
      <div class = "card"  >
        <img className="card-img-top" src={props.character.image2} alt={props.character.name} />
        <div className="card-body">
           <h3>{props.character.name}</h3>
           <br />
           <span>House of {props.character.house} </span>
        </div>
        <div>
          <label> change house</label>
          <br />
      <select id={props.character.id} onChange={ (e) => {props.editHouse(e)} }>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
          <option value="HufflePuff">HufflePuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
      </div>
    </div>


  )
}

export default CharItemAlt