import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {isSaved: false, inputText: ''}

  toggleSave = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  handleInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isSaved, inputText} = this.state
    return (
      <div className="bg-container">
        <div className="input-card">
          <h1>Editable Text Input</h1>
          <div className="input-button-container">
            {isSaved ? (
              <p>{inputText}</p>
            ) : (
              <input
                type="text"
                value={inputText}
                onChange={this.handleInputChange}
              />
            )}
            <button
              type="button"
              onClick={this.toggleSave}
              className="save-edit-button "
            >
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
