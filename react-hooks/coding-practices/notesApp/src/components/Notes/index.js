import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  PageContainer,
  PageHeading,
  CreateNoteContainer,
  AddButton,
  InputTitle,
  InputText,
  NotesContainer,
  NoNotesContainer,
  NoNotesImg,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setCurrentNote] = useState([])
  const onTitleChange = event => {
    setTitle(event.target.value)
  }
  const onTextChange = event => {
    setText(event.target.value)
  }
  const onAdd = event => {
    event.preventDefault()
    setCurrentNote(prevNote => [...prevNote, {id: uuidv4(), title, text}])
    setTitle('')
    setText('')
  }
  const EmptyNotesContainer = () => (
    <NoNotesContainer>
      <NoNotesImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <h1>No Notes Yet</h1>
      <p>Notes you add will appear here</p>
    </NoNotesContainer>
  )
  return (
    <PageContainer>
      <PageHeading>Notes</PageHeading>
      <CreateNoteContainer onSubmit={onAdd}>
        <InputTitle
          value={title}
          type="text"
          placeholder="Title"
          onChange={onTitleChange}
        />
        <InputText
          value={text}
          placeholder="Take a Note..."
          rows="5"
          onChange={onTextChange}
        />
        <AddButton type="submit">Add</AddButton>
      </CreateNoteContainer>
      {notesList.length === 0 ? (
        EmptyNotesContainer()
      ) : (
        <NotesContainer>
          {notesList.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </NotesContainer>
      )}
    </PageContainer>
  )
}

export default Notes
