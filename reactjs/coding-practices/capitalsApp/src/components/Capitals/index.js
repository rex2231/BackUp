import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {currentId: countryAndCapitalsList[0].id}

  hasCountryChange = event => {
    this.setState({currentId: event.target.value})
  }

  render() {
    const {currentId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === currentId,
    )

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <form>
            <select
              id="country"
              name="country"
              onChange={this.hasCountryChange}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={`${eachItem.id}`} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country"> is capital of which country?</label>
          </form>
          <p>{selectedCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
