import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.onSubscribed}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
