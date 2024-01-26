import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, numberState: 'Even'}

  onIncrement = () => {
    // const {randomNumber, numberState} = this.state

    const NewRandomNumber = Math.floor(Math.random() * 101)
    const NewNumberState = NewRandomNumber % 2 === 0 ? 'Even' : 'Odd'
    this.setState({randomNumber: NewRandomNumber})
    this.setState({numberState: NewNumberState})
  }

  render() {
    const {randomNumber, numberState} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading-1">Count {randomNumber}</h1>
          <p className="heading-2">Count is {numberState}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
