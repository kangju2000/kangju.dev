import { allLogs } from 'contentlayer/generated'

import MDXLayout from '@/layouts/MDXLayout'

export function generateStaticParams() {
  const paths = allLogs.map((log) => encodeURI(log._raw.flattenedPath).split('/').slice(1))

  return paths.map((slugs) => ({
    slugs,
  }))
}

export default function PostPage({ params: { slugs } }: { params: { slugs: string[] } }) {
  console.log('slugs', slugs)
  console.log(allLogs[0])
  console.log(encodeURI(allLogs[0]._raw.flattenedPath))
  const log = allLogs.find((log) => encodeURI(log._raw.flattenedPath) === 'log/' + slugs.join('/'))

  if (!log) return <div>not found</div>

  return <MDXLayout content={log} />
}
