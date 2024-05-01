import {useState} from 'react'
import {
  BodyContainer,
  LockAndContentContainer,
  LockStatusText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(false)
  const onToggleLock = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <BodyContainer>
      <LockAndContentContainer>
        <img
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
          }
          alt={isLocked ? 'unlock' : 'lock'}
        />
        {isLocked ? (
          <LockStatusText>Your Device is Unlocked</LockStatusText>
        ) : (
          <LockStatusText>Your Device is Locked</LockStatusText>
        )}
      </LockAndContentContainer>
      <LockButton type="button" onClick={onToggleLock}>
        {isLocked ? 'Lock' : 'Unlock'}
      </LockButton>
    </BodyContainer>
  )
}

export default Unlock
