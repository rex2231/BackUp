import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  return (
    <div>
      <img src={item.imageUrl} alt="project" className="project-image" />
      <div className="title-duration">
        <h1>{item.projectTitle}</h1>
        <AiFillCalendar />
        <p>{item.duration}</p>
      </div>
      <p>{item.description}</p>
      <a href={item.projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
