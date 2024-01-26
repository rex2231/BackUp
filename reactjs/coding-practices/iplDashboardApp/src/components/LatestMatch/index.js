import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class LatestMatch extends Component {
  state = {
    LatestmatchData: [],
    RecentMatchList: [],
    bannerImage: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getLatestMatchData()
  }

  getLatestMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = this.convertToCamelCase(data.latest_match_details)
    const updatedRecentMatchList = data.recent_matches.map(eachMatch =>
      this.convertToCamelCase(eachMatch),
    )

    this.setState({
      LatestmatchData: updatedData,
      bannerImage: data.team_banner_url,
      RecentMatchList: updatedRecentMatchList,
      isLoading: false,
    })
  }

  convertToCamelCase = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  render() {
    const {
      LatestmatchData,
      bannerImage,
      RecentMatchList,
      isLoading,
    } = this.state

    const latestMatchDetails = () => {
      const {
        competingTeam,
        competingTeamLogo,
        date,
        firstInnings,
        manOfTheMatch,
        result,
        secondInnings,
        umpires,
        venue,
      } = LatestmatchData

      return (
        <div className="first-card">
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <hr />
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      )
    }

    const recentMatchDetails = object => {
      const {competingTeam, competingTeamLogo, matchStatus, result} = object

      return (
        <li>
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <p>{competingTeam}</p>
          <p>{result}</p>
          <p>{matchStatus}</p>
        </li>
      )
    }

    return (
      <div>
        {' '}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={bannerImage} alt="team banner" />
            <h1>Latest Matches</h1>
            <div>{latestMatchDetails()}</div>
            <div>
              <h1>Recent Matches</h1>
              <ul>
                {RecentMatchList.map(eachMatch => (
                  <div key={eachMatch.id}>
                    {' '}
                    {recentMatchDetails(eachMatch)}{' '}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LatestMatch
