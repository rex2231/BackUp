const TabItem = props => {
  const {tabItem, changeCategory} = props
  const {displayText, tabId} = tabItem

  const categoryChange = () => {
    changeCategory(tabId)
  }
  return (
    <li>
      <button type="button" onClick={categoryChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
