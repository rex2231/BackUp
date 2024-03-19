import {Component} from 'react'
import {
  MainContainer,
  Heading,
  SubHeading,
  DirectionsContainer,
  ColorsContainer,
  ColorBox,
  GenerateButton,
  TheDirectionsContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323 ',
    color2: '#014f7b',
    direction: 'top',
    gradientValue: ['top', '#8ae323', '#014f7b'],
  }

  onChangeDirection = dir => {
    this.setState({direction: dir})
  }

  onColor1Change = event => {
    this.setState({color1: event.target.value})
  }

  onColor2Change = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {direction, color1, color2} = this.state
    this.setState({gradientValue: [direction, color1, color2]})
  }

  render() {
    const {color1, color2, direction, gradientValue} = this.state

    return (
      <MainContainer
        // color1={color1}
        // color2={color2}
        // direction={direction}
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <TheDirectionsContainer>
          {gradientDirectionsList.map(directionItem => (
            <GradientDirectionItem
              key={directionItem.directionId}
              value={directionItem.value}
              onChangeDirection={this.onChangeDirection}
              displayText={directionItem.displayText}
              activeDirection={direction}
            >
              {directionItem.displayText}
            </GradientDirectionItem>
          ))}
        </TheDirectionsContainer>
        <SubHeading>Pick the Colors</SubHeading>
        <DirectionsContainer>
          <ColorsContainer>
            <p htmlFor="color1">{color1}</p>
            <ColorBox
              type="color"
              id="color1"
              onChange={this.onColor1Change}
              value={color1}
            />
          </ColorsContainer>
          <ColorsContainer>
            <p htmlFor="color2">{color2}</p>
            <ColorBox
              type="color"
              id="color2"
              onChange={this.onColor2Change}
              value={color2}
            />
          </ColorsContainer>
        </DirectionsContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
