import React from 'react'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Hero from './Hero'
import Homepage from './Homepage'
import About from './Homepage'
import Menu from './Menu'
import Reservation from './Reservation'
import Orderonline from './Orderonline'
import Login from './Login'

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/reservations' element={<Reservation />}></Route>
          <Route path='/orderonline' element={<Orderonline />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      
    </main>
  )
}

export default Main