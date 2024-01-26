import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackState: true}

  render() {
    const {resources} = this.props
    const {feedbackState} = this.state

    const onFeedBack = () => {
      this.setState({feedbackState: false})
    }

    const MainCard = () => (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="reactions-container">
          {resources.emojis.map(eachItem => (
            <li key={eachItem.id} className="reaction-item">
              <button className="button" type="button" onClick={onFeedBack}>
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji-img"
                />
              </button>
              <p className="emoji-name">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </>
    )

    const ThankyouCard = () => (
      <>
        <div className="thankyou-container">
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="emoji-img"
          />
          <h1 className="thankyou-heading">Thank You</h1>
          <p className="thankyou-description">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </>
    )

    return (
      <div className="bg-container">
        <div className="container-card">
          {feedbackState ? MainCard() : ThankyouCard()}
        </div>
      </div>
    )
  }
}

export default Feedback
