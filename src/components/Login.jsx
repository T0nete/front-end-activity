import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Label, Input, Card, CardTitle, CardBody, Alert } from 'reactstrap'
import axiosInstance from '../service/axiosService'
import { useNavigate } from 'react-router-dom'

import '../styles/styles.css'

const Login = (props) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = e.target.elements
    console.log(username.value, password.value)
    if (username.value === '' || password.value === '') {
      setError('Invalid email or password')
    } else {
      setError('')
      try {
        const response = await axiosInstance.post('/login', {
          username: username.value,
          password: password.value
        })
        localStorage.setItem('token', response.data.token)
        props.setIsAuthenticated(true)
        navigate('/postList')
      } catch (error) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <Col md={6} lg={5} className='d-flex justify-content-center align-items-center m-auto' style={{ minHeight: '100vh' }}>
        <div className='px-4 w-100'>
            <Card className='shadow-sm bg-light '>
                <CardTitle className='text-center mt-3'>
                    <h1>Posts App</h1>
                </CardTitle>
                <CardBody>
                    {
                        error !== '' && (
                            <Alert color='danger'>{error}</Alert>
                        )
                    }
                    <Form onSubmit={handleSubmit}>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' name='username' id='username' />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' name='password' id='password' />
                            </FormGroup>
                            <div className='w-100'>
                                <Button type='submit' color='primary' >Login</Button>
                            </div>
                        </Col>
                    </Form>
                </CardBody>
            </Card>
        </div>
    </Col>
  )
}

export default Login
