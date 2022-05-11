import React from 'react'
import Logo from '../../assets/desktop/logo.svg'
import Background from '../../assets/desktop/image-host.jpg'
import Dots from '../../assets/desktop/bg-pattern-dots.svg'
import './Top.scss'

export const Top = () => {
  return (
    <div className='top-container'>
        <img  className='top-logo' src={Logo} alt="logo" />
        <img className='top-background-img' src={Background} alt="background" />
        <img className='top-dots-img' src={Dots} alt="background" />
    </div>
  )
}
