import React from 'react'
import { VStack, Input, Box } from 'native-base'
import { Search, LocateMe } from '../../assets'

const SearchComponent = () => {
  return (
    <Box p='12px'>
      <VStack w='100%' space={5} alignSelf='center'>
        <Input
          placeholder='Search'
          width='100%'
          borderRadius='4'
          py='3'
          px='3'
          fontSize='14'
          color='black'
          InputRightElement={<LocateMe style={{ marginRight: '12px' }} />}
          InputLeftElement={<Search style={{ marginLeft: '12px' }} />}
        />
      </VStack>
    </Box>
  )
}

export default SearchComponent
