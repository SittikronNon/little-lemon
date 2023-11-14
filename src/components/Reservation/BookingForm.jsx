import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
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
import useSubmitForm from '../../hooks/submitForm';

const BookingForm = (props) => {

    const listTimes = props.listTimes.map(time => <option key={time} value={time}>{time}</option>)

    const { submitForm, isLoading } = useSubmitForm();

    const formik = useFormik({
        initialValues: {
            date: "",
            time: props.listTimes,
            guests: 1,
            occasion: "",
        },
        onSubmit: (values) => {
            submitForm(values)
            formik.resetForm();
        }
    })



    return (
        <VStack mx='40em' py='4em'>
            <form onSubmit={formik.handleSubmit}>
                <Heading color='#F4CE14'>Book Now</Heading>
                <FormControl>
                    <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='date'>Date</FormLabel>
                    <Input color='#EDEFEE' size='md' type='date' placeholder='Select Date and Time' id='date' onChange={props.dateHandler} aria-required={true} />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='time' >Time</FormLabel>
                    <Select id='time' placeholder='Select option' onChange={props.selectTimeHandler} aria-required={true} >
                        {listTimes}
                    </Select>
                </FormControl>
                <FormControl>
                    <HStack my='1em'>
                        <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='guests' >Number of guests</FormLabel>
                        <Input color='#EDEFEE' size='md' type='number' w='20em' placeholder='Enter number of guests' value={props.guests} id='guests' aria-required={true} onChange={props.getGuest} />
                        <Button value='-' onClick={props.guestHandler} isDisabled={props.guests <= 1} >-</Button>
                        <Button value='+' onClick={props.guestHandler}>+</Button>
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormLabel fontSize='2xl' color='#F4CE14' htmlFor='occasion' >Occasion</FormLabel>
                    <Input color='#EDEFEE' size='md' type='text' placeholder='Birthday, Anniversary' id='occasion' onChange={props.occasionHandler} />
                </FormControl>
                <Button type='submit' w='full' mt='2em' background='#F4CE14' isDisabled={!props.date || !props.time} isLoading={isLoading} >Reserve a table</Button>
            </form>
        </VStack >
    )
}

export default BookingForm