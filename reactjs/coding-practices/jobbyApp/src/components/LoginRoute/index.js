import {Component} from 'react'

class LoginRoute extends Component {
  render() {
    state = {username: '', password: ''}

    onChangeUsername = event => {
      this.setState({username: event.target.value})
    }

    onChangePassword = event => {
      this.setState({password: event.target.value})
    }

    renderUsernameField = () => {
      const {username} = this.state
      return (
        <>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={this.onChangeUsername}
          />
        </>
      )
    }

    renderPasswordField = () => {
      const {password} = this.state
      return (
        <>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="text"
            value={password}
            id="password"
            onChange={this.onChangeUsername}
          />
        </>
      )
    }

    return (
      <div className="login-form-container">
        <h1>LoginRoute</h1>
        <form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <div>{renderUsernameField()}</div>
          <div>{renderPasswordField()}</div>
        </form>
      </div>
    )
  }
}

export default LoginRoute
