'use client'
import { allPosts } from 'contentlayer/generated'

import MDXPost from '@/layouts/MDXLayout'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return <div>not found</div>

  return <MDXPost content={post} />
}
