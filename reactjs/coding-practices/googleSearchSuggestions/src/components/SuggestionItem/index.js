import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestion, suggestionFunc} = this.props
    const onPushArrow = () => {
      suggestionFunc(suggestion.suggestion)
    }
    return (
      <li className="suggestions-container">
        <p>{suggestion.suggestion}</p>
        <button
          type="button"
          className="push-button"
          onClick={() => onPushArrow()}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-img"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
