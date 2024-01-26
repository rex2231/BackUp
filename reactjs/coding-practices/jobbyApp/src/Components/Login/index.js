import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {userName: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {userName, password} = this.state

    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccessful(data)
    } else {
      this.setState({errorMsg: data.error_msg, showErrorMsg: true})
    }
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderLoginForm = () => (
    <>
      <label htmlFor="userName" className="input-label">
        USERNAME
      </label>
      <input
        type="text"
        id="userName"
        className="password-input-field"
        onChange={this.onChangeUsername}
      />
      <label htmlFor="password" className="input-label">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="username-input-field"
        onChange={this.onChangePassword}
      />
    </>
  )

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="login-image"
          />
          <form
            onSubmit={this.onSubmitLogin}
            className="login-form form-container"
          >
            {this.renderLoginForm()}
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="error-message">
              {showErrorMsg ? <p>{errorMsg}</p> : null}
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
