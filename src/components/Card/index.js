import React from 'react'
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
} from 'native-base'

const Card = () => {
  return (
    <Box mb='20px'>
      <Box
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w='335px' ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt='image'
            />
          </AspectRatio>
        </Box>
        <Stack p='4' space={3} bg='white'>
          <Stack space={2}>
            <Heading size='md' ml='-1' color='blac'>
              The Garden City
            </Heading>
            <Text
              fontSize='xs'
              color='yellow.500'
              fontWeight='500'
              ml='-0.5'
              mt='-1'
            >
              The Silicon Valley of India.
            </Text>
          </Stack>

          <HStack alignItems='center' space={4} justifyContent='space-between'>
            <HStack alignItems='center'>
              <Text
                color='coolGray.600'
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight='400'
              >
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
export default Card
