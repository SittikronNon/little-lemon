import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmedBooking = (props) => {
    return (
        <Box justifyContent='center' textAlign='center' color='#F4CE14' h='500px'>
            <Heading>The booking has been confirmed!</Heading>
            <Text my='2em' fontSize='1.4em'>Date : {props.confirmedData.date}</Text>
            <Text my='2em' fontSize='1.4em'>Your : {props.confirmedData.time}</Text>
            <Text my='2em' fontSize='1.4em'>Guests : {props.confirmedData.guests}</Text>
            <Text my='2em' fontSize='1.4em'>Occasion : {props.confirmedData.occasion}</Text>
            <Button><Link to='/'>Back to Homepage</Link></Button>
        </Box>
    )
}

export default ConfirmedBooking