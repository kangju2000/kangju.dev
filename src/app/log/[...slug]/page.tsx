import { allLogs } from 'contentlayer/generated'

import MDXLayout from '@/layouts/MDXLayout'

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const log = allLogs.find(
    (log) => encodeURI(log._raw.flattenedPath) === 'log/' + params.slug.join('/')
  )

  if (!log) return <div>not found</div>

  return <MDXLayout content={log} />
}
