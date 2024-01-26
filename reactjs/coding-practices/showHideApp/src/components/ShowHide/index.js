import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstNameStatus: false, lastNameStatus: false}

  showFirstName = () => {
    const {firstNameStatus} = this.state
    console.log(firstNameStatus)
    this.setState(prevState => ({firstNameStatus: !prevState.firstNameStatus}))
  }

  showLastName = () => {
    const {lastNameStatus} = this.state
    console.log(lastNameStatus)
    this.setState(prevState => ({lastNameStatus: !prevState.lastNameStatus}))
  }

  render() {
    const {firstNameStatus, lastNameStatus} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-containers">
          <div className="button-container">
            <button
              type="button"
              onClick={this.showFirstName}
              className="button"
            >
              Show/Hide FirstName
            </button>
            {firstNameStatus && (
              <div className="name-card">
                <p className="name">Joe</p>
              </div>
            )}
            {!firstNameStatus && null}
          </div>
          <div className="button-container">
            <button
              type="button"
              onClick={this.showLastName}
              className="button"
            >
              Show/Hide LastName
            </button>
            {lastNameStatus && (
              <div className="name-card">
                <p className="name">Jonas</p>
              </div>
            )}
            {!lastNameStatus && null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
