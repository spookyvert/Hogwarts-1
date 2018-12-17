import React from 'react'

import House from '../components/House'

class HouseContainer extends React.Component {

  state = {
    houses: ['Gryffindor', 'Slytherin', 'HufflePuff', 'Ravenclaw']
  }

  displayHouse = () => {
    return this.state.houses.map(house => <House house={house} characters={this.props.characters} /> )
  }

  render() {
    return(
      <div className='house-container'>
        {this.displayHouse()}
      </div>
    )
  }
}

export default HouseContainer
