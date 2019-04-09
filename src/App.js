import React, {
  Component
} from 'react';
import logo from './logo.svg';
import HogwartsContainer from './components/HogwartsContainer'
import HogwartsHouse from './components/HogwartsHouse'
import './App.css';
import adapter from './adapter.js'


class App extends Component {
  state = {
    char: []
  }

  componentDidMount() {
    this.charFetch()
  }

  charFetch = () => {

    return adapter.get()
      .then(charJSON => {

        this.setState({
          char: charJSON
        }, () => console.log("char fetched executed" + this.state.char))
      })
  }

  editChar = (char) => {
    adapter.patch(char)
  }


  // EDIT
  changeHouse = (e) => {

    const stateCopy = [...this.state.char]
    let foundCharacter = stateCopy.find(char => char.id === e.target.id)

    foundCharacter.house = e.target.value



    this.setState({
      char: stateCopy
    }, () => this.editChar(foundCharacter))
  }




  render() {
    return (
      <div className="App">
        <div className="container">
        <HogwartsContainer chars={this.state.char} editHouse={this.changeHouse}/>
        <HogwartsHouse chars={this.state.char} editHouse={this.changeHouse}/>
        </div>
      </div>
    );
  }
}

export default App;