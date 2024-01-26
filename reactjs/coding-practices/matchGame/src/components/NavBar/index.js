import './index.css'

const NavBar = props => {
  const {score, sec} = props

  return (
    <li className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-container">
        <p>{`Score: ${score}`}</p>
        <div className="score-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p>{`${sec} sec`}</p>
        </div>
      </div>
    </li>
  )
}

export default NavBar
