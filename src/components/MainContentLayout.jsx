import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import SearchBar from './SearchBar'
import PostList from './PostList'
import { mockPost, mockUser } from '../mock/mockPost'
import { Views } from '../constants'
import Profile from './Profile'

const MainContentLayout = props => {
  const { section } = props
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState(mockPost)

  const handleSearchValue = useMemo(
    () =>
      debounce((event) => {
        const searchValue = event.target.value
        const filteredPost = mockPost.filter((post) => {
          return post.description.toLowerCase().includes(searchValue.toLowerCase())
        })
        setPosts(filteredPost)
      }, 500),
    []
  )

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
      setPosts(mockPost)
    }, 3000)
    setIsLoaded(false)
  }, [section])

  return (
    <div className="container">

        <div className="p-2">
          {
            section === Views.profile.name
              ? <Profile avatar={mockUser.avatar} username={mockUser.username} bio={mockUser.bio}/>
              : <div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <SearchBar onSearch={handleSearchValue}/>
                    </div>
                    </div>
                    {
                      !isLoaded
                        ? <div className="text-center">Loading...</div>
                        : (
                            <div className='p-2'>
                              <PostList posts={posts} setPosts={setPosts}/>
                            </div>
                          )
                    }
              </div>
          }
        </div>
    </div>
  )
}

export default MainContentLayout
