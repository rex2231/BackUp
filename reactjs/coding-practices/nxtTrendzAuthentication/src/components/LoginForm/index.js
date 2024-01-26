import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', isLoginFailed: false, errorMsg: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value, isLoginFailed: false})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value, isLoginFailed: false})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.setState({isLoginFailed: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isLoginFailed, errorMsg} = this.state
    return (
      <div className="login-form">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.submitForm}>
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            placeholder="UserName"
            type="text"
            onChange={this.onUsernameChange}
            value={username}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            placeholder="password"
            type="password"
            onChange={this.onPasswordChange}
            value={password}
          />
          <button type="submit">Login</button>
          {isLoginFailed ? <p>{`*${errorMsg}`}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
