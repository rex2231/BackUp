import './index.css'

const WinOrLoseCard = props => {
  const {status, score, onPlayAgain} = props

  let content = null

  const PlayAgain = () => {
    onPlayAgain()
  }

  if (status === 'win') {
    content = (
      <div className="winLose-bg">
        <div className="details-container">
          <h1 className="heading">You Won</h1>
          <p className="description">Best Score</p>
          <p className="description-score">{score}/12</p>
          <button type="button" className="play-button" onClick={PlayAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="win-lose-img"
        />
      </div>
    )
  } else if (status === 'lose') {
    content = (
      <div className="winLose-bg">
        <div className="details-container">
          <h1 className="heading">You Lose</h1>
          <p className="description">Score</p>
          <p className="description-score">{score}/12</p>
          <button type="button" className="play-button" onClick={PlayAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="win-lose-img"
        />
      </div>
    )
  }

  return content
}

export default WinOrLoseCard
