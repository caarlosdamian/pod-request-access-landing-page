import React, { useState } from 'react'
import { Bottom } from '../bottom/Bottom'
import './Middle.scss'

export const Middle = () => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const hadleSubmit = () => {
    if (email.match(validRegex)) {
      setError(false)
    }
    setError(true)
  }

  return (
    <div className='middle-container'>
      <h1>Publish your podcasts
        <span> everywhere.</span> </h1>
      <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
      <div className="input-container">
        <input className='input-text' type="text" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} />
        <button className='input-button' onClick={hadleSubmit} >Request Access</button>
      </div>
      {error && <span className='input-error'>Oops! Please check your email</span>}
      <Bottom/>
    </div>
  )
}
