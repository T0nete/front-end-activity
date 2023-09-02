import React from 'react'
import PostCard from './PostCard'
import { mockPost } from '../mock/mockPost'

const PostList = (props) => {
  return (
        <div className="post-list">
            {
                mockPost.map((post, index) => {
                  return (
                        <PostCard
                            key={index}
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
