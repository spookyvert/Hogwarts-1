import React from 'react'

class Character extends React.Component {
  state = {
    clicked: false
  }


  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return(
      <div>
        {this.props.context === 'characterContainer' ?
        <div>
          <img src={this.props.character.image1} alt="potter"/>
          <h2>name: {this.props.character.name}</h2>
          <h4>house: {this.props.character.house}</h4>
        </div>
        :
        <div>
          <img onClick={this.handleClick} src={this.props.character.image2} alt="potter"/>
            {this.state.clicked &&
              <div>
                <h5>name: {this.props.character.name}</h5>
                <h5>house: {this.props.character.house}</h5>
                <h5>age: {this.props.character.age}</h5>
                <h5>role: {this.props.character.role}</h5>
              </div>
            }
        </div>
      }
      </div>
    )
  }
}

export default Character
