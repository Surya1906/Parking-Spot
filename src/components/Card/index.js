import React, { useState } from 'react'
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
} from 'native-base'

const Card = (props) => {
  const { item } = props
  return (
    <Box mb='20px'>
      <Box
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >
        <Box>
          <AspectRatio w='335px' ratio={16 / 9}>
            <Image
              source={{
                uri: `${item.image}`,
              }}
              alt='image'
            />
          </AspectRatio>
        </Box>
        <Stack p='4' space={3} bg='white'>
          <Stack space={2}>
            <Heading size='md' ml='-1' color='black'>
              {item.place}
            </Heading>
            <Text
              fontSize='xs'
              color='yellow.500'
              fontWeight='500'
              ml='-0.5'
              mt='-1'
            >
              {item.area}
            </Text>
          </Stack>
          <HStack alignItems='center' space={4} justifyContent='space-between'>
            <HStack alignItems='center'>
              <Text color='coolGray.800' fontWeight='400'>
                {item.distance} away
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
export default Card
