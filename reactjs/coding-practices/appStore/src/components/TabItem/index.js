import './index.css'

const TabItem = props => {
  const {tabItem, toggleTab, isActiveTab} = props
  const {tabId, displayText} = tabItem

  const onClickTab = () => {
    toggleTab(tabId)
  }
  const activeTab = isActiveTab ? 'active-tabItem' : ''

  return (
    <>
      <li className={`tabItem ${activeTab}`} onClick={onClickTab}>
        <button type="button" className="button">
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
