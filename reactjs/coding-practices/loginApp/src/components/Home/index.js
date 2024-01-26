import {Component} from 'react'

import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  LoginToggle = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
    }))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="login-card">
          <Message state={isLogin} />
          {isLogin === false ? (
            <Login onClick={this.LoginToggle} />
          ) : (
            <Logout onClick={this.LoginToggle} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
