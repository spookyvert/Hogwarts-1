import React from 'react';


const CharItem = (props) => {


  return (
    <div>
      <div className= "card"  >
        <img className="card-img-top" src={props.character.image1} alt={props.character.name} />
        <div className="card-body">
           <span><b>{props.character.name}</b></span>
           <br />
           <span id="small"><i>House of {props.character.house}</i></span>
        </div>
        <div>
          <span id="small"> change house</span>
          <br />
      <select id={props.character.id} onChange={ (e) => {props.editHouse(e)} }>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
          <option value="HufflePuff">HufflePuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
      </select>

    </div>
      <br />
      </div>
    </div>


  )
}

export default CharItem