'use client'

import { Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import Link from 'next/link'

import type { Log } from 'contentlayer/generated'

interface FeaturedLogProps {
  log: Log
}

const FeaturedLog = ({ log }: FeaturedLogProps) => {
  return (
    <Link href={`/log/${log.dateFormatted}`}>
      <Text as="h3" fontSize="md" mb="8px">
        {log.description}
      </Text>
      <Text fontSize="smaller" color="gray.500">
        {format(new Date(log.dateFormatted), 'yy.MM.dd')}
      </Text>
    </Link>
  )
}

export default FeaturedLog
