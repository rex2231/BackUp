import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    Firstname: '',
    Lastname: '',
    isLoggedin: false,
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
  }

  onAnotherResponse = () => {
    this.setState({isLoggedin: false})
  }

  renderSuccess = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  renderLogin = () => {
    const {isLastNameEmpty, isFirstNameEmpty} = this.state
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            id="firstname"
            onChange={this.changeFirstname}
            placeholder="First name"
            onBlur={this.validateFirstName}
          />
          {isFirstNameEmpty && <p>Required</p>}
          <label htmlFor="lastname">Last NAME</label>
          <input
            type="text"
            id="lastname"
            onChange={this.changeLastname}
            placeholder="Last name"
            onBlur={this.validateLastName}
          />
          {isLastNameEmpty && <p>Required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const {Firstname, Lastname} = this.state

    if (Firstname === '' && Lastname === '') {
      this.setState({
        isLoggedin: false,
        isFirstNameEmpty: true,
        isLastNameEmpty: true,
      })
    } else if (Firstname === '') {
      this.setState({
        isLoggedin: false,
        isFirstNameEmpty: true,
      })
    } else if (Lastname === '') {
      this.setState({
        isLoggedin: false,
        isLastNameEmpty: true,
      })
    } else {
      this.setState({isLoggedin: true})
    }
  }

  validateFirstName = () => {
    const {Firstname} = this.state
    this.setState({isFirstNameEmpty: Firstname === ''})
  }

  validateLastName = () => {
    const {Lastname} = this.state
    this.setState({isLastNameEmpty: Lastname === ''})
  }

  changeFirstname = event => {
    this.setState({Firstname: event.target.value})
  }

  changeLastname = event => {
    this.setState({Lastname: event.target.value})
  }

  render() {
    const {isLoggedin} = this.state

    return (
      <div>
        <h1>Registration</h1>
        {isLoggedin ? this.renderSuccess() : this.renderLogin()}
      </div>
    )
  }
}

export default RegistrationForm
