'use client'

import { chakra } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Admonition from '@/components/mdx/Admonition'
import Image from '@/components/mdx/Image'
import Youtube from '@/components/mdx/Youtube'

import type { MDXComponents } from 'mdx/types'

const components = {
  Youtube,
  code: (props) => <chakra.span fontWeight="bold" {...props} />,
  a: (props) => <chakra.a {...props} />,
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
    <Prose overflow="hidden" overflowX="auto">
      <MDXComponent components={components} />
    </Prose>
  )
}

export default MDXContent
