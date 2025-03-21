import { allPosts } from 'contentlayer/generated'

import { metadata } from '@/app/layout'
import NotFound from '@/app/not-found'
import { BASE_WEB_URL } from '@/constants'
import MDXPost from '@/layouts/post/MDXPost'

import type { Metadata } from 'next'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === slug)

  if (post == null) {
    return metadata
  }

  return {
    metadataBase: new URL(BASE_WEB_URL),
    title: post.title,
    description: post?.description || '프론트엔드 개발자 강주혁입니다.',
    icons: { icon: '/icon.svg' },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post?.description || '프론트엔드 개발자 강주혁입니다.',
      type: 'website',
      locale: 'ko',
      url: `${BASE_WEB_URL}/posts/${slug}`,
      images: [{ url: post.thumbnail }],
    },
  }
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (post == null) {
    return <NotFound />
  }

  return <MDXPost post={post} />
}
