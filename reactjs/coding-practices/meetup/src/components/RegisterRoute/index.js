import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div className="page-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="register-page">
            <div className="register-body">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <div>
                <h1 className="register-heading">Let us join</h1>
                <form
                  className="register-form-container"
                  onSubmit={submitRegistration}
                >
                  <label htmlFor="name" className="register-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="register-input"
                    onChange={onChangeName}
                  />
                  <label htmlFor="topics" className="register-label">
                    TOPICS
                  </label>
                  <select
                    id="topics"
                    className="register-input"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(eachTopic => (
                      <option key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="register-button">
                    Register Now
                  </button>
                  <p>{showError === true ? 'Please enter your name' : ''}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterRoute
