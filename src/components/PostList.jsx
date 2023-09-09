import React from 'react'
import PostCard from './PostCard'

const PostList = (props) => {
  const { posts } = props
  return (
    <div className="post-list">
        {
            (posts !== null && posts.length > 0) &&
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
                    />
                )
              })
        }
    </div>
  )
}

export default PostList
