import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  OnEatingMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  OnEatingBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="counter-card">
          <h1 className="counter-heading">
            Bob ate <span className="counter-number">{mango}</span> mangoes
            <span className="counter-number"> {banana}</span> bananas
          </h1>
          <div className="counters-container">
            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="counter-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.OnEatingMango}
              >
                Eat mango
              </button>
            </div>
            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="counter-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.OnEatingBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
