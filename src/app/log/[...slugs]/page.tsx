import { allLogs } from 'contentlayer/generated'

import MDXLog from '@/layouts/MDXLog'

export function generateStaticParams() {
  return allLogs.map((log) => ({
    slugs: log.slug.split('/').slice(1),
  }))
}

export default function LogtPage({ params: { slugs } }: { params: { slugs: string[] } }) {
  const log = allLogs.find((log) => log.slug === 'log/' + slugs.join('/'))

  if (!log) return <div>not found</div>

  return <MDXLog log={log} />
}
