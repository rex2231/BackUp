import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {StyleButton, TextArea} from './styledComponent'
import './index.css'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onSelectBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onSelectItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onSelectUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <div className="page-bg">
        <div className="page-sub-container">
          <div>
            <h1 className="page-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="text-editor-container">
            <ul className="options-container">
              <li>
                <StyleButton
                  type="button"
                  className="option-button"
                  onClick={this.onSelectBold}
                  color={isBold ? '#faff00' : '#f1f5f9'}
                  data-testid="bold"
                >
                  <VscBold aria-label="bold" />
                </StyleButton>
              </li>
              <li>
                <StyleButton
                  type="button"
                  className="option-button"
                  onClick={this.onSelectItalic}
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                  data-testid="italic"
                >
                  <GoItalic aria-label="italic" />
                </StyleButton>
              </li>
              <li>
                <StyleButton
                  type="button"
                  className="option-button"
                  onClick={this.onSelectUnderline}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                  data-testid="underline"
                >
                  <AiOutlineUnderline aria-label="underline" />
                </StyleButton>
              </li>
            </ul>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
