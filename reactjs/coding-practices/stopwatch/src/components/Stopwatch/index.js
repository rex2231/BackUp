import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerStatus: false, timeLeft: 0}

  start = () => {
    console.log('start')
    this.setState({timerStatus: true})
    this.timerId = setInterval(this.countdown, 1000)
  }

  stop = () => {
    console.log('stop')
    this.setState({timerStatus: false})
    clearInterval(this.timerId)
  }

  countdown = () => {
    console.log('countDown')
    const {timerStatus} = this.state
    if (timerStatus === true) {
      this.setState(prevState => ({timeLeft: prevState.timeLeft + 1}))
    } else {
      clearInterval(this.timerId)
    }
  }

  onReset = () => {
    console.log('reset')
    this.setState({timeLeft: 0, timerStatus: false})
    clearInterval(this.timerId)
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  render() {
    const {timeLeft} = this.state
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-card">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{this.formatTime(timeLeft)}</h1>
          <div className="buttons-container">
            <button type="button" className="button" onClick={this.start}>
              Start
            </button>
            <button type="button" className="button" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
