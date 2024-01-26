import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item">
        <div>
          <img src={imageUrl} alt={title} className="blog-image" />
        </div>
        <p>{topic}</p>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt={author} className="author-image" />
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
