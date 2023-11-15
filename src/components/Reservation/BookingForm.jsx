import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import {
    Box, FormControl,
    FormLabel,
    FormErrorMessage,
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
            time: "",
            guests: 1,
            occasion: "",
        },
        onSubmit: (values) => {
            submitForm(values)
            formik.resetForm();
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Required Date"),
            time: Yup.string().required("Please, select the times"),
            occasion: Yup.string().required("Occasion is required").min(5, "Must be at least 5 characters")
        })
    })




    return (
        <VStack mx='40em' py='4em'>
            <form onSubmit={formik.handleSubmit}>
                <Heading color='#F4CE14'>Book Now</Heading>
                <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                    <FormLabel aria-label="Date" fontSize='2xl' color='#F4CE14' htmlFor='date'>Date</FormLabel>
                    <Input
                        aria-placeholder="select the date"
                        color='#EDEFEE'
                        size='md'
                        type='date'
                        placeholder='Select Date and Time'
                        id='date'
                        name='date'
                        onChange={props.dateHandler}
                        aria-required={true}
                        {...formik.getFieldProps("date")}
                        required />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                    <FormLabel aria-label="Time" fontSize='2xl' color='#F4CE14' htmlFor='time' >Time</FormLabel>
                    <Select
                        id='time'
                        placeholder='Select option'
                        name='time'
                        onChange={props.selectTimeHandler}
                        aria-required={true}
                        {...formik.getFieldProps("time")}
                        required>
                        {listTimes}
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <HStack my='1em'>
                        <FormLabel aria-label="Guests" fontSize='2xl' color='#F4CE14' htmlFor='guests' >Number of guests</FormLabel>
                        <Input
                            color='#EDEFEE'
                            size='md'
                            type='number'
                            w='20em'
                            placeholder='Enter number of guests'
                            value={props.guests}
                            id='guests'
                            aria-required={true}
                            onChange={props.getGuest}
                            name='guests'
                            required />
                        <Button value='-' onClick={props.guestHandler} isDisabled={props.guests <= 1} >-</Button>
                        <Button value='+' onClick={props.guestHandler}>+</Button>
                    </HStack>
                </FormControl>
                <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                    <FormLabel aria-label="Occasion" fontSize='2xl' color='#F4CE14' htmlFor='occasion' >Occasion</FormLabel>
                    <Input
                        color='#EDEFEE'
                        size='md'
                        type='text'
                        placeholder='Birthday, Anniversary'
                        id='occasion'
                        name='occasion'
                        onChange={props.occasionHandler}
                        {...formik.getFieldProps("occasion")}
                        aria-required={true}
                        required />
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <Button data-testid="submit" type='submit' w='full' mt='2em' background='#F4CE14' isDisabled={!formik.isValid} aria-disabled={!formik.isValid} isLoading={isLoading} >Reserve a table</Button>
            </form>
        </VStack >
    )
}

export default BookingForm