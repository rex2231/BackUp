import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  onWithdraw = amount => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - amount,
    }))
    console.log(amount)
  }

  render() {
    const {currentBalance} = this.state
    return (
      <div className="bg-container">
        <div className="withdrawal-card">
          <div className="profile">
            <p> S </p>
            <h1>Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{currentBalance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p>Withdraw</p>
            <p>Choose SUM (IN RUPEES)</p>
            <div>
              <ul>
                <DenominationItem
                  withDrawAmount={50}
                  withdrawFunc={() => this.onWithdraw(50)}
                  key={50}
                />
                <DenominationItem
                  withDrawAmount={100}
                  withdrawFunc={() => this.onWithdraw(100)}
                  key={100}
                />
                <DenominationItem
                  withDrawAmount={200}
                  withdrawFunc={() => this.onWithdraw(200)}
                  key={200}
                />
                <DenominationItem
                  withDrawAmount={500}
                  withdrawFunc={() => this.onWithdraw(500)}
                  key={500}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
