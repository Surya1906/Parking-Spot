import React, { useState } from 'react'
import { HStack, Text, Flex, Pressable } from 'native-base'
import { Cart, Menu } from '../../assets'
import { MenuModel } from '../index'
const MobileHeader = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const handleModelPress = () => {
    console.log('Pressed')
    setModalVisible(!modalVisible)
  }
  return (
    <>
      <HStack
        bg='white'
        px='3'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100vw'
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '998',
        }}
      >
        <Pressable onPress={handleModelPress}>
          <Menu />
        </Pressable>
        <Flex
          style={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }}
        >
          <img
            src='https://imgs.search.brave.com/lgxb1QbhEvTp4XTJdqO6I8T3GIgZxwhePfh3Z-qUUDQ/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9mdW5z/b2Z0aWQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzEw/L2R1bW15LWxvZ28t/MDEucG5n'
            alt='Logo'
            style={{ width: '30px', height: '30px' }}
          />
          <Text color='black' alignSelf='center'>
            Company Name
          </Text>
        </Flex>
        <HStack>
          <Cart />
        </HStack>
      </HStack>
      {modalVisible && (
        <MenuModel
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default MobileHeader
