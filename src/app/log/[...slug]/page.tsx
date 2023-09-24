'use client'
import { allLogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const post = allLogs.find(
    (post) => encodeURI(post._raw.flattenedPath) === 'log/' + params.slug.join('/')
  )

  if (!post) return <div>not found</div>

  const MDXContent = useMDXComponent(post.body.code)

  return <MDXContent />
}
