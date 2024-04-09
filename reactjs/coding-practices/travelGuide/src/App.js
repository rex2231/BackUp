import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageCard from './components/PackageCard'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  // failure: 'FAILURE',
  // inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {packageData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))
    this.setState({
      packageData: updatedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  render() {
    const {packageData, apiStatus} = this.state
    return (
      <div className="page-container">
        <div className="page-heading-container">
          <h1 className="page-heading">Travel Guide</h1>
        </div>
        <div>
          {apiStatus === apiStatusConstants.success ? (
            <ul className="package-cards-container">
              {packageData.map(eachPackage => (
                <li key={eachPackage.id}>
                  <PackageCard cardData={eachPackage} />
                </li>
              ))}
            </ul>
          ) : (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
