import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  OnModeClick = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'Light' ? 'Dark' : 'Light',
    }))
    const card = document.getElementById('card')
    card.classList.toggle('dark-mode')
  }

  render() {
    const {mode} = this.state
    return (
      <div className="bg-container">
        <div className="card" id="card">
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.OnModeClick}>
            {mode === 'Light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
