import React from 'react'
import {    Routes,  Route} from "react-router-dom";
import Homepage from './Homepage'
import Menu from './Menu'
import About from './About'
import Reservation from './Reservation/Reservation'
import Orderonline from './Orderonline'
import Login from './Login'

const Main = () => {
  return (
    <main>

      <Routes>
          <Route path='/' element={<Homepage />}></Route>
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