import {
  Box, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  VStack,
  HStack
} from '@chakra-ui/react'
import React from 'react'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route } from "react-router-dom";


const Reservation = (props) => {
  return (
    <Box backgroundColor='#495E57' py='50px'>
      <Routes>
        <Route path='/' element={<BookingPage {...props}/>}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
      </Routes>
      
    </Box>
  )
}

export default Reservation