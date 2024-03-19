import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <h1>Layout</h1>
          <div className="options-container">
            <label className="option-item">
              <input
                type="checkbox"
                checked={showContent}
                onChange={onShowContent}
              />
              Content
            </label>
            <label className="option-item">
              <input
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onShowLeftNavbar}
              />
              Left Navbar
            </label>
            <label className="option-item">
              <input
                type="checkbox"
                checked={showRightNavbar}
                onChange={onShowRightNavbar}
              />
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
