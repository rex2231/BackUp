const ActiveEventRegistrationDetails = props => {
  const {state} = props
  const registrationStatusConstrains = {
    yetToRegister: 'YET_TO_REGISTER',
    registered: 'REGISTERED',
    registrationsClosed: 'REGISTRATIONS_CLOSED',
  }

  const renderYetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </>
  )

  const renderRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </>
  )

  const renderRegistrationsClose = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </>
  )

  switch (state) {
    case registrationStatusConstrains.yetToRegister:
      return renderYetToRegister()
    case registrationStatusConstrains.registered:
      return renderRegistered()
    case registrationStatusConstrains.registrationsClosed:
      return renderRegistrationsClose()
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
