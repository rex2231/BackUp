import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? 'red' : 'blue')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? 'blue' : 'red')};
`
