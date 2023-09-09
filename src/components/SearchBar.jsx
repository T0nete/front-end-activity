import React from 'react'

const SearchBar = props => {
  const { onSearch } = props

  return (
    <div className='p-2'>
        <input type="text" className='form-control' placeholder='Search' onChange={onSearch}/>
    </div>
  )
}

export default SearchBar
