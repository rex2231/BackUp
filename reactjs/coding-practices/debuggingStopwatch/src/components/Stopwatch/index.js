import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  //   componentDidMount() {
  //     const {isTimerRunning} = this.state
  //     console.log('componentDidMount')
  //     if (isTimerRunning) {
  //       this.updateTime()
  //     }
  //   }

  //   componentWillUnmount() {
  //     clearTimeout(this.timeInterval)
  //     console.log('componentWillUnmount')
  //   }

  onStopTimer = () => {
    console.log('stopTimer')
    this.setState({isTimerRunning: false})
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    console.log('updateTime')
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    } else {
      clearInterval(this.timerInterval)
    }
  }

  onStartTimer = () => {
    console.log('startTimer')
    this.setState({isTimerRunning: true})
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  onResetTimer = () => {
    console.log('resetTimer')
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    console.log('render')
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
