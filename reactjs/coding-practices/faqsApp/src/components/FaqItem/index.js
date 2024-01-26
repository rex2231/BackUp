import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  toggelAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {faq} = this.props
    const {questionText, answerText} = faq
    const {showAnswer} = this.state

    return (
      <li>
        <div>
          <h1>{questionText}</h1>
          <button type="button" onClick={this.toggelAnswer}>
            {showAnswer ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
                alt="plus"
              />
            )}
          </button>
        </div>
        {showAnswer ? (
          <div>
            <p>{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}
export default FaqItem
