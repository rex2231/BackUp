import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {slideNo: 0}

  rightArrow = () => {
    const {slideNo} = this.state
    console.log(slideNo)
    if (slideNo < 3) {
      this.setState(prevState => ({
        slideNo: prevState.slideNo + 1,
      }))
    }
  }

  leftArrow = () => {
    const {slideNo} = this.state
    console.log(slideNo)
    if (slideNo > 0) {
      this.setState(prevState => ({
        slideNo: prevState.slideNo - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {slideNo} = this.state
    const currentReview = reviewsList[slideNo]
    // console.log(slideNo)
    // const reviews = () =>
    //   reviewsList.map(eachReview => (
    //   ))

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-card">
          <button
            type="button"
            className="arrow-button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="review-container">
            <img
              src={currentReview.imgUrl}
              alt={currentReview.username}
              className="profile-img"
            />
            <p className="user-name">{currentReview.username}</p>
            <p className="company-name">{currentReview.companyName}</p>
            <p className="review">{currentReview.description}</p>
          </div>

          <button
            type="button"
            className="arrow-button"
            onClick={this.leftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
