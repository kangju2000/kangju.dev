import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import MDXContent from './MDXContent'
import ChakraMotion from '@/components/common/ChakraMotion'
import Giscus from '@/components/common/Giscus'
import { fadeIn, staggerTwo } from '@/constants/animations'

import type { Log } from 'contentlayer/generated'

interface MDXLogProps {
  log: Log
}

const MDXLog = ({ log }: MDXLogProps) => {
  return (
    <ChakraMotion variants={staggerTwo} initial="initial" animate="animate">
      <Stack spacing="30px">
        <ChakraMotion variants={fadeIn}>
          <Center flexDirection="column">
            <Heading as="h2" mb="24px" textAlign="center" whiteSpace="pre-line">
              {log.description?.split(',').map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                )
              }) || format(new Date(log.dateFormatted), 'yyyy년 MM월 dd일')}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {log.dateFormatted} | {log.readTime.text}
            </Text>
          </Center>
        </ChakraMotion>
        <ChakraMotion variants={fadeIn}>
          <MDXContent code={log.body.code} />
        </ChakraMotion>
        <Giscus />
      </Stack>
    </ChakraMotion>
  )
}

export default MDXLog
