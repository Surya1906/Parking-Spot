import React from 'react'
import { Box, Center } from 'native-base'
import { RegisterComponent } from '../../features'
import { LoginPageImage } from '../../assets'
const MobileView = () => {
  return (
    <Box
      w='100vw'
      h='100vh'
      bg='white'
      style={{
        boxSizing: 'border-box',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${LoginPageImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Center>
        <RegisterComponent />
      </Center>
    </Box>
  )
}

export default MobileView
