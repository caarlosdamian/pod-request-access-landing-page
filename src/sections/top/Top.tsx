import React from 'react'
import Logo from '../../assets/desktop/logo.svg'
import Background from '../../assets/desktop/image-host.jpg'
import BackgroundTablet from '../../assets/tablet/image-host.jpg'
import BackgroundMobile from '../../assets/mobile/image-host.jpg'
import Dots from '../../assets/desktop/bg-pattern-dots.svg'
import './Top.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

export const Top = () => {
  const windowSize = useWindowSize()
  return (
    <div className='top-container'>
        <img  className='top-logo' src={Logo} alt="logo" />
        <img className='top-background-img' src={windowSize.width > 768? Background:windowSize.width>375?BackgroundTablet:BackgroundMobile} alt="background" />
        <img className='top-dots-img' src={Dots} alt="background" />
    </div>
  )
}
