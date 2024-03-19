import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      return (
        <nav className={isDarkTheme ? 'navbar-dark' : 'navbar'}>
          <Link to="/">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              alt="website logo"
              className="nav-img"
            />
          </Link>
          <ul className="nav-list">
            <Link to="/">
              <li className={isDarkTheme ? 'nav-item-dark' : 'nav-item'}>
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className={isDarkTheme ? 'nav-item-dark' : 'nav-item'}>
                About
              </li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-button"
            data-testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="nav-img"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
