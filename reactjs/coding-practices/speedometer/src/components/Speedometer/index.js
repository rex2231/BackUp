import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  //   OnAccelerate = () => {
  //     this.setState(prevState => {
  //       if (prevState.speed < 100) {
  //         return {speed: prevState.speed + 10}
  //       } else {
  //         return prevState
  //       }
  //     })
  //   }

  //   OnBreak = () => {
  //     this.setState(prevState => {
  //       if (prevState.speed > 0) {
  //         return {speed: prevState.speed - 10}
  //       } else {
  //         return prevState
  //       }
  //     })
  //   }

  OnAccelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : prevState.speed,
    }))
  }

  OnBreak = () => {
    this.setState(prevState => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : prevState.speed,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h3>Speed is {speed}mph</h3>
        <p>Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button type="button" onClick={this.OnAccelerate}>
            Accelerate
          </button>
          <button type="button" onClick={this.OnBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
