import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import SearchBar from './SearchBar'
import PostList from './PostList'
import { mockPost, mockUser } from '../mock/mockPost'
import { Views } from '../constants'
import Profile from './Profile'

const MainContentLayout = props => {
  const { section } = props
  const [searchValue, setSearchValue] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState(mockPost)

  const handleSearchValue = useMemo(
    () =>
      debounce((event) => {
        setSearchValue(event.target.value)
      }, 300),
    []
  )

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
      const filteredPost = mockPost.filter((post) => {
        return post.description.toLowerCase().includes(searchValue.toLowerCase())
      })
      setPosts(filteredPost)
    }, 3000)
    setIsLoaded(false)
  }, [searchValue, section])

  return (
    <div className="container">

        <div className="p-2">
          {
            section === Views.profile.name
              ? <Profile avatar={mockUser.avatar} username={mockUser.username} bio={mockUser.bio}/>
              : !isLoaded
                  ? <div className="text-center">Loading...</div>
                  : (
                    <div>
                      <div className="row justify-content-center">
                          <div className="col-md-6">
                              <SearchBar onSearch={handleSearchValue}/>
                          </div>
                      </div>
                      <PostList posts={posts} setPosts={setPosts}/>
                    </div>
                    )
          }
        </div>
    </div>
  )
}

export default MainContentLayout
