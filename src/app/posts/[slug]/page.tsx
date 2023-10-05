import { allPosts } from 'contentlayer/generated'

import { metadata } from '@/app/layout'
import NotFound from '@/app/not-found'
import MDXPost from '@/layouts/MDXPost'

import type { Metadata } from 'next'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.dateFormatted === slug)

  if (!post) return metadata

  return {
    metadataBase: new URL('https://kangju.dev'),
    title: post.title,
    description: post?.description || '프론트엔드 개발자 강주혁입니다.',
    openGraph: {
      title: post.description,
      description: post?.description || '프론트엔드 개발자 강주혁입니다.',
      type: 'website',
      locale: 'ko',
      url: `https://kangju.dev/posts/${slug}`,
    },
  }
}

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
