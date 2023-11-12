import { Box, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import alex from '../../Images/cusotmers/alex.jpg'

const Testimonials = () => {
  return (
    <VStack backgroundColor='#495E57' h='550px'>
      <Heading mt='40px' color='#F4CE14' mb='40px'>Testimonials</Heading>
      <HStack>
        <Box h='250px' width='250px' backgroundColor='#fff'>
          <Heading as='h4' size='md'>Rating</Heading>
          <HStack>
            <Image width='150px' src={alex} />
            <Text>Name</Text>
          </HStack>
          <Text>review texts</Text>
        </Box>
        <Box h='250px' width='250px' backgroundColor='#fff'>
          <Heading as='h4' size='md'>Rating</Heading>
          <HStack>
            <Image width='150px' src={alex} />
            <Text>Name</Text>
          </HStack>
          <Text>review texts</Text>
        </Box>
        <Box h='250px' width='250px' backgroundColor='#fff'>
          <Heading as='h4' size='md'>Rating</Heading>
          <HStack>
            <Image width='150px' src={alex} />
            <Text>Name</Text>
          </HStack>
          <Text>review texts</Text>
        </Box>
        <Box h='250px' width='250px' backgroundColor='#fff'>
          <Heading as='h4' size='md'>Rating</Heading>
          <HStack>
            <Image width='150px' src={alex} />
            <Text>Name</Text>
          </HStack>
          <Text>review texts</Text>
        </Box>
      </HStack>

    </VStack>
  )
}

export default Testimonials