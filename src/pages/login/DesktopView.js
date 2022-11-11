import React from 'react'
import { Center, Box } from 'native-base'
import { LoginPageImage } from '../../assets'
import { LoginComponent } from '../../features'

const DesktopView = () => {
  return (
    <Box
      w='100vw'
      h='100vh'
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
        <LoginComponent />
      </Center>
    </Box>
  )
}

export default DesktopView
