import styled from 'styled-components'

export const BodyContainer = styled.div`
  background-image: linear-gradient(to bottom, #3c2940, #0b0c1e);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  margin-bottom: 130px;
`

export const LockStatusText = styled.p`
  font-family: Roboto;
`

export const LockButton = styled.button`
  padding: 12px;
  width: 120px;
  color: white;
  border: 0;
  border-radius: 15px;
  background-color: #06b6d4;
`
