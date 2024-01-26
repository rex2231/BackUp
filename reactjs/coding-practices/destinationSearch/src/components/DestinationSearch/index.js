import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul>
          {destinationsList.map(item => {
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
              return <DestinationItem SearchItem={item} key={item.id} />
            }
            return null
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
