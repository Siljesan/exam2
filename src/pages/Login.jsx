import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import { Heading } from '../components/styles/StyledHeadings'

function Login() {
  return (
    <div className="login">
        <div className='login__container'>
            <Heading>Admin login</Heading>
            <LoginForm />
        </div>
    </div>
  )
}

export default Login