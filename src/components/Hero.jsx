import React from 'react'
import hero from '../styles/Hero.module.css'
import restauranfood from '../Images/restauranfood.jpg'


const Hero = () => {
    return (
        <div className={hero.container}>
            <div className={hero.left}>
                <h1 className={hero.title}>Little Lemon</h1>
                <h3 className={hero.subtitle}>Chicago</h3>
                <p className={hero.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt sapiente aut nihil consequatur sequi! Accusamus molestias numquam sunt voluptatibus nulla adipisci possimus, minima aspernatur tempora necessitatibus, deleniti totam architecto.</p>

            </div>
            <div className={hero.right}>
                <img src={restauranfood} alt='' className={hero.image}/>
            </div>
        </div>
    )
}

export default Hero