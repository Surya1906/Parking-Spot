import React from 'react'
import { Box, Text, Heading, HStack, Pressable, Flex } from 'native-base'
import { Link } from 'react-router-dom'
import { Location, Wallet, Product, News, Close, Home } from '../../assets'

const MenuModel = (props) => {
  const { modalVisible, setModalVisible } = props
  const data = [
    {
      icon: <Home />,
      title: 'Home',
      goto: '/home',
    },
    {
      icon: <Location />,
      title: 'Navigate',
      goto: '/',
    },
    {
      icon: <Wallet />,
      title: 'Wallet',
      goto: '/',
    },
    {
      icon: <Product />,
      title: 'Product',
      goto: '/',
    },
    {
      icon: <News />,
      title: 'News feed',
      goto: '/',
    },
  ]
  return (
    <>
      <Box
        w='100vw'
        h='100vh'
        bg='white'
        style={{
          boxSizing: 'border-box',
          padding: '12px',
          display: 'flex',
          position: 'absolute',
          top: '0',
          zIndex: '999',
        }}
      >
        <Flex
          flexDirection='row'
          justifyContent='space-between'
          style={{ alignItems: 'center' }}
        >
          <Heading color='yellow.400' size='xl'>
            Menu
          </Heading>
          <Pressable
            onPress={() => {
              setModalVisible(false)
            }}
          >
            <Close color='yellow.400' />
          </Pressable>
        </Flex>
        {data.map((item) => (
          <Link to={item.goto} style={{ textDecoration: 'none' }}>
            <Pressable>
              {({ isPressed }) => {
                return (
                  <Box
                    borderWidth='1'
                    borderColor='white'
                    borderBottomColor='black'
                    bg={isPressed && 'yellow.100'}
                    p='3'
                    rounded='8'
                  >
                    <HStack style={{ gap: '10px', alignItems: 'center' }}>
                      <div>{item.icon}</div>
                      <Text fontSize='xs' color='yellow.400'>
                        {item.title}
                      </Text>
                    </HStack>
                  </Box>
                )
              }}
            </Pressable>
          </Link>
        ))}
      </Box>
    </>
  )
}

export default MenuModel
