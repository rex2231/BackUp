import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0, total: 0, heads: 0, tails: 0}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({toss: tossResult})
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    console.log(toss)
    const coinImgUrl = toss
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="bg-container">
        <div className="toss-game-card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={coinImgUrl} alt="toss result" className="coinImg" />
          <button
            className="toss-coin-button"
            type="button"
            onClick={this.onToss}
          >
            Toss Coin
          </button>
          <div className="score-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
