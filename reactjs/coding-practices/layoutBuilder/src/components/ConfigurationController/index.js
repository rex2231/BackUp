import './index.css'

const ConfigurationController = () => (
  <div className="config-container">
    <h1>Layout</h1>
    <div className="options-container">
      <label className="option-item">
        <input type="checkbox" />
        Content
      </label>
      <label className="option-item">
        <input type="checkbox" />
        Left Navbar
      </label>
      <label className="option-item">
        <input type="checkbox" />
        Right Navbar
      </label>
    </div>
  </div>
)

export default ConfigurationController
