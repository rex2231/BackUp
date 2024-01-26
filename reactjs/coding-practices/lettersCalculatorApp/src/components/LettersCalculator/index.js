import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div>
            <h1>Calculate the Letters you enter</h1>
            <form>
              <label htmlFor="phraseInput">Enter the phrase</label>
              <br />
              <input
                type="text"
                onChange={this.onSearchInput}
                id="phraseInput"
              />
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
        <div className="count-container">
          <p className="count">No.of letters: {searchInput.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
