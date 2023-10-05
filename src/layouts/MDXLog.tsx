import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import MDXContent from './MDXContent'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import Giscus from '@/components/Giscus/Giscus'

import type { Log } from 'contentlayer/generated'

interface MDXLogProps {
  log: Log
}

const MDXLog = ({ log }: MDXLogProps) => {
  return (
    <Stack spacing="50px">
      <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Center flexDirection="column">
          <Heading as="h2" mb="24px">
            {log.description || format(new Date(log.dateFormatted), 'yyyy년 MM월 dd일')}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {log.dateFormatted} | {log.readTime.text}
          </Text>
        </Center>
      </ChakraMotion>
      <ChakraMotion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <MDXContent code={log.body.code} />
      </ChakraMotion>
      <Giscus />
    </Stack>
  )
}

export default MDXLog
