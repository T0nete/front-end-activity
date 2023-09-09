import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Profile = (props) => {
  const { avatar, username, bio } = props

  return (
    <Container>
      <Row className="text-center justify-content-center align-items-center profile-container p-4">
        <Col xs="12" sm="6">
          <img src={avatar} alt="Avatar" className="rounded-circle profile-avatar" />
        </Col>
        <Col xs="12" sm="6">
          <h2>{username}</h2>
          <p className="profile-bio">{bio}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
