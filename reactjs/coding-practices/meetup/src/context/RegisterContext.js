import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegisterContext
