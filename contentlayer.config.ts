import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import { format } from 'date-fns'
import readingTime from 'reading-time'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeImgSize from 'rehype-img-size'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

import type { MDXOptions } from 'contentlayer/core'

const ReadTime = defineNestedType(() => ({
  name: 'ReadTime',
  fields: {
    text: { type: 'string', required: true },
    minutes: { type: 'number', required: true },
    time: { type: 'number', required: true },
    words: { type: 'number', required: true },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    date: { type: 'date', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    dateFormatted: {
      type: 'string',
      resolve: (post) => format(new Date(post.date), 'yy.MM.dd'),
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, '').replace(/ /g, '-'),
    },
    readTime: {
      type: 'nested',
      of: ReadTime,
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}))

export const Log = defineDocumentType(() => ({
  name: 'Log',
  filePathPattern: `log/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    description: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    dateFormatted: {
      type: 'string',
      resolve: (post) => {
        const splitPath = post._raw.flattenedPath.match(/(\d{2}\.\d{2})\/(\d{2}\.\d{2})/)

        if (!splitPath) {
          return undefined
        }

        const dateString = '20' + splitPath[1].split('.')[0] + '.' + splitPath[2]

        return dateString.replace(/\./g, '-')
      },
    },
    readTime: {
      type: 'nested',
      of: ReadTime,
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post, Log],
  mdx: {
    remarkPlugins: [remarkGfm, remarkUnwrapImages, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrismPlus,
      [
        rehypeAutoLinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
      [
        rehypeImgSize,
        {
          dir: 'public',
        },
      ],
    ],
  } as MDXOptions,
})
