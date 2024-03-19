import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  color: white;
  background-image: linear-gradient(
    to ${props => props.gradientValue[0]},
    ${props => props.gradientValue[1]},
    ${props => props.gradientValue[2]}
  );
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`

export const Heading = styled.h1`
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const SubHeading = styled.p`
  font-weight: 400;
  color: light-wight;
  font-size: 22px;
  opacity: 0.8;
`

export const DirectionsContainer = styled.div`
  display: flex;
`

export const TheDirectionsContainer = styled.ul`
  display: flex;
  list-style-type: none;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  font-size: 18px;
`

export const ColorBox = styled.input`
  all: initial;
  height: 50px;
  margin-top: 10px;
  width: 130px;
  border: none;
  outline: none;
`

export const GenerateButton = styled.button`
  all: initial;
  padding: 12px;
  background-color: #0fdeb2;
  font-family: 'Roboto';
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`
