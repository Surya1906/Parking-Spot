import {
  Box,
  Text,
  AspectRatio,
  Image,
  Flex,
  Heading,
  Button,
} from 'native-base'
import React, { useState } from 'react'
import { ChargingPin, LocationPin } from '../../assets'
import { Header } from '../../components'
import { About } from '../../features'
import Review from '../../features/components/detailPage/Review'

const DetailPage = () => {
  const selectedCard = {
    area: 'Anna Nagar',
    place: 'VR Mall',
    distance: '20 Km',
    image: 'https://im.whatshot.in/img/2020/Jul/vr-chennai-1-1594373027.jpg',
    charging_slot_available: '5',
  }
  const [isAbout, setIsAbout] = useState(true)
  return (
    <>
      <Header />
      <Box p='20px' w='100vw' h='100vh' style={{ boxSizing: 'border-box' }}>
        <Flex justifyContent='center' alignItems='center'>
          <AspectRatio w='335px' ratio={16 / 9}>
            <Image
              source={{
                uri: `${selectedCard.image}`,
              }}
              alt='image'
              rounded='lg'
            />
          </AspectRatio>
        </Flex>
        <Heading color='black' py='20px'>
          {selectedCard.place}
        </Heading>
        <Flex
          flexDirection='row'
          alignItems='center'
          justifyContent='space-evenly'
        >
          <LocationPin />
          <Text color='black'>{selectedCard.distance} for you</Text>
          <ChargingPin />
          <Text color='black'>
            {selectedCard.charging_slot_available} Charging slots avail
          </Text>
        </Flex>
        <Flex flexDirection='row' mt='2' gap='10px'>
          <Button
            size='sm'
            variant='ghost'
            color='black'
            style={{ borderBottom: isAbout ? '2px solid #FDE047' : null }}
            _text={{ color: 'black', fontWeight: '500', fontSize: '14px' }}
            rounded='none'
            p='1'
            onPress={() => setIsAbout(true)}
          >
            About
          </Button>
          <Button
            size='sm'
            variant='ghost'
            color='black'
            rounded='none'
            p='1'
            style={{ borderBottom: isAbout ? null : '2px solid #FDE047' }}
            _text={{ color: 'black', fontWeight: '500', fontSize: '14px' }}
            onPress={() => setIsAbout(false)}
          >
            Ratings & Reviews
          </Button>
        </Flex>
        {isAbout ? <About /> : <Review />}
      </Box>
    </>
  )
}

export default DetailPage
