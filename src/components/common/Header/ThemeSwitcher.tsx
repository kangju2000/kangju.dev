'use client'

import { Center, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '../Icons/CommonIcons'

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center w="24px" h="24px" cursor="pointer" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Center>
  )
}

export default ThemeSwitcher
