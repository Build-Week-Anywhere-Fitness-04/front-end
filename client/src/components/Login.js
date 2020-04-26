// REACT I only
import React, {useState, useEffect} from 'react'

import { Styles } from './Styles'

import * as yup from 'yup'

const initialLoginValues = {
  email: '',
  password: ''
}

const initialLoginErrors = {
  email: '',
  password: ''
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required to login.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Please enter your password.')
})



function Login() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)

  const [formDisabled, setFormDisabled] = useState(true)

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(valid => {
        setLoginErrors({
          ...loginErrors,
          [name]: '',
        })
      })
      .catch(err => {
        console.log(err)
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0]
        })
      })
    
    setLoginValues({
      ...loginValues,
      [name]: value,
      })
  }

  useEffect(() => {
    loginSchema.isValid(loginValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [loginValues])

  const onSubmit = e => {
    e.preventDefault()

    const loginUser = {
      email: e.target.email,
      password: e.target.password,
    }
  }
  console.log(loginErrors)
  return (
    <Styles>
      
      <form>
        <h1>Login</h1>

        <label>Email:&nbsp;
        <input onChange={onInputChange} name='email' type='email' errors={loginErrors} /></label>
        <div className='errors'>{loginErrors.email}</div>
        
        <label>Password:&nbsp;
        <input onChange={onInputChange} name='password' type='password' errors={loginErrors} /></label>
        <div className='errors'>{loginErrors.password}</div>
        
        <button onClick={onSubmit} disabled={formDisabled}>Login</button>
      
      </form>
    </Styles>
  )
}

export default Login