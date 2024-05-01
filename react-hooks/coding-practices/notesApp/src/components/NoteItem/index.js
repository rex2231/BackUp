import {NoteCard, NoteTitle, NoteText} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, text} = note
  return (
    <NoteCard>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{text}</NoteText>
    </NoteCard>
  )
}

export default NoteItem
