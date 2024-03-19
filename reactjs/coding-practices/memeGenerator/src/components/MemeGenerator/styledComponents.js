import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputPart = styled.div`
  width: 40%;
`

export const MemePart = styled.div`
  background-image: url(${props => props.url});
  font-size: ${props => props.fontSize}px;
  height: 500px;
  width: 500px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
`
