import {Component} from 'react'
import Header from '../Header'
import TimeLeft from '../TimeLeft'
import './index.css'

class AssessmentPage extends Component {
  renderAssesmentContainer = () => (
    <div className="question-container">
      <div>
        <h1 className="question">Question 1: What is Your Name</h1>
        <hr className="break-line" />
      </div>
      <div className="next-question-button-container">
        <button type="button" className="next-question-button">
          Next Question
        </button>
      </div>
    </div>
  )

  render() {
    return (
      <div className="page">
        <Header />
        <div className="assessment-container">
          {this.renderAssesmentContainer()}
          <div className="time-left-container">
            <h1>time left</h1>
            <TimeLeft />
          </div>
        </div>
      </div>
    )
  }
}

export default AssessmentPage
