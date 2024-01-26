import {Component} from 'react'

class DenominationItem extends Component {
  onWithdraw = () => {
    const {withDrawAmount, withdrawFunc} = this.props
    withdrawFunc(withDrawAmount)
  }

  render() {
    const {withDrawAmount} = this.props
    return (
      <li>
        <button type="button" onClick={this.onWithdraw}>
          {withDrawAmount}
        </button>
      </li>
    )
  }
}

export default DenominationItem
