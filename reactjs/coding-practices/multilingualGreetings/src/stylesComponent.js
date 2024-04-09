import styled from 'styled-components'

const LanguageButton = styled.button`
  all: initial;
  padding: 8px;
  border-radius: 18px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-family: roboto;
  width: 60px;
  text-align: center;
  cursor: pointer;
`

export default LanguageButton
