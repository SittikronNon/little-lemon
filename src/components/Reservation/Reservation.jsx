import {
  Box
} from '@chakra-ui/react'
import React from 'react'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Reservation = (props) => {
  const {state} = useLocation();
  
  return (
    <Box backgroundColor='#495E57' py='50px'>
      <Routes>
        <Route path='/' element={<BookingPage {...props}/>}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking confirmedData={state} />}></Route>
      </Routes>
    </Box>
  )
}

export default Reservation