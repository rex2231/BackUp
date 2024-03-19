import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
      </div>
      <div>
        <Popup
          trigger={
            <button type="button" data-testid="hamburgerIconButton">
              <GiHamburgerMenu alt="Hamburger Icon" className="ham-button" />
            </button>
          }
          modal
        >
          {close => (
            <div className="popup-container">
              <button
                type="button"
                onClick={close}
                data-testid="closeButton"
                aria-label="Open Menu"
              >
                <IoMdClose />
              </button>
              <ul>
                <li>
                  <Link to="/">
                    <AiFillHome />
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <BsInfoCircleFill />
                    <h1>About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)

export default Header
