import React, { useEffect, useReducer, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Menu from './Menu'
import About from './About'
import Reservation from './Reservation/Reservation'
import Orderonline from './Orderonline'
import Login from './Login'
// import avaiTimes from '../data/availableTimes.json'
import { availableTime } from '../data/availableTimes';


function updateTimes(state, action) {
  if (action.type === 'test_date') {
    
    return { ...state, time: action.newTime }
  }
  return state
}



const Main = () => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const [avaiTime, setAvaiTime] = useState();

  let getGuestsNumber = 0;

  useEffect(() => {

    //MUST DO **********************************************************
    // fetch(avaiTimes)
    //   .then((respone) =>  respone.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));

  }, []);

  //onChange when guests is added or subtracted
  const guestNum = (e) => {
    getGuestsNumber = e.target.value;
  }

  const guestHandler = (e) => {
    if (e.target.value === '+') {
      console.log(state)
      setGuests(guests + 1)
    } else {
      setGuests(guests - 1)
    }
  }

  //onChange with dispatch to select the value in options form page.
  const selectTimeHandler = (e) => {
    const selectedTime = e.target.value
    dispatch({ type: "test_date", newTime: selectedTime })
  }

  //TO DO****************************************************************************************************************************
  //useReducer
  const initializeTimes = { time: '' }
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)

  const dateHandler = (e) => {
    setDate(e.target.value);
  }

  const occasionHandler = (e) => {
    setOccasion(e.target.value);
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/reservations' element={<Reservation
          listTimes={availableTime}
          guests={guests}
          date={date}
          time={state.time}
          occasion={occasion}
          guestHandler={guestHandler}
          getGuest={guestNum}
          selectTimeHandler={selectTimeHandler}
          dateHandler={dateHandler}
          occasionHandler={occasionHandler}
        />}></Route>
        <Route path='/orderonline' element={<Orderonline />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  )
}

export default Main