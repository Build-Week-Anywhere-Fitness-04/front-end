// REACT I only
import React, {useState, useEffect} from 'react'

import Recaptcha from 'react-recaptcha'

import * as yup from 'yup'

import { Styles } from './Styles'

const API_KEY = process.env.REACT_APP_API_KEY;

const initialSignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  instructorOrClient: '',
}

const initialSignUpErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  instructorOrClient: '',
}

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Need at least 2 characters.')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Need at least 2 characters')
    .required('Last name is required'),
  email: yup
    .string()
    .email()
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .min(9, 'Phone number is optional'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Password is required'),
  instructorOrClient: yup
    .string()
    .matches(/(instructor|client)/, 'Either instructor or client.')
    .required('Please select instructor or client.')
})



function SignUp() {

  const [isVerified, setIsVerified] = useState(false)

  const [signUpValues, setSignUpValues] = useState(initialSignUpValues)

  const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors)

  const [formDisabled, setFormDisabled] = useState(true)

  const recaptchaLoaded = () => {
    console.log('captcha loaded')
  }

  const onSubmit = e => {
    e.preventDefault()
  
    if (isVerified) {
      alert('you have successfully signed up')
      // sign up method goes here
    } else {
      alert('Please verify that you are a human')
    }
  }

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(signUpSchema, name)
      .validate(value)
      .then(valid => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: '',
        })
      })
      .catch(err => {
        
        setSignUpErrors({
          ...signUpErrors,
          [name]: err.errors[0]
        })
      })
    
    setSignUpValues({
      ...signUpValues,
      [name]: value,
    })
  }

  useEffect(() => {
    signUpSchema.isValid(signUpValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [signUpValues])

  
  return (
    <div>
      <Styles>
        
        <form>
          <h1>Sign Up page</h1>

          <div className='errors'></div>

          <label>First Name:&nbsp;
          <input onChange={onInputChange} name='firstName' type='text' placeholder='First name' /></label>
          <div className='errors'>{signUpErrors.firstName}</div>

          <label>Last Name:&nbsp;
          <input onChange={onInputChange} name='lastName' type='text' placeholder='Last name' /></label>
          <div className='errors'>{signUpErrors.lastName}</div>
              
          <label>Email:&nbsp;
          <input onChange={onInputChange} name='email' type='email' placeholder='john@doe.com' /></label>
          <div className='errors'>{signUpErrors.email}</div>

          <label>Phone number (optional):&nbsp;
          <input onChange={onInputChange} name='phoneNumber' type='text' placeholder='555-555-5555' /></label>
          
          
          <label>Password:&nbsp;
          <input onChange={onInputChange} name='password' type='password' placeholder='password' /></label>
          <div className='errors'>{signUpErrors.password}</div>

          <label>Instructor or Client:&nbsp;
            <select
             
              onChange={onInputChange}
              name='instructorOrClient'
            >
              <option defaultValue=''>Please Choose</option>
              <option value='instructor'>Instructor</option>
              <option value='client'>Client</option>
            </select> 
            
          </label>
          <div className='errors'>{signUpErrors.instructorOrClient}</div>
          
          <button onClick={onSubmit} disabled={formDisabled}>Sign Up</button>

          <Recaptcha
            sitekey={API_KEY}
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          />
        
        </form>
      </Styles>
    </div>
  )
}

export default SignUp
