import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import SearchBar from './SearchBar'
import PostList from './PostList'
import { Views } from '../constants'
import Profile from './Profile'
import HeaderNavbar from './Navbar'
import axiosInstance from '../service/axiosService'
import { formatDate } from '../utils/utils'

const MainContentLayout = props => {
  const { section, handleSection } = props
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [user, setUser] = useState({})

  const handleSearchValue = useMemo(
    () =>
      debounce((event) => {
        const searchValue = event.target.value
        const filteredPost = posts.filter((post) => {
          return post.description.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredPosts(filteredPost)
      }, 500),
    []
  )

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const psotResposne = await axiosInstance.get('/posts')
        const postList = psotResposne.data.map((post) => {
          return {
            id: post.id,
            date: formatDate(post.updatedAt),
            likes: post.likes,
            author: post.author.username,
            description: post.text,
            image: post.image,
            comments: post.comments.length
          }
        })
        setPosts(postList)
        setFilteredPosts(postList)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    }

    const fetchUser = async () => {
      try {
        setIsLoading(true)
        const userResponse = await axiosInstance.get('/users/me')
        const user = userResponse.data
        console.log(user)
        setUser(user)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (section === Views.postList.name) {
      fetchPost()
    } else if (section === Views.profile.name) {
      fetchUser()
    }
  }, [section])

  return (
    <>
    <header className="App-header">
        <HeaderNavbar handleSection={handleSection}/>
    </header>
    <div className="container">

    <div className="p-2">
        {
          section === Views.profile.name
            ? <Profile avatar={user.avatar} username={user.username} bio={user.bio}/>
            : <div>
              <div className="row justify-content-center">
                  <div className="col-md-6">
                      <SearchBar onSearch={handleSearchValue}/>
                  </div>
                  </div>
                  {
                    isLoading
                      ? <div className="text-center">Loading...</div>
                      : (
                          <div className='p-2'>
                            <PostList posts={filteredPosts} setPosts={setPosts}/>
                          </div>
                        )
                  }
            </div>
        }
        </div>
      </div>
    </>
  )
}

export default MainContentLayout
