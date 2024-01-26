import {Component} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistorySection extends Component {
  state = {searchInput: '', searchResults: initialHistoryList}

  onSearchChange = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    this.setState({
      searchResults: initialHistoryList.filter(eachItem =>
        eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    })
  }

  onDelete = itemId => {
    const {searchResults} = this.state
    this.setState({
      searchResults: searchResults.filter(eachItem => eachItem.id !== itemId),
    })
  }

  render() {
    const {searchResults} = this.state
    const ShowHistory = () => {
      if (searchResults.length === 0) {
        return <p>There is no history to show</p>
      }
      return null
    }
    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search History"
              onChange={this.onSearchChange}
            />
          </div>
        </div>
        <div>
          {ShowHistory()}
          <ul>
            {searchResults.map(item => (
              <li className="history-container" key={item.id}>
                <div className="history-item">
                  <p>{item.timeAccessed}</p>
                  <img
                    src={item.logoUrl}
                    className="search-icon"
                    alt="domain logo"
                  />
                  <p>{item.title}</p>
                  <p>{item.domainUrl}</p>
                </div>
                <button
                  type="button"
                  onClick={() => this.onDelete(item.id)}
                  data-testid="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="search-icon"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistorySection
