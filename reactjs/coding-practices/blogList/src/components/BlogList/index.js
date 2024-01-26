import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return blogsList.map(eachBlog => (
    <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
  ))
}

export default BlogList
