import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordPage extends Component {
  state = {
    siteName: '',
    userName: '',
    password: '',
    passwordsList: [],
    search: '',
    showPassword: false,
  }

  handleSubmit = event => {
    event.preventDefault()
    const {siteName, userName, password, passwordsList} = this.state
    const newPasswordsList = [
      ...passwordsList,
      {
        id: uuidv4(),
        siteName,
        userName,
        password,
      },
    ]
    this.setState({
      siteName: '',
      userName: '',
      password: '',
      passwordsList: newPasswordsList,
      showPassword: false,
    })
    console.log('submit')
  }

  onSiteName = event => {
    this.setState({siteName: event.target.value})
  }

  onUserName = event => {
    this.setState({userName: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  filterPasswords = () => {
    const {passwordsList, search} = this.state
    return passwordsList.filter(password =>
      password.siteName.toLowerCase().includes(search.toLowerCase()),
    )
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const newFilteredPassword = passwordsList.filter(
      password => password.id !== id,
    )
    this.setState({passwordsList: newFilteredPassword})
  }

  render() {
    const {siteName, userName, password, search, showPassword} = this.state
    const filteredPasswords = this.filterPasswords()
    const passwordCount = filteredPasswords.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="image"
        />
        <div className="top-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Add New Password</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="image"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onSiteName}
                value={siteName}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onUserName}
                value={userName}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onPassword}
                value={password}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container-bar">
            <h1>Your passwords</h1>
            <p>{passwordCount}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="search"
                value={search}
                onChange={this.onSearch}
              />
            </div>
            <div>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={this.handleCheckboxChange}
                id="showPassword"
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
          </div>
          {passwordCount === 0 ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="img"
              />
              <p>No Passwords</p>
            </>
          ) : (
            <ul>
              {filteredPasswords.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passItem={eachItem}
                  showPassword={showPassword}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordPage
