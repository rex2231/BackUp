import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTabId = () => {
    updateTabId(tabId)
  }

  const activeTabClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
