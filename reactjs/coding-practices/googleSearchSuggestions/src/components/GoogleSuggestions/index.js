import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const onSuggestion = suggestion => {
      const inputEle = document.getElementById('inputElement')
      inputEle.value = suggestion
      this.setState({searchInput: suggestion})
    }
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-box"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              id="inputElement"
            />
          </div>
          <ul className="suggestions-list">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestion={eachItem}
                key={eachItem.id}
                suggestionFunc={onSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
