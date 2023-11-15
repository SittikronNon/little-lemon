import React, { useEffect, useReducer, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Menu from './Menu'
import About from './About'
import Reservation from './Reservation/Reservation'
import Orderonline from './Orderonline'
import Login from './Login'
import { availableTime } from '../data/availableTimes';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

    const [avaiTime, setAvaiTime] = useState([]);

    const [formInfo, setFormInfo] = useState({
      date: "",
      time: "",
      guests: guests,
      occasion: ""
    });



    useEffect(() => {

      setFormInfo({
        ...formInfo,
        guests: guests
      })
      //MUST DO **********************************************************
      fetch("./availableTimes.json")
      .then(res => res.json())
      .then(data => {
        setAvaiTime(data.time)
      }).catch((e) => {
        console.log(e);
      })

    }, [guests]);

    //Submit handler function
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(formInfo);
    }

    //onChange when guests is added or subtracted
    const guestNum = (e) => {
      console.log(e.target.value)

    }

    const guestHandler = (e) => {
      if (e.target.value === '+') {
        setGuests(guests + 1)
      }
      if (e.target.value === '-') {
        setGuests(guests - 1)
      }
    }

    //onChange with dispatch to select the value in options form page.
    const selectTimeHandler = (e) => {
      const selectedTime = e.target.value
      dispatch({ type: "test_date", newTime: selectedTime })
      setFormInfo({
        ...formInfo,
        time: e.target.value,
      })
    }

    //TO DO****************************************************************************************************************************
    //useReducer
    const initializeTimes = {time: ''};
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    const dateHandler = (e) => {
      setDate(e.target.value);
      setFormInfo({
        ...formInfo,
        date: e.target.value,
      })
    }

    const occasionHandler = (e) => {
      setOccasion(e.target.value);
      setFormInfo({
        ...formInfo,
        occasion: e.target.value,
      })
    }



    return (
      <main>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/reservations/*' element={<Reservation
            listTimes={avaiTime}
            guests={guests}
            date={date}
            time={state.time}
            occasion={occasion}
            guestHandler={guestHandler}
            getGuest={guestNum}
            selectTimeHandler={selectTimeHandler}
            dateHandler={dateHandler}
            occasionHandler={occasionHandler}
            submitHandler={submitHandler}
          />}></Route>
          <Route path='/orderonline' element={<Orderonline />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </main>
    )
  }

  export default Main