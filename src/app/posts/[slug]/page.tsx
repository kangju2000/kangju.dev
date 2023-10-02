import { allPosts } from 'contentlayer/generated'

import NotFound from '@/app/not-found'
import MDXPost from '@/layouts/MDXPost'

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return <NotFound />

  return <MDXPost post={post} />
}
