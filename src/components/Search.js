import React from 'react'

const Search = props => {

  return (
    <div>
      <label htmlFor="search">Search Term</label>
      <input type="text" name='searchTerm' onChange={props.handleSearch} value={props.searchTerm} />
    </div>
  )
}

export default Search
