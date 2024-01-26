import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    language: languageFiltersData[0].id,
    languagesList: [],
    isLoading: true,
    gotData: true,
  }

  componentDidMount = () => {
    this.getLanguages()
  }

  selectLanguage = language => {
    this.setState({language, isLoading: true}, this.getLanguages)
  }

  getLanguages = async () => {
    const {language} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${language}`
    const response = await fetch(githubReposApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        forksCount: eachItem.forks_count,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        name: eachItem.name,
        starsCount: eachItem.stars_count,
      }))
      this.setState({
        languagesList: updatedData,
        isLoading: false,
        gotData: true,
      })
    } else {
      this.setState({gotData: false})
    }
  }

  render() {
    const {languagesList, isLoading, gotData} = this.state
    console.log(languagesList)
    return (
      <>
        {gotData ? (
          <div>
            <h1>Popular</h1>
            <ul className="languages-list">
              {languageFiltersData.map(eachLanguage => (
                <LanguageFilterItem
                  key={eachLanguage.id}
                  languageItem={eachLanguage}
                  selectLanguage={this.selectLanguage}
                />
              ))}
            </ul>
            {isLoading ? (
              <div data-testid="loader">
                <Loader />
              </div>
            ) : (
              <>
                <div>
                  <ul>
                    {languagesList.map(languageItem => (
                      <RepositoryItem
                        key={languageItem.id}
                        languageItem={languageItem}
                      />
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <p>Something Went Wrong</p>
          </div>
        )}
      </>
    )
  }
}

export default GithubPopularRepos
