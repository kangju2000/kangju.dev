import { Box, Stack } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'
import Link from 'next/link'

import Empty from './components/Empty'
import List from '@/components/List/List'

interface MonthPageProps {
  params: {
    slug: string
  }
}

export default function MonthPage({ params: { slug } }: MonthPageProps) {
  const monthLogs = allLogs.filter((log) => log.yearMonth === slug)

  return (
    <Stack>
      <List
        gap="12px"
        items={monthLogs}
        renderItem={(log) => (
          <Box as="li" borderRadius="16px">
            <Link href={`/log/${log.slug}`}>{log.title}</Link>
          </Box>
        )}
        renderEmpty={() => <Empty />}
      />
    </Stack>
  )
}
