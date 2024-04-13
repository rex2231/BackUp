import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min'

class LoginRoute extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {user_id: username, pin: password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="page">
        <div className="login-card">
          <div className="login-card-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-card-image"
            />
          </div>
          <form className="login-form" onSubmit={this.submitForm}>
            <h1>Welcome Back!</h1>
            <label htmlFor="userId" className="input-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              placeholder="Enter User ID"
              className="form-input-field"
              onChange={this.onUsernameChange}
              value={username}
            />
            <label htmlFor="password" className="input-label">
              PIN
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter PIN"
              className="form-input-field"
              onChange={this.onPasswordChange}
              value={password}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
