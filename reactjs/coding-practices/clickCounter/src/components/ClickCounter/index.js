import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    const {count} = this.state
    console.log(this.state)
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count-number">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button onClick={this.OnIncrement} type="button" className="button">
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
