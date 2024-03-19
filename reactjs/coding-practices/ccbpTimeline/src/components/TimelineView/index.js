import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineItems = () =>
    timelineItemsList.map(item => {
      if (item.categoryId === 'PROJECT') {
        return <ProjectTimelineCard key={item.id} item={item} />
      }
      return <CourseTimelineCard key={item.id} item={item} />
    })

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(item => renderTimeLineItems(item))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
