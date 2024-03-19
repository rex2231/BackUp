import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {item} = props
  return (
    <div>
      <div className="title-duration">
        <h1>{item.courseTitle}</h1>
        <AiFillClockCircle />
        <p>{item.duration}</p>
      </div>
      <p>{item.description}</p>
      {item.tagsList.map(tag => (
        <div key={tag.id}>
          <p>{tag.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CourseTimelineCard
