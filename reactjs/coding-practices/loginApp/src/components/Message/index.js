import './index.css'

const Message = props => {
  const {state} = props
  return (
    <div>{state === true ? <h1>Welcome User</h1> : <h1>Please Login</h1>}</div>
  )
}

Message.defaultProps = {
  state: 'false',
}

export default Message
