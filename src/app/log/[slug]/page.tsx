import { allLogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { metadata } from '@/app/layout'
import NotFound from '@/app/not-found'
import { BASE_WEB_URL } from '@/constants'
import MDXLog from '@/layouts/log/MDXLog'

import type { Metadata } from 'next'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const log = allLogs.find((log) => log.dateFormatted === slug)

  if (!log) return metadata

  return {
    metadataBase: new URL(BASE_WEB_URL),
    title: {
      absolute: `${log.dateFormatted} 일지`,
    },
    description: log.description || '프론트엔드 개발자 강주혁입니다.',
    icons: {
      icon: '/icon.svg',
    },
    keywords: log.tags,
    openGraph: {
      title: log.description,
      description: log.description || '프론트엔드 개발자 강주혁입니다.',
      type: 'website',
      locale: 'ko',
      url: `${BASE_WEB_URL}/log/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return allLogs.map((log) => ({
    slug: log.dateFormatted,
  }))
}

export default function LogDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const sortedLogs = allLogs.sort((a, b) =>
    compareDesc(new Date(b.dateFormatted), new Date(a.dateFormatted))
  )
  const index = sortedLogs.findIndex((log) => log.dateFormatted === slug)

  if (index === -1) return <NotFound />

  return (
    <MDXLog
      log={sortedLogs[index]}
      prevLog={sortedLogs[index - 1]}
      nextLog={sortedLogs[index + 1]}
    />
  )
}
