import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'TA',
  changeLanguage: lang => {
    console.log(lang)
  },
})

export default LanguageContext
