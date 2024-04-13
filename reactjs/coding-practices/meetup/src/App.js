import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'
import RegisterContext from './context/RegisterContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
