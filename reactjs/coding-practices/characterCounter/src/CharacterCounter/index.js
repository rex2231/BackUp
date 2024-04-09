import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {listofWords: [], searchInput: ''}

  addWord = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newword = {
      word: searchInput,
      length: searchInput.length,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      listofWords: [...prevState.listofWords, newword],
      searchInput: '',
    }))
  }

  onEnterWords = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {listofWords, searchInput} = this.state
    return (
      <div className="page-container">
        <div className="left-container">
          <div className="left-heading-card">
            <h1>
              Count the characters like a <br /> Boss...
            </h1>
          </div>
          <div className="list-of-words-container">
            {listofWords.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-input-img"
              />
            ) : (
              <ul className="words-list">
                {listofWords.map(eachItem => (
                  <li key={eachItem.id}>
                    <p>
                      {eachItem.word} : {eachItem.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <form className="add-container" onSubmit={this.addWord}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onEnterWords}
              value={searchInput}
              className="search-input"
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
