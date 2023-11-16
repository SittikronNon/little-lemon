import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import restaurantA from '../../Images/restaurant.jpg'
import restaurantB from '../../Images/restaurantB.jpg'

const About = () => {
  return (
    <Box py='12em' px='10em'>
      <Flex justifyContent='center'>
        <Box w='20em' backgroundColor='#EDEFEE' width='30em' px='4em' borderRadius='16px' mx='5em'>
          <Heading my='10px' as='h1' size='2xl'>Little Lemon</Heading>
          <Heading my='10px' as='h3' size='md'>Little Lemon</Heading>
          <Text my='20px'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim? Perferendis quia aut laboriosam distinctio numquam eos suscipit odio voluptatibus voluptatum, omnis libero dolores ullam! Delectus quibusdam nihil molestias doloremque.
            Blanditiis fugiat numquam est, doloribus amet vitae? Incidunt necessitatibus voluptatum fugit, quas autem deserunt doloremque quisquam cumque tempora sit rem, eligendi, dolorem repudiandae facilis et debitis excepturi vero similique sequi.
            Nam libero quis reiciendis, deserunt optio excepturi consectetur, placeat, eaque mollitia velit dicta sed. Nisi ducimus sunt, ipsum quas, praesentium, blanditiis eveniet perspiciatis qui sint officia tempora quaerat quos sed?</Text>
        </Box>
        <Box w='20em' overflow='visible' mx='5em' >
          <Image src={restaurantA} maxWidth='25em' borderRadius='16px' />
          <Image src={restaurantB} maxWidth='25em' borderRadius='16px' />
        </Box>
      </Flex>
    </Box>
  )
}

export default About