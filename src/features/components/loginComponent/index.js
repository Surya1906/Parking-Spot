/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Divider,
  Flex,
  Input,
  Text,
  Stack,
  Pressable,
  Button,
  HStack,
  Switch,
} from 'native-base'
import React, { useState } from 'react'
import {
  HidePassword,
  ShowPassword,
  EmailValid,
  Error,
  GoogleLogo,
} from '../../../assets'

import {
  useEmailValidation,
  usePasswordValidation,
  useWindowDimensions,
} from '../../../hooks'

const LoginComponent = () => {
  const [show, setShow] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const handleEmailChange = (emailInput) => {
    if (useEmailValidation(emailInput) === 'Valid') {
      setEmail(emailInput.toLowerCase())
      setEmailError('Valid')
    } else {
      setEmail(emailInput.toLowerCase())
      setEmailError(useEmailValidation(emailInput))
    }
  }
  const handlePasswordChange = (passwordInput) => {
    if (useEmailValidation(passwordInput) === 'Valid') {
      setPassword(passwordInput)
      setPasswordError('Valid')
    } else {
      setPassword(passwordInput)
      setPasswordError(usePasswordValidation(passwordInput))
    }
  }
  const { width } = useWindowDimensions()
  return (
    <Box
      borderRadius='20px'
      borderColor='amber.400'
      borderWidth='3'
      width='100%'
      w={width < 480 ? '100%' : '400px'}
      style={{
        padding: '20px',
        background: 'rgba(247, 247, 247, 0.04)',
        backdropFilter: 'blur(10px)',
      }}
      bg='white'
    >
      <Flex style={{ flexDirection: 'row', gap: '10px' }}>
        <img
          src='https://imgs.search.brave.com/lgxb1QbhEvTp4XTJdqO6I8T3GIgZxwhePfh3Z-qUUDQ/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9mdW5z/b2Z0aWQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzEw/L2R1bW15LWxvZ28t/MDEucG5n'
          alt='Logo'
          style={{ width: '48px', height: '48px' }}
        />
        <Text color='black' alignSelf='center'>
          Company Name
        </Text>
      </Flex>
      <Box marginTop='20px'>
        <Text fontSize='2xl' color='black' bold>
          Nice to see you again
        </Text>
        <Stack space={3} w='100%' marginTop='24px'>
          <Input
            w='100%'
            h='42px'
            placeholder='Email Address'
            color='black'
            onChangeText={handleEmailChange}
            value={email}
            InputRightElement={
              emailError === 'Valid' && (
                <EmailValid
                  style={{
                    marginRight: '9px',
                    width: '18px',
                  }}
                />
              )
            }
          />
          {emailError !== '' && emailError !== 'Valid' && (
            <Flex flexDirection='row' gap='1' alignItems='center'>
              <Error />
              <Text color='error.600' fontSize='xs'>
                {emailError}
              </Text>
            </Flex>
          )}
          <Input
            w='100%'
            h='42px'
            style={{ padding: '10px' }}
            type={show ? 'text' : 'password'}
            color='black'
            value={password}
            onChangeText={handlePasswordChange}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                {show ? (
                  <HidePassword
                    style={{
                      marginRight: '10px',
                      width: '18px',
                    }}
                  />
                ) : (
                  <ShowPassword
                    style={{ marginRight: '10px', width: '18px' }}
                  />
                )}
              </Pressable>
            }
            placeholder='Password'
          />
          {passwordError !== '' && passwordError !== 'Valid' && (
            <Flex flexDirection='row' gap='1' alignItems='center'>
              <Error />
              <Text color='error.600' fontSize='xs'>
                {passwordError}
              </Text>
            </Flex>
          )}
          <Flex justifyContent='space-between' flexDirection='row'>
            <HStack space={2}>
              <Switch />
              <Text color='#1A1A1A'> Remember Me</Text>
            </HStack>
            <Text fontSize='xs' color='info.500'>
              Forgot Password
            </Text>
          </Flex>
          <Button
            isLoading={false}
            bg='amber.400'
            _loading={{
              bg: 'amber.400:alpha.70',
              _text: {
                color: 'coolGray.700',
              },
            }}
            _spinner={{
              color: 'white',
            }}
            isLoadingText='Submitting'
          >
            Sign in
          </Button>
          <Divider my='2' bg='muted.200' />
          <Button
            bg='rose.600'
            leftIcon={<GoogleLogo />}
            _hover={{ bg: 'rose.700' }}
          >
            Sign in with Google
          </Button>
          <Flex flexDirection='row' justifyContent='center' gap='1'>
            <Text color='#1A1A1A' fontSize='xs'>
              Don't have an account ?
            </Text>
            <Text fontSize='xs' color='info.500'>
              Sign up now
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}

export default LoginComponent
