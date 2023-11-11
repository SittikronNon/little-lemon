import React from 'react'
import Navbar from './Navbar'
import header from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={header.container}>
      <Navbar />
    </header>
  )
}

export default Header