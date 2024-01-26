const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </>
  )
}

export default BlogItem
