import {Component} from 'react'
import './index.css'

class TimeLeft extends Component {
  state = {countdown: 1}

  timer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        countdown: prevState.countdown + 1,
      }))
    }, 1000)
  }

  click = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {countdown} = this.state
    console.log(countdown)
    return (
      <div className="TimeLeft-container">
        <p>paragraph</p>
        <button onClick={this.click()} type="button">
          click
        </button>
      </div>
    )
  }
}

export default TimeLeft
