import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import {
    Box, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    VStack,
    HStack,
    Select,
    Heading
} from '@chakra-ui/react'

const BookingForm = (props) => {

    const listTimes = props.listTimes.map(time => <option key={time} value={time}>{time}</option>)


    return (
        <VStack mx='40em' py='4em'>
            <Heading color='#F4CE14'>Book Now</Heading>
            <FormControl>
                <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='date'>Date</FormLabel>
                <Input color='#EDEFEE' size='md' type='date' placeholder='Select Date and Time' id='date' onChange={props.dateHandler} aria-required={true} />
                <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='time' >Time</FormLabel>
                <Select id='time' placeholder='Select option' onChange={props.selectTimeHandler} aria-required={true} >
                  {listTimes}
                </Select>
                <HStack my='1em'>
                    <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='guests' >Number of guests</FormLabel>
                    <Input color='#EDEFEE' size='md' type='number' w='20em' placeholder='Enter number of guests' value={props.guests} id='guests' aria-required={true} onChange={props.getGuest} />
                    <Button value='-' onClick={props.guestHandler} isDisabled={props.guests === 1} >-</Button>
                    <Button value='+' onClick={props.guestHandler}>+</Button>
                </HStack>
                <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='occasion' >Occasion</FormLabel>
                <Input color='#EDEFEE' size='md' type='text' placeholder='Birthday, Anniversary' id='occasion' onChange={props.occasionHandler}/>
                <Button w='full' mt='2em' background='#F4CE14' isDisabled={!props.date || !props.time } >Reserve a table</Button>
            </FormControl>
        </VStack>
    )
}

export default BookingForm