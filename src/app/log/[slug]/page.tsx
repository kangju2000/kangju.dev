import { allLogs } from 'contentlayer/generated'

import MDXLog from '@/layouts/MDXLog'

export function generateStaticParams() {
  return allLogs.map((log) => ({
    slug: log.dateFormatted,
  }))
}

export default function LogDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const log = allLogs.find((log) => log.dateFormatted === slug)

  if (!log) return <div>not found</div>

  return <MDXLog log={log} />
}
