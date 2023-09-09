import React from 'react'
import PostCard from './PostCard'

const PostList = (props) => {
  const { posts, setPosts } = props

  const handleOnLike = (id) => {
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.likes + 1
        }
      }
      return post
    })

    setPosts(newPosts)
  }

  return (
        <div className="post-list">
            {
                posts.map((post, index) => {
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
                            handleOnLike={() => handleOnLike(post.id)}
                        />
                  )
                })
            }
        </div>
  )
}

export default PostList
