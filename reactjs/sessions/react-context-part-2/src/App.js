import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './context/LanguageContext'

class App extends Component {
  state = {activeLanguage: 'HI'}

  changeLanguage = newLanguage => {
    this.setState({activeLanguage: newLanguage})
    console.log(newLanguage)
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: () => this.changeLanguage,
        }}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider>
    )
  }
}

export default App
