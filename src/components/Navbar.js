import React from 'react'
import Logo from '../Images/Logo .svg'

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt=''/>
            <ul>
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