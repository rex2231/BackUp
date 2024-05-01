import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onSetName = event => setName(event.target.value)
  const onSetComment = event => setCommentText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onSetName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onSetComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentsList.map(comment => (
        <CommentItem commentDetails={comment} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
