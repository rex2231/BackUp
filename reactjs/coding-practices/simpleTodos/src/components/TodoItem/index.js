import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {TodoListItem, deleteItem} = this.props

    const onDelete = () => {
      deleteItem(TodoListItem.id)
    }

    return (
      <li>
        <p>{TodoListItem.title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
