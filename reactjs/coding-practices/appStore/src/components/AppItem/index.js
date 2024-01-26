import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <>
      <li className="app-container">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
