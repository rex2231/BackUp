import {IoSearch} from 'react-icons/io5'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    inputChange,
    changeCategory,
    changeRating,
    onClearFilter,
    sendKey,
  } = props

  const onChangeInput = event => {
    inputChange(event.target.keys)
  }

  const clearFilter = () => {
    onClearFilter()
  }

  const handleKeyInput = event => {
    sendKey(event.target.key)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          placeholder="Search"
          type="search"
          onChange={onChangeInput}
          value={searchInput}
          onKeyDown={handleKeyInput}
        />
        <IoSearch />
      </div>
    )
  }

  return (
    <>
      <div className="filters-group-container">
        {renderSearchInput()}
        <h1>Category</h1>
        {categoryOptions.map(category => (
          <button
            key={category.categoryId}
            type="button"
            onClick={() => {
              changeCategory(category.categoryId)
            }}
          >
            <p>{category.name}</p>
          </button>
        ))}
        <div>
          <h1>Rating</h1>
          {ratingsList.map(rating => (
            <div key={rating.ratingId}>
              <button
                type="button"
                onClick={() => {
                  changeRating(rating.ratingId)
                }}
              >
                <img
                  src={rating.imageUrl}
                  alt={`rating ${rating.ratingId}`}
                  className="rating-img"
                />
                &Up
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </>
  )
}

export default FiltersGroup
