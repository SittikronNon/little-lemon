import React from 'react'
import logo from '../Images/Logo .svg'
import navbar from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <nav >
            <img src={logo} alt=''/>
            <ul className={navbar.navbar}>
                <li><a href='1'>Home</a></li>
                <li><a href='2'>About</a></li>
                <li><a href='3'>Menu</a></li>
                <li><a href='4'>Reservations</a></li>
                <li><a href='5'>Order Online</a></li>
                <li><a href='6'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar