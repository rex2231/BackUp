import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {SearchItem} = this.props
    return (
      <li>
        <img src={SearchItem.imgUrl} alt={SearchItem.name} />
        <p>{SearchItem.name}</p>
      </li>
    )
  }
}

export default DestinationItem
