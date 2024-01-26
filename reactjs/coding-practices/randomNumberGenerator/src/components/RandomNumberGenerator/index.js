import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  GenerateRandomNum = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div>
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={this.GenerateRandomNum}>
          Generate
        </button>
        <p>{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
