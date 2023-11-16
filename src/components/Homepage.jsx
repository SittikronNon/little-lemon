import React from 'react'
import Hero from './Homepage/Hero'
import Specials from './Homepage/Specials'
import Testimonials from './Homepage/Testimonials'
import About from './Homepage/About'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  )
}

export default Homepage