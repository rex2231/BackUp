import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    score: 0,
    showResult: false,
    userOption: '',
    opponentsMove: '',
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <div className="score-card">
        <div>
          <h1 className="score-card-items">
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </h1>
        </div>
        <div className="score">
          <p className="score-heading">Score</p>
          <p className="score-count">{score}</p>
        </div>
      </div>
    )
  }

  renderGameSection = () => (
    <div>
      <div>
        <button
          type="button"
          data-testid="rockButton"
          onClick={this.triggerResult}
          value="1"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
            className="game-icons"
            id="ROCK"
          />
        </button>
        <button
          type="button"
          data-testid="scissorsButton"
          onClick={this.triggerResult}
          value="2"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
            className="game-icons"
            id="SCISSORS"
          />
        </button>
      </div>
      <button
        type="button"
        data-testid="paperButton"
        onClick={this.triggerResult}
        value="3"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          className="game-icons"
          id="PAPER"
        />
      </button>
    </div>
  )

  renderResultCard = () => {
    const {result, userOption, opponentsMove} = this.state
    return (
      <div className="result-card">
        <div className="result-you-opponent-card">
          <div>
            <p>YOU</p>
            <img
              src={choicesList[userOption - 1].imageUrl}
              className="game-icons"
              alt="your choice"
            />
          </div>
          <div>
            <p>OPPONENT</p>
            <img
              src={choicesList[opponentsMove - 1].imageUrl}
              className="game-icons"
              alt="opponent choice"
            />
          </div>
        </div>
        <p>{result}</p>
        <button type="button" onClick={this.playAgain}>
          Play Again
        </button>
      </div>
    )
  }

  playAgain = () => {
    this.setState({showResult: false})
  }

  triggerResult = event => {
    const opponentsMove = Math.floor(Math.random() * 3) + 1

    const userOption = event.currentTarget.value
    console.log(choicesList[userOption - 1].id)
    const userChoice = choicesList[userOption - 1].id
    console.log(choicesList[opponentsMove - 1].id)
    const opponentsChoice = choicesList[opponentsMove - 1].id

    let scoreChange = 0
    let result
    if (userChoice === opponentsChoice) {
      result = 'IT IS DRAW'
    } else if (
      (userChoice === 'ROCK' && opponentsChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && opponentsChoice === 'PAPER') ||
      (userChoice === 'PAPER' && opponentsChoice === 'ROCK')
    ) {
      result = 'YOU WON'
      scoreChange += 1
    } else {
      result = 'YOU LOSE'
      scoreChange -= 1
    }

    this.setState(prevState => ({
      showResult: true,
      opponentsMove,
      userOption,
      score: prevState.score + scoreChange,
      result,
    }))
  }

  render() {
    const {showResult} = this.state

    return (
      <div className="bg-container">
        {this.renderScoreCard()}
        <div>
          {showResult ? this.renderResultCard() : this.renderGameSection()}
        </div>
        <div>
          <Popup modal trigger={<button type="button">Rules</button>}>
            {close => (
              <>
                <button
                  type="button"
                  onClick={() => close()}
                  aria-label="Close modal dialog"
                >
                  <RiCloseLine />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-img"
                />
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Home
