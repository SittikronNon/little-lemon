import React from 'react'
import logo from '../Images/Logo .svg'
import navbar from '../styles/Navbar.module.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav >
            <img src={logo} alt=''/>
            <ul className={navbar.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar