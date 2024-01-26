import './index.css'

const NavBar = props => {
  const {score, topScore, status} = props
  let navContent = null

  if (status === 'none') {
    navContent = (
      <li className="list-item">
        <p>Score: {score}&nbsp; &nbsp;</p>
        <p>Top Score: {topScore}</p>
      </li>
    )
  }

  return (
    <nav className="navbar">
      <ul className="unordered-list">
        <li className="list-item logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo"
          />
          <h1 className="emojiGame-heading">Emoji Game</h1>
        </li>
        {navContent}
      </ul>
    </nav>
  )
}

export default NavBar
