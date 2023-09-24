import { Link, Stack } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'

export default function LogPage() {
  console.log(allLogs[0])
  return (
    <Stack>
      {allLogs.map((log) => {
        return (
          <Link key={log.slug} href={`${log._raw.flattenedPath}`}>
            <h1>{log.date}</h1>
          </Link>
        )
      })}
    </Stack>
  )
}
