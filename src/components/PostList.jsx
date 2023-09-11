import React, { useEffect, useMemo, useState } from 'react'
import PostCard from './PostCard'
import SearchBar from './SearchBar'
import axiosInstance from '../service/axiosService'
import { formatDate, getToken } from '../utils/utils'
import { debounce } from 'lodash'

const PostList = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [filteredPost, setFilteredPost] = useState([])

  const handleSearchValue = useMemo(
    () =>
      debounce((event) => {
        const searchValue = event.target.value
        const filteredPost = posts.filter((post) => {
          return post.description.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredPost(filteredPost)
      }, 500),
    []
  )

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const psotResposne = await axiosInstance.get('/posts',
          { headers: { Authorization: getToken() } }
        )
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
        setFilteredPost(postList)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [])

  return (
    <div>
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
                    <div className="post-list">
                        {
                            (posts !== null && posts.length > 0) &&
                            filteredPost.map((post, index) => {
                              return (
                                    <PostCard
                                        key={post.id}
                                        id={post.id}
                                        date={post.date}
                                        likes={post.likes}
                                        author={post.author}
                                        description={post.description}
                                        image={post.image}
                                        comments={post.comments}
                                    />
                              )
                            })
                        }
                    </div>
                  </div>
                )
          }
    </div>

  )
}

export default PostList
