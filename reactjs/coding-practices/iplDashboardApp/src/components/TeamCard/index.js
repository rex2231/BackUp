import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {Team} = props

  const UpdatedTeam = {
    id: Team.id,
    name: Team.name,
    teamImageUrl: Team.team_image_url,
  }
  const {id, name, teamImageUrl} = UpdatedTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
