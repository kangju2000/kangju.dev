import { allLogs } from 'contentlayer/generated'

import { metadata } from '@/app/layout'
import NotFound from '@/app/not-found'
import { BASE_WEB_URL } from '@/constants'
import MDXLog from '@/layouts/MDXLog'

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
    title: log?.description,
    description: log?.description || '프론트엔드 개발자 강주혁입니다.',
    icons: {
      icon: '/icon.svg',
    },
    openGraph: {
      title: log?.description,
      description: log?.description || '프론트엔드 개발자 강주혁입니다.',
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
  const log = allLogs.find((log) => log.dateFormatted === slug)

  if (!log) return <NotFound />

  return <MDXLog log={log} />
}
