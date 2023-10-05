'use client'

import { Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import Link from 'next/link'

import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'

import type { Log } from 'contentlayer/generated'

interface FeaturedLogProps {
  log: Log
  index: number
}

const FeaturedLog = ({ log, index }: FeaturedLogProps) => {
  return (
    <ChakraMotion
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/log/${log.dateFormatted}`}>
        <Text as="h3" fontSize="md" mb="8px">
          {log.description}
        </Text>
        <Text fontSize="smaller" color="gray.500">
          {format(new Date(log.dateFormatted), 'yy.MM.dd')}
        </Text>
      </Link>
    </ChakraMotion>
  )
}

export default FeaturedLog
