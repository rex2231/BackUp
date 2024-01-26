import './index.css'

const PasswordItem = props => {
  const {passItem, showPassword, deletePassword} = props
  const {id, password, siteName, userName} = passItem

  const userProfile = userName[0]
  console.log(showPassword)
  const onDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="listItem">
      <div>
        <p>{userProfile}</p>
      </div>
      <p>{userName}</p>
      <p>{siteName}</p>
      {showPassword ? (
        <p>{password}</p>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
