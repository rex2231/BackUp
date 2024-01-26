const LanguageFilterItem = props => {
  const {languageItem, selectLanguage} = props
  const {id, language} = languageItem

  const changeLanguage = () => {
    selectLanguage(id)
  }

  return (
    <li>
      <button type="button" onClick={changeLanguage}>
        <p>{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
