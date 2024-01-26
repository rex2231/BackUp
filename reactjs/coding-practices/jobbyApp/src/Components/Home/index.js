import Headers from '../Header'
import './index.css'

const Home = props => {
  const onFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <>
      <Headers />
      <div className="home-bg-container">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary informationl,
          company reviews. Find the job that fits your abilities and potential.
        </p>
        <button type="button" onClick={onFindJobs}>
          Find Jobs
        </button>
      </div>
    </>
  )
}

export default Home
