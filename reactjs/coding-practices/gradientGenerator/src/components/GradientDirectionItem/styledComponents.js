import styled from 'styled-components'

export const Direction = styled.button`
  all: initial;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-family: 'Roboto';
  color: darkblue;
  background-color: white;
  margin: 5px;
  cursor: pointer;
  opacity: ${props => (props.current ? 1 : 0.5)};
`
