import React from 'react'
import { Grid, GridItem, Heading, Button, Box, Image, HStack, Text } from '@chakra-ui/react'
import greekSalad from '../../Images/greekSalad.jpg'

const Specials = () => {
  return (
    <Box pb='10em'>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={24} marginX="7em">
        <GridItem>
          <Heading as='h3' size='lg' >THIS WEEKS SPECIALS</Heading>
        </GridItem>
        <GridItem gridColumnStart={3}>
          <Button backgroundColor='#F4CE14'>Online Menu</Button>
        </GridItem>
        <GridItem backgroundColor='#EDEFEE' maxWidth='400px' pb='40px'>
          <Image src={greekSalad} maxWidth='400px' borderRadius='16px' />
          <Box mx='40px'>
            <HStack mt='20px' mb='20px'>
              <Heading as='h4' size='md'>Greek Salad</Heading>
              <Text m='auto' color='#EE9972' fontSize='xl'>$14.99</Text>
            </HStack>
            <Text >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae totam veniam exercitationem illum sint placeat rerum fugit, ducimus cumque modi recusandae aperiam officiis animi expedita repudiandae quasi debitis. Velit.</Text>
            <Text mt='20px' fontWeight='bold'>Order a delivery</Text>
          </Box>
        </GridItem>
        <GridItem backgroundColor='#EDEFEE' maxWidth='400px' pb='40px'>
          <Image src={greekSalad} maxWidth='400px' borderRadius='16px' alignContent='center' />
          <Box mx='40px'>
            <HStack mt='20px' mb='20px'>
              <Heading as='h4' size='md'>Bruchetta</Heading>
              <Text m='auto' color='#EE9972' fontSize='xl'>$14.99</Text>
            </HStack>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae totam veniam exercitationem illum sint placeat rerum fugit, ducimus cumque modi recusandae aperiam officiis animi expedita repudiandae quasi debitis. Velit.</Text>
            <Text mt='20px' fontWeight='bold'>Order a delivery</Text>
          </Box>
        </GridItem>
        <GridItem backgroundColor='#EDEFEE' maxWidth='400px' pb='40px'>
          <Image src={greekSalad} maxWidth='400px' borderRadius='16px' />
          <Box mx='40px'>
            <HStack mt='20px' mb='20px'>
              <Heading as='h4' size='md'>Lemon Dessert</Heading>
              <Text m='auto' color='#EE9972' fontSize='xl'>$14.99</Text>
            </HStack>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae totam veniam exercitationem illum sint placeat rerum fugit, ducimus cumque modi recusandae aperiam officiis animi expedita repudiandae quasi debitis. Velit.</Text>
            <Text mt='20px' fontWeight='bold'>Order a delivery</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Specials