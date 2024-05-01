import {useState} from 'react'
import {
  HomeContainer,
  PageContainer,
  BlogImage,
  PageParagraph,
  ReadMoreButton,
  PageHeadings,
} from './styledComponents'

const ReadMore = props => {
  const [isReadMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props

  const onReadMore = () => {
    setReadMore(prevReadMore => !prevReadMore)
  }
  return (
    <HomeContainer>
      <PageContainer>
        <PageHeadings>React Hooks</PageHeadings>
        <p>Hooks are a new addition to React</p>
        <BlogImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <PageParagraph>
          {isReadMore
            ? reactHooksDescription
            : reactHooksDescription.slice(0, 170)}
        </PageParagraph>
        <ReadMoreButton onClick={onReadMore}>
          {!isReadMore ? 'Read More' : 'Read Less'}
        </ReadMoreButton>
      </PageContainer>
    </HomeContainer>
  )
}

export default ReadMore
