import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './Components/LoginRoute'
import HomeRoute from './Components/HomeRoute'
import NotFoundRoute from './Components/NotFoundRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/not-found" component={NotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
