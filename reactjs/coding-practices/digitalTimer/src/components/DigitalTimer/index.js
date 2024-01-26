import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timeLeft: 25 * 60, startClock: false, currTime: 25 * 60}

  onToggleTimer = () => {
    const {startClock} = this.state
    this.setState(prevState => ({startClock: !prevState.startClock}))
    if (!startClock) {
      this.timerId = setInterval(this.countdown, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  countdown = () => {
    const {timeLeft, startClock} = this.state
    if (timeLeft === 1) {
      clearInterval(this.timerId)
    }
    if (startClock === true) {
      this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}))
    }
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  onIncreaseMin = () => {
    const {startClock} = this.state
    if (!startClock) {
      this.setState(prevState => ({
        currTime: prevState.currTime + 60,
        timeLeft: prevState.timeLeft + 60,
      }))
    }
  }

  onDecreaseMin = () => {
    const {startClock} = this.state
    if (!startClock) {
      this.setState(prevState => ({
        currTime: prevState.currTime - 60,
        timeLeft: prevState.timeLeft - 60,
      }))
    }
  }

  onReset = () => {
    const {currTime} = this.state
    this.setState({timeLeft: currTime, startClock: false})
  }

  render() {
    const {startClock, timeLeft, currTime} = this.state

    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="container">
          <div className="timer-bg-container">
            <div className="timer-container">
              <div className="timer">
                <h1 className="time">{this.formatTime(timeLeft)}</h1>
                <p className="status">{startClock ? 'Running' : 'Paused'}</p>
              </div>
            </div>
          </div>
          <div className="timer-settings">
            <div className="startAndReset">
              <div>
                <button
                  className="button timer-setting-text timer-setting-option-container"
                  type="button"
                  onClick={this.onToggleTimer}
                >
                  {startClock ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="icon"
                    />
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="icon"
                    />
                  )}
                  {startClock ? 'Pause' : 'Start'}
                </button>
              </div>
              <div>
                <button
                  className="button timer-setting-text timer-setting-option-container"
                  type="button"
                  onClick={this.onReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon"
                  />
                  reset
                </button>
              </div>
            </div>
            <div className="set-limit-class">
              <p className="set-timer-font">Set Timer Limit</p>
              <div className="adjust-time-container">
                <button
                  className="button time-setting-font-size"
                  type="button"
                  onClick={this.onDecreaseMin}
                >
                  -
                </button>
                <div className="show-time-limit">
                  <p>{currTime / 60} </p>
                </div>
                <button
                  className="button time-setting-font-size"
                  type="button"
                  onClick={this.onIncreaseMin}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
