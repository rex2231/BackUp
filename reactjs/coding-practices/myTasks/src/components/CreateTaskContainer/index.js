import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTaskContainer extends Component {
  state = {
    taskInput: '',
    ListOfTasks: [],
    tagInput: 'HEALTH',
    currentFilter: '',
  }

  onTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onTagInput = event => {
    this.setState({tagInput: event.target.value})
  }

  onFilterTask = event => {
    this.setState(prevState => ({
      currentFilter:
        prevState.currentFilter === event.target.value
          ? ''
          : event.target.value,
    }))
  }

  onAddTask = event => {
    const {taskInput, tagInput} = this.state
    event.preventDefault()
    this.setState(prevState => ({
      ListOfTasks: [
        ...prevState.ListOfTasks,
        {id: uuidv4(), task: taskInput, tag: tagInput},
      ],
      taskInput: '',
      tagInput: 'health',
    }))
  }

  render() {
    const {taskInput, tagInput, ListOfTasks, currentFilter} = this.state

    return (
      <div className="create-task-page">
        <div className="add-task-container">
          <h1 className="create-task-heading">Create a task!</h1>
          <form className="create-task-form" onSubmit={this.onAddTask}>
            <label className="label-heading" htmlFor="task">
              Task
            </label>
            <input
              className="create-task-input-container"
              id="task"
              type="text"
              placeholder="Enter the task here"
              onChange={this.onTaskInput}
              value={taskInput}
            />
            <label className="label-heading" htmlFor="tags">
              Tags
            </label>
            <select
              id="tags"
              className="create-task-input-container"
              onChange={this.onTagInput}
              value={tagInput}
            >
              <option value="HEALTH">Health</option>
              <option value="EDUCATION">Education</option>
              <option value="ENTERTAINMENT">Entertainment</option>
              <option value="SPORTS">Sports</option>
              <option value="TRAVEL">Travel</option>
              <option value="OTHERS">Others</option>
            </select>
            <button className="add-task-button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-task-container">
          <h1>Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachItem => (
              <li key={eachItem.optionId}>
                <button
                  className={
                    currentFilter === eachItem.optionId
                      ? 'selected-tag-button'
                      : 'tags-button'
                  }
                  value={eachItem.optionId}
                  onClick={this.onFilterTask}
                  type="button"
                >
                  {eachItem.displayText}
                </button>
              </li>
            ))}
          </ul>
          <h1>Tasks</h1>
          <div>
            {ListOfTasks.length === 0 ? (
              <p>No Tasks Added Yet</p>
            ) : (
              <ul className="list-of-tags-container">
                {ListOfTasks.map(eachTask => {
                  if (eachTask.tag.includes(currentFilter)) {
                    return (
                      <li key={eachTask.id} className="task-container">
                        <p className="task-highlight-heading">
                          {eachTask.task}
                        </p>
                        <p className="tag-highlight-container">
                          {eachTask.tag}
                        </p>
                      </li>
                    )
                  }
                  return null
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CreateTaskContainer
