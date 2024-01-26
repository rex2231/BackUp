import {Component} from 'react'
import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {content, title, avatarUrl, author, imageUrl} = blogData

    return (
      <>
        {isLoading ? (
          <Loader data-testid="loader" />
        ) : (
          <div>
            <h1>{title}</h1>
            <div>
              <img src={avatarUrl} alt={title} />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
