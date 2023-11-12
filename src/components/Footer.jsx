import { Box, HStack, Heading, Image, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import restaurantfood from '../Images/restauranfood.jpg'

const Footer = () => {
  return (
    <footer>
      <Box backgroundColor='#495E57'>
      <HStack mx='10em' py='3em' spacing='28' alignItems='start' >
        <Image src={restaurantfood} maxWidth='10em' borderRadius='16px' />
        <VStack alignItems='top'>
          <Heading as='h4' size='md'>Doormat Navigation</Heading>
          <UnorderedList listStyleType='none'>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Menu</ListItem>
            <ListItem>Reservation</ListItem>
            <ListItem>Order Online</ListItem>
            <ListItem>Login</ListItem>
          </UnorderedList>
        </VStack>
        <VStack >
          <Heading as='h4' size='md'>Contact</Heading>
          <UnorderedList listStyleType='none'>
            <ListItem>Address</ListItem>
            <ListItem>phone number</ListItem>
            <ListItem>email</ListItem>
          </UnorderedList>
        </VStack>
        <VStack >
          <Heading as='h4' size='md'>Social Media Links</Heading>
          <UnorderedList listStyleType='none'>
            <ListItem>Address</ListItem>
            <ListItem>phone number</ListItem>
            <ListItem>email</ListItem>
          </UnorderedList>
        </VStack>
      </HStack>
      </Box>
    </footer>
  )
}

export default Footer