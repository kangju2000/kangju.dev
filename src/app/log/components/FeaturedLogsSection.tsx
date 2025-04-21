'use client'

import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { type Log } from 'contentlayer/generated'

import LogCard from './LogCard'

interface FeaturedLogsSectionProps {
  featuredLogs: Log[]
  maxDisplayCount?: number
}

export default function FeaturedLogsSection({
  featuredLogs,
  maxDisplayCount = 4,
}: FeaturedLogsSectionProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box mb="32px">
      <Heading as="h2" fontSize="2xl" mb="16px">
        Featured Logs
      </Heading>
      {featuredLogs.length > 0 ? (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}
          gap="16px"
        >
          {featuredLogs.slice(0, maxDisplayCount).map((log) => (
            <LogCard key={log._id} log={log} />
          ))}
        </Grid>
      ) : (
        <Box
          p="20px"
          borderRadius="lg"
          bg={bgColor}
          borderWidth="1px"
          borderColor={borderColor}
          role="status"
          aria-live="polite"
        >
          <Text>Featured Logs가 없습니다.</Text>
        </Box>
      )}
    </Box>
  )
}
