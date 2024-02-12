import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => (
      <div className="body-main-container">
        {value.showLeftNavBar && (
          <div className="side-container">
            <p>Left Nav Menu</p>
            <ul className="ul-list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        )}
        {value.showContent && (
          <div className="Body-container">
            <h1>Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam.
            </p>
          </div>
        )}
        {value.showRightNavBar && (
          <div className="side-container">
            <p>Right Navbar</p>
            <p>Box 1</p>
            <p>Box 2</p>
          </div>
        )}
      </div>
    )}
  </ConfigurationContext.Consumer>
)

export default Body
