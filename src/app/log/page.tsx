import { Box, Divider, Heading, Highlight, Stack, Text } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'

import FeaturedLog from './components/FeaturedLog'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import List from '@/components/List/List'

export default function LogPage() {
  const featuredLogs = allLogs.filter((log) => !!log.description)

  const sortedFeaturedLogs = featuredLogs.sort((a, b) => {
    const aDate = new Date(a.dateFormatted)
    const bDate = new Date(b.dateFormatted)

    return bDate.getTime() - aDate.getTime()
  })

  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Stack spacing="24px">
        <Box>
          <Heading as="h1" fontSize="3xl" mb="12px">
            개발 로그
          </Heading>
          <Text mb="6px">하루하루 개발한 내용을 기록합니다.</Text>
          <Highlight
            query="달력"
            styles={{
              color: 'white',
              bg: 'teal.500',
              padding: '1px 4px',
              margin: '0 2px',
              borderRadius: '4px',
            }}
          >
            우측 하단의 달력을 통해 로그를 확인할 수 있습니다.
          </Highlight>
        </Box>
        <Divider my="24px" />
        <Box>
          <Heading as="h2" fontSize="2xl" mb="16px">
            Featured Logs
          </Heading>
          <List
            gap="12px"
            items={sortedFeaturedLogs}
            renderItem={(log, index) => <FeaturedLog log={log} index={index} />}
          />
        </Box>
      </Stack>
    </ChakraMotion>
  )
}
