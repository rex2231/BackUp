import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

export const PageHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-weight: normal;
  font-size: 45px;
`

export const CreateNoteContainer = styled.form`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 20px;
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const InputTitle = styled.input`
  padding: 5px;
  margin-bottom: 15px;
  border: none;
  outline: none;
`

export const InputText = styled.textarea`
  padding: 5px;
  margin-bottom: 15px;
  border: none;
  outline: none;
`

export const AddButton = styled.button`
  all: initial;
  background-color: #4c63b6;
  padding: 5px;
  align-self: end;
  color: white;
  font-family: Roboto;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  margin-right: 40px;
`

export const NotesContainer = styled.ul`
  display: flex;
  align-items: start;
  width: 80%;
  padding: 0;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
`

export const NoNotesContainer = styled.div`
  text-align: center;
  margin-top: 25px;
  color: #64748b;
`

export const NoNotesImg = styled.img`
  height: 200px;
`
