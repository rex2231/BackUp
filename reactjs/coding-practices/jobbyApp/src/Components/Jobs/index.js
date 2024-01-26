import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  state = {
    employmentType: [],
    salaryRange: 0,
    searchQuery: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getListOfJobs()
  }

  renderSuccessPage = data => {
    console.log(data)
    return <h1>success</h1>
  }

  getListOfJobs = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {employmentType, salaryRange, searchQuery} = this.state

    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentType.join()}&minimum_package=${salaryRange}&search=${searchQuery}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()

    if (response.ok) {
      console.log(data)
      this.setState({apiStatus: apiStatusConstants.success})
    }
  }

  renderLoader = () => <Loader />

  renderFailure = () => <h1>Failure Page</h1>

  LoadJobsPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessPage()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <p>Jobs Page</p>
          {this.LoadJobsPage()}
        </div>
      </>
    )
  }
}

export default Jobs
