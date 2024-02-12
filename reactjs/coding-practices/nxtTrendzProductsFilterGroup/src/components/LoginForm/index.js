import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({username: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          {' '}
          USERNAME{' '}
        </label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={this.onChangeUsername}
          className="username-input-field"
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const previewPassword = showPassword ? password : '****'
    return (
      <>
        <label className="input-label" htmlFor="username">
          {' '}
          PASSWORD
        </label>
        <input
          type="password"
          value={previewPassword}
          id="password"
          onChange={this.onChangePassword}
          className="password-input-field"
          placeholder="Password"
        />
      </>
    )
  }

  onSubmitSuccess = jwtToken => {
    this.setState({showSubmitError: false})
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailed = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onSubmitLogin = async event => {
      event.preventDefault()
      const {username, password,} this.state
      const userDetails = {username, password}
      const url = 'https://apis.ccbp.in/login'
      const options = {
          method: 'POST',
          body: JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
          this.onSubmitSuccess(data.jwtToken)
      }
      else {
          this.onSubmitFailed(data.error_msg)
      }}

      onShowPassword = () => {
                const passwordField = document.getElementById('password')
                this.setState(prevState = {
                    showPassword: !prevState.showPassword
                })
          }

      render() {
          const {showSubmitError, errorMsg, showPassword} = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
              const {history} = this.props 
              history.replace('/')
          }

          return (
              <div className='login-form-container'>
                  <div className='login-card'>
                      <img src='/home/workspace/reactjs/coding-practices/nxtTrendzProductsFilterGroup/src/images/websiteLogo.png' alt='login website logo' className='website-logo'/>
                      <form onSubmit={this.onSubmitLogin}>
                          <div className='input-container'>
                              {this.renderUsernameField()}
                          </div>
                          <div className='input-container'>
                              {this.renderPasswordField()}
                          </div>
                          <div className='show-password-container'>
                              <input type='checkbox' htmlFor='showPasswordCheckbox' onClick={this.onShowPassword}/>
                              <label id='showPasswordCheckbox'>Show Password</label>
                          </div>  
                          <button type='submit' className='login-button'>
                              Login
                          </button>
                          {showSubmitError && <p className="error-message">{errorMsg}</p>}
                      </form>
                  </div>
              </div>
          )
      }
  }
}
