import {useState} from 'react'
import {
  BgContainer,
  PasswordCard,
  ErrorMsg,
  PageHeading,
  SubHeading,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onEnterPassword = event => setPassword(event.target.value)
  const isValid = password.length < 8

  return (
    <BgContainer>
      <PasswordCard>
        <PageHeading>Password Validator</PageHeading>
        <SubHeading>Check how strong and secure is your password</SubHeading>
        <PasswordInput type="password" onChange={onEnterPassword} />
        {isValid && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordCard>
    </BgContainer>
  )
}

export default PasswordValidator
