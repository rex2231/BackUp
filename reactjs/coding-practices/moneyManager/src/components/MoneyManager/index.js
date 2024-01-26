import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetailsList = [
  {
    id: 1,
    title: 'Your Balance',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    bgColor: '#ecfccb',
    testid: 'balanceAmount',
  },
  {
    id: 2,
    title: 'Your Income',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    bgColor: '#cffafe',
    testid: 'incomeAmount',
  },
  {
    id: 3,
    title: 'Your Expenses',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    bgColor: '#7c3aed',
    testid: 'expensesAmount',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    historyList: [],
    income: 0,
    expenses: 0,
    balance: 0,
  }

  onDelete = (id, amount, type) => {
    const {historyList} = this.state
    const newHistoryList = historyList.filter(eachItem => eachItem.id !== id)

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - amount,
        balance: prevState.balance - amount,
        expenses: prevState.expenses,
        historyList: newHistoryList,
      }))
    } else if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - amount,
        balance: prevState.balance + amount,
        income: prevState.income,
        historyList: newHistoryList,
      }))
    }
  }

  onAdd = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newHistoryList = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type,
    }
    console.log(type)
    this.setState(prevState => {
      if (type === 'INCOME') {
        return {
          historyList: [...prevState.historyList, newHistoryList],
          income: prevState.income + newHistoryList.amount,
          balance: prevState.balance + newHistoryList.amount,
          title: '',
          amount: '',
        }
      }
      if (type === 'EXPENSES') {
        return {
          historyList: [...prevState.historyList, newHistoryList],
          expenses: prevState.expenses + newHistoryList.amount,
          balance: prevState.balance - newHistoryList.amount,
          title: '',
          amount: '',
        }
      }
      return prevState
    })
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: event.target.value})
  }

  onType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {income, expenses, balance, historyList, title, amount} = this.state

    return (
      <div className="bg-container">
        <div className="welcome-card">
          <h1 className="welcome-card-heading">Hi, Richard</h1>
          <p className="welcome-card-description">
            Welcome back to your{' '}
            <span className="welcome-card-description-highlight">
              Money Manager
            </span>
          </p>
        </div>
        <div className="money-details-container">
          {moneyDetailsList.map(eachItem => (
            <MoneyDetails
              key={eachItem.id}
              details={eachItem}
              income={income}
              expenses={expenses}
              balance={balance}
            />
          ))}
        </div>
        <div className="bottom-container">
          <div className="add-transactions-container">
            <h1 className="add-transactions-heading">Add Transactions</h1>
            <form className="add-transactions-form" onSubmit={this.onAdd}>
              <label htmlFor="title" className="label-heading">
                Title
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                onChange={this.onTitle}
                value={title}
              />
              <label htmlFor="amount" className="label-heading">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                onChange={this.onAmount}
                value={amount}
              />
              <label htmlFor="dropdown" className="label-heading">
                TYPE
              </label>
              <select id="dropdown" onChange={this.onType}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-transactions-heading">History</h1>
            <div className="history-list">
              <div className="history-format history-table">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p />
              </div>
              <ul className="historys-list">
                {historyList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    history={eachItem}
                    deleteFun={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
