import {Component} from 'react'
import LanguageButton from './stylesComponent'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {currentLanguage: 'English'}

  onSetLanguage = language => {
    this.setState({currentLanguage: language})
  }

  render() {
    const {currentLanguage} = this.state

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachItem => (
            <li key={eachItem.id}>
              <LanguageButton
                color={
                  currentLanguage === eachItem.buttonText ? 'white' : '#db1c48'
                }
                bgColor={
                  currentLanguage === eachItem.buttonText ? '#db1c48' : 'white'
                }
                onClick={() => this.onSetLanguage(eachItem.buttonText)}
                value={eachItem.buttonText}
              >
                {eachItem.buttonText}
              </LanguageButton>
            </li>
          ))}
        </ul>
        <div>
          {languageGreetingsList.map(eachItem => {
            if (eachItem.buttonText === currentLanguage) {
              return (
                <img
                  src={eachItem.imageUrl}
                  alt={`${eachItem.imageAltText}`}
                  className="greeting-img"
                  key={eachItem.id}
                />
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }
}

export default App
