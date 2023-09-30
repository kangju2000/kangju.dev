import { Center, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

import MDXContent from './MDXContent'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'

import type { Log } from 'contentlayer/generated'

interface MDXLogProps {
  log: Log
}

const MDXLog = ({ log }: MDXLogProps) => {
  return (
    <div>
      <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Center>
          <Heading as="h1" fontSize="5xl" fontWeight="bold" mb="24px">
            {format(new Date(log.date), 'yyyy년 MM월 dd일')}
          </Heading>
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
    </div>
  )
}

export default MDXLog
