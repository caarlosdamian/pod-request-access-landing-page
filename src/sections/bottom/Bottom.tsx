import React from 'react'
import Spotify from '../../assets/desktop/spotify.svg'
import Apple from '../../assets/desktop/apple-podcast.svg'
import Google from '../../assets/desktop/google-podcasts.svg'
import Podcast from '../../assets/desktop/pocket-casts.svg'
import './Bottom.scss'

export const Bottom = () => {
  return (
    <div className='bottom-container'>
      <img src={Spotify} alt="spotify" />
      <img src={Apple} alt="spotify" />
      <img src={Google} alt="spotify" />
      <img src={Podcast} alt="spotify" />
    </div>
  )
}
