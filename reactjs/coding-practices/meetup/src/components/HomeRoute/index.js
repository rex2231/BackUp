import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const HomeRoute = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, topic} = value
      return (
        <div className="page-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="home-body-container">
            {!isRegistered ? (
              <div className="welcome-container">
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <Link to="/register">
                  <button type="button" className="register-button">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <h1>Hello {name}</h1>
                <p>Welcome to {topic}</p>
              </>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default HomeRoute
