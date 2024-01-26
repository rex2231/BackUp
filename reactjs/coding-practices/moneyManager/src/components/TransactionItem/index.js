import './index.css'

const TransactionItem = props => {
  const {history, deleteFun} = props
  const {title, amount, type, id} = history
  const onDelete = () => {
    deleteFun(id, amount, type)
  }

  return (
    <li className="history-format history-table">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onDelete} className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
