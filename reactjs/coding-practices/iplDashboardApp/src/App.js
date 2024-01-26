import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LatestMatch from './components/LatestMatch'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={LatestMatch} />
    <Route component={NotFound} />
  </Switch>
)

export default App
