import styled from 'styled-components'

export const StyleButton = styled.button`
  all: initial;
  font-size: 22px;
  color: ${props => props.color};
  margin-left: 12px;
  cursor: pointer;
`
export const TextArea = styled.textarea`
  all: initial;
  height: 88%;
  width: 95.5%;
  background-color: #25262c;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  color: white;
  font-family: roboto;
  padding: 10px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
