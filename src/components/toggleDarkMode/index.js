import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        accessibilityLabel={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}

export default ToggleDarkMode
