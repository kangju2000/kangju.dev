import { Center, Heading } from '@chakra-ui/react'

import MDXContent from './MDXContent'

import type { Log } from 'contentlayer/generated'

interface MDXLogProps {
  log: Log
}

const MDXLog = ({ log }: MDXLogProps) => {
  return (
    <div>
      <Center>
        <Heading as="h1" fontSize="5xl" fontWeight="bold" mb="24px">
          {log.title}
        </Heading>
      </Center>
      <MDXContent code={log.body.code} />
    </div>
  )
}

export default MDXLog
