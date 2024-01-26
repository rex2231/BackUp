import {Component} from 'react'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    apponmentTitle: '',
    apponmentDate: '',
    apponmentList: [],
    showStarred: false,
    filteredApponmentsList: [],
  }

  onTitleChange = event => {
    this.setState({apponmentTitle: event.target.value})
  }

  onDateChange = event => {
    this.setState({apponmentDate: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {apponmentList, apponmentTitle, apponmentDate} = this.state

    const formattedDate = `Date: ${new Date(apponmentDate).toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    )}`

    const apponment = {
      id: v4(),
      apponTitle: apponmentTitle,
      apponDate: formattedDate,
      isStarred: false,
    }
    const newApponmentList = [...apponmentList, apponment]
    this.setState({
      apponmentList: newApponmentList,
      filteredApponmentsList: newApponmentList,
      apponmentTitle: '',
      apponmentDate: '',
    })
  }

  onClickStar = id => {
    const {apponmentList} = this.state
    const starApponmentList = apponmentList.map(eachAppoin => {
      if (eachAppoin.id === id) {
        return {...eachAppoin, isStarred: !eachAppoin.isStarred}
      }
      return eachAppoin
    })
    this.setState({
      apponmentList: starApponmentList,
      filteredApponmentsList: starApponmentList,
    })
  }

  Starred = () => {
    const {apponmentList, showStarred} = this.state

    if (showStarred) {
      const starredAppoinments = apponmentList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
      this.setState({
        filteredApponmentsList: starredAppoinments,
        showStarred: !showStarred,
      })
    } else {
      const allAppoinments = apponmentList.map(eachAppoin => eachAppoin)
      this.setState({
        filteredApponmentsList: allAppoinments,
        showStarred: !showStarred,
      })
    }
  }

  render() {
    const {filteredApponmentsList, apponmentDate, apponmentTitle} = this.state
    return (
      <div className="bg-container">
        <div className="appointments-card">
          <div>
            <div className="add-appointments-container">
              <div className="add-appointments">
                <h1>Add Appointment</h1>
                <form className="form-container" onSubmit={this.onAdd}>
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    onChange={this.onTitleChange}
                    value={apponmentTitle}
                  />
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    onChange={this.onDateChange}
                    value={apponmentDate}
                  />
                  <button type="submit" className="submit-button">
                    Add
                  </button>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-image"
              />
            </div>
            <hr />
          </div>
          <div>
            <div className="bottom-container-head">
              <h1>Appointments</h1>
              <button type="button" onClick={this.Starred}>
                Starred
              </button>
            </div>
            <ul className="appointments-cards-container">
              {filteredApponmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointment={eachAppointment}
                  clickStar={this.onClickStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
