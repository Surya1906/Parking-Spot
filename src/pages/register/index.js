import React from 'react'
import { useWindowDimensions } from 'react-native-web'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Register = () => {
  const { width } = useWindowDimensions()
  if (width > 820) return <DesktopView />
  else return <MobileView />
}

export default Register
