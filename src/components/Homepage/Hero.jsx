import React from 'react'
import hero from '../../styles/Hero.module.css'
import restauranfood from '../../Images/restauranfood.jpg'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <div className={hero.container}>
            <div className={hero.left}>
                <h1 className={hero.title}>Little Lemon</h1>
                <h3 className={hero.subtitle}>Chicago</h3>
                <p className={hero.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt sapiente aut nihil consequatur sequi! Accusamus molestias numquam sunt voluptatibus nulla adipisci possimus, minima aspernatur tempora necessitatibus, deleniti totam architecto.</p>
                <Button backgroundColor="#F4CE14" maxWidth="15em"><Link to='/reservations'>Reserve a table</Link></Button>

            </div>
            <div className={hero.right}>
                <img src={restauranfood} alt='' className={hero.image}/>
            </div>
        </div>
    )
}

export default Hero