import { Box, Center, Heading, Highlight, Spacer, Stack, Text } from '@chakra-ui/react'

import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'

export default function LogPage() {
  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Stack spacing="24px">
        <Box>
          <Heading as="h1" fontSize="3xl" mb="8px">
            개발 로그
          </Heading>
          <Text>하루하루 개발한 내용을 기록합니다.</Text>
        </Box>
        <Spacer />
        <Center h="100%">
          <Highlight
            query="달력"
            styles={{
              color: 'white',
              bg: 'gray.700',
              padding: ['2px', '4px'],
              margin: ['0px', '2px'],
              borderRadius: '4px',
            }}
          >
            우측 하단의 달력을 통해 로그를 확인할 수 있습니다.
          </Highlight>
        </Center>
      </Stack>
    </ChakraMotion>
  )
}
