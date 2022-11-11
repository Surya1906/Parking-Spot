import React from 'react'
import { Center, Box } from 'native-base'
import { VRLogo } from '../../assets'
import { RegisterComponent } from '../../features'
import { LoginPageImage } from '../../assets'
const DesktopView = () => {
  return (
    <Box
      w='100vw'
      h='100vh'
      bg='white'
      p='48px'
      style={{
        boxSizing: 'border-box',
        padding: '48px',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${LoginPageImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Center display='flex' alignItems='center'>
        <RegisterComponent />
      </Center>
    </Box>
  )
}

export default DesktopView
