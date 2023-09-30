import { Center, Heading, Spacer, Stack } from '@chakra-ui/react'

import Calendar from '@/components/Calendar/Calendar'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'

export default function LogPage() {
  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Stack h="100%">
        <Center>
          <Heading as="h2" fontSize="3xl">
            개발 로그
          </Heading>
        </Center>
        <Spacer />
        <Calendar />
      </Stack>
    </ChakraMotion>
  )
}
