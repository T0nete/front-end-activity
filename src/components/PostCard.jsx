import React from 'react'

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap'
import { CommentIcon, HeartIcon } from '../assets/IconsSVG'

const PostCard = props => {
  const { date, likes, author, description, image, comments } = props
  return (
      <Card className='shadow-sm'>
        <CardImg
          alt="Post image"
          src={image}
          top
        />
        <CardBody>
          <CardText>
            <small className="text-muted">{date}min ago</small>
          </CardText>
          <CardTitle><b>@{author}</b></CardTitle>
          <CardText>{description}</CardText>
          <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                  <div className='me-2'>
                      <CommentIcon />
                  </div>
                  <span className="text-muted">Comments ({comments})</span>
              </div>
              <Button color="danger" className="btn-icon btn-2">
                  <div className="d-flex align-items-center">
                    <div className='me-2'>
                      <HeartIcon />
                    </div>
                      <span className="btn-inner--text">{likes}</span>
                  </div>
              </Button>
          </div>
        </CardBody>
      </Card>
  )
}

export default PostCard
