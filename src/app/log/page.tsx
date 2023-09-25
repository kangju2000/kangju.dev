import { Stack } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'
import Link from 'next/link'

export default function LogPage() {
  return (
    <Stack>
      {allLogs.map((log) => {
        return (
          <Link key={log.slug} href={`${log._raw.flattenedPath}`}>
            <h1>{log.title}</h1>
          </Link>
        )
      })}
    </Stack>
  )
}
