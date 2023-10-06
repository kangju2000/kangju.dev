import { allLogs, allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

import { BASE_WEB_URL } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ['', '/posts', '/log'].map((route) => ({
    url: `${BASE_WEB_URL}${route}`,
    changefreq: 'daily',
    priority: 0.7,
    lastModified: new Date().toISOString(),
  }))

  const posts: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${BASE_WEB_URL}/posts/${post.slug}`,
    changefreq: 'daily',
    priority: 0.7,
    lastModified: post.date,
  }))

  const logs: MetadataRoute.Sitemap = allLogs.map((log) => ({
    url: `${BASE_WEB_URL}/log/${log.dateFormatted}`,
    changefreq: 'daily',
    priority: 0.7,
    lastModified: new Date(log.dateFormatted).toISOString(),
  }))

  return [...routes, ...posts, ...logs]
}
