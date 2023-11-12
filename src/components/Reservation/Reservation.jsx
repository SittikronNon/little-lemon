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

const Reservation = () => {
  return (
    <Box backgroundColor='#495E57'>
      <VStack mx='40em' py='4em'>
        <FormControl>
          <FormLabel fontSize='2xl' color='#F4CE14'>Date</FormLabel>
          <Input color='#EDEFEE' size='md' type='date' placeholder='Select Date and Time' />
          <FormLabel fontSize='2xl' color='#F4CE14' >Time</FormLabel>
          <Input color='#EDEFEE' size='md' type='time' placeholder='Select Date and Time' />
          <HStack my='1em'>
            <FormLabel fontSize='2xl' color='#F4CE14' >Number of guests</FormLabel>
            <Input color='#EDEFEE' size='md' type='number' w='20em' placeholder='Enter number of guests' value={1} />
            <Button>-</Button>
            <Button>+</Button>
          </HStack>
          <FormLabel fontSize='2xl' color='#F4CE14' >Occasion</FormLabel>
          <Input color='#EDEFEE' size='md' type='text' placeholder='Birthday, Anniversary' />
          <Button w='full' mt='2em' background='#F4CE14'>Reserve a table</Button>

        </FormControl>
      </VStack>
    </Box>
  )
}

export default Reservation