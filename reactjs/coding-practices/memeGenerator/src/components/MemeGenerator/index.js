import {Component} from 'react'
import {
  FormContainer,
  InputPart,
  MemePart,
  MainContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {url: '', topText: '', bottomText: '', fontSize: '', showMeme: false}

  render() {
    const {url, topText, bottomText, fontSize, showMeme} = this.state

    const onUrlChange = event => {
      this.setState({url: event.target.value})
    }

    const onTopTextChange = event => {
      this.setState({topText: event.target.value})
    }

    const onBottomTextChange = event => {
      this.setState({bottomText: event.target.value})
    }

    const onFontSizeChange = event => {
      this.setState({fontSize: event.target.value})
    }

    const onGenerate = event => {
      event.preventDefault()
      this.setState({showMeme: true})
    }

    return (
      <MainContainer>
        <InputPart>
          <h1>Meme Generator</h1>
          <FormContainer onSubmit={onGenerate}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              placeholder="Enter the Image Url"
              id="imageUrl"
              onChange={onUrlChange}
              value={url}
            />
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              placeholder="Enter the Top Text"
              id="topText"
              onChange={onTopTextChange}
              value={topText}
            />
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottomText"
              onChange={onBottomTextChange}
              value={bottomText}
            />
            <label htmlFor="fontSize">Font Size</label>
            <select id="fontSize" onChange={onFontSizeChange} value={fontSize}>
              {fontSizesOptionsList.map(item => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </select>
            <button type="submit"> Generate </button>
          </FormContainer>
        </InputPart>
        {showMeme && (
          <MemePart
            url={url}
            topText={topText}
            bottomText={bottomText}
            fontSize={fontSize}
            data-testid="meme"
          >
            <p>{topText}</p>
            <p>{bottomText}</p>
          </MemePart>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
