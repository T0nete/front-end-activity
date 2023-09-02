import React from 'react'
import SearchBar from './SearchBar'
import PostList from './PostList'

const MainContentLayout = props => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <SearchBar />
            </div>
        </div>
        <div className="p-2">
            <PostList />
        </div>
    </div>
  )
}

export default MainContentLayout
