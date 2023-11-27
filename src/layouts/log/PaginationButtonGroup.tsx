'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { Log } from 'contentlayer/generated'
import { format } from 'date-fns'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import ChakraMotion from '@/components/common/ChakraMotion'

const PaginationButtonGroup = ({ prevLog, nextLog }: { prevLog?: Log; nextLog?: Log }) => {
  const ref = useRef(null)
  useInView(ref, { once: true })

  return (
    <Flex ref={ref} justifyContent="space-between" gap="16px" py="16px">
      <PagnationButton type="prev" log={prevLog} />
      <PagnationButton type="next" log={nextLog} />
    </Flex>
  )
}

export default PaginationButtonGroup

const PagnationButton = ({ log, type }: { log?: Log; type: 'prev' | 'next' }) => {
  if (!log) return <Box flex={1} />

  return (
    <Link href={`/log/${log.dateFormatted}`}>
      <ChakraMotion
        display="flex"
        flexDirection="column"
        gap="8px"
        height="100%"
        p="8px"
        borderRadius="8px"
        boxShadow="md"
        backgroundColor="gray.50"
        textAlign={type === 'prev' ? 'left' : 'right'}
        initial={{ opacity: 0, transform: `translateX(${type === 'prev' ? '-100%' : '100%'})` }}
        animate={{ opacity: 1, transform: 'translateX(0)' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Text fontSize="sm" color="gray.700" fontWeight="700">
          {type === 'prev' ? '← ' : ''} {format(new Date(log.dateFormatted), 'yyyy.MM.dd')}{' '}
          {type === 'next' ? ' →' : ''}
        </Text>
      </ChakraMotion>
    </Link>
  )
}
