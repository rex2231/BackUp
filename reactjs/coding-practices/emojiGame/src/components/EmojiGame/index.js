/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], score: 0, topScore: 0, status: 'none'}

  addEmojiId = id => {
    const {clickedEmojisList, score} = this.state

    if (!clickedEmojisList.includes(id)) {
      this.setState({score: score + 1})
      if (score === 11) {
        this.setState({status: 'win'})
      }
    } else {
      this.setState({
        status: 'lose',
      })
    }

    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, id],
    }))
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    this.setState({
      clickedEmojisList: [],
      topScore: topScore < score ? score : topScore,
      score: 0,
      status: 'none',
    })
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {score, topScore, status} = this.state
    const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList(emojisList)
    let content = null

    if (status === 'none') {
      content = (
        <ul className="emojiCards-list">
          {shuffledList.map(eachItem => (
            <EmojiCard
              key={eachItem.id}
              emojiItem={eachItem}
              addEmojiId={this.addEmojiId}
            />
          ))}
        </ul>
      )
    } else if (status === 'win') {
      content = (
        <WinOrLoseCard
          status={status}
          score={score}
          onPlayAgain={this.onPlayAgain}
        />
      )
    } else if (status === 'lose') {
      content = (
        <WinOrLoseCard
          status={status}
          score={score}
          onPlayAgain={this.onPlayAgain}
        />
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} status={status} />
        <div className="contents-container">{content}</div>
      </div>
    )
  }
}

export default EmojiGame
