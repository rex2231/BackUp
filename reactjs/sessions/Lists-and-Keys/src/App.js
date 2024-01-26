import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: `https://assets.ccbp.in/frontend/react-js/devon-lane-img.png`,
    name: `Santhosh T`,
    role: `Software Developer`,
  },
  {
    uniqueNo: 2,
    imageUrl: `https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png`,
    name: `jacob jones`,
    role: `Software Trainee`,
  },
  {
    uniqueNo: 3,
    imageUrl: `https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png`,
    name: `jacob jones`,
    role: `Software Trainee`,
  },
  {
    uniqueNo: 4,
    imageUrl: `https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png`,
    name: `jacob jones`,
    role: `Software Trainee`,
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
