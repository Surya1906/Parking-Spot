import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { BrowserRouter } from 'react-router-dom'

const theme = extendTheme({
  colors: {
    primary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
