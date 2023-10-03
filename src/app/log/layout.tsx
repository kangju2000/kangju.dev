import { Box } from '@chakra-ui/react'

import ToggleCalendar from './components/ToggleCalendar'

import type { PropsWithChildren } from 'react'

export default function LogLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Box
        pos="fixed"
        bottom="0px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        m="0 auto"
        maxW="700px"
        w="100%"
        justifyContent="end"
        zIndex="1"
      >
        <ToggleCalendar />
      </Box>
    </>
  )
}
