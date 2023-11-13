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


const Reservation = (props) => {
  return (
    <Box backgroundColor='#495E57' py='50px'>
      <BookingPage {...props}/>
    </Box>
  )
}

export default Reservation