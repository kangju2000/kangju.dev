'use client'

import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { useMDXComponent } from 'next-contentlayer/hooks'

import CustomLink from '@/components/common/CustomLink'
import Admonition from '@/components/mdx/Admonition'
import Image from '@/components/mdx/Image'
import Youtube from '@/components/mdx/Youtube'

import type { MDXComponents } from 'mdx/types'

const components = {
  Youtube,
  a: CustomLink,
  Admonition,
  img: Image,
  Image,
} as MDXComponents

interface MDXContentProps {
  code: string
}

const MDXContent = ({ code }: MDXContentProps) => {
  const MDXComponent = useMDXComponent(code)

  return (
    <Prose>
      <MDXComponent components={components} />
    </Prose>
  )
}

export default MDXContent
