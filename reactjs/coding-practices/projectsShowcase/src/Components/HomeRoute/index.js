import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    projectsData: [],
    currentCategory: 'ALL',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjectData()
  }

  getProjectData = async () => {
    const {currentCategory} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/ps/projects?category=${currentCategory}`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        imageUrl: eachProject.image_url,
        name: eachProject.name,
      }))
      this.setState({
        projectsData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSelectOption = event => {
    this.setState({currentCategory: event.target.value}, this.getProjectData)
  }

  renderProjectsPage = () => {
    const {apiStatus, projectsData} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <ul className="projects-container">
            {projectsData.map(eachProject => (
              <li key={eachProject.id} className="project-card">
                <img
                  src={eachProject.imageUrl}
                  alt={eachProject.name}
                  className="project-card-image"
                />
                <p className="project-title">{eachProject.name}</p>
              </li>
            ))}
          </ul>
        )
      case apiStatusConstants.inProgress:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#328af2" />
          </div>
        )
      case apiStatusConstants.failure:
        return (
          <div className="loader-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
              alt="failure view"
              className="failure-view-img"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for.</p>
            <button
              type="button"
              className="retry-button"
              onClick={this.getProjectData}
            >
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="projects-page">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="page-container">
          <select
            onChange={this.onSelectOption}
            className="project-drop-down-menu"
          >
            {categoriesList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
          {this.renderProjectsPage()}
        </div>
      </div>
    )
  }
}

export default HomeRoute
