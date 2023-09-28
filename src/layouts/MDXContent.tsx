'use client'

import { chakra } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Youtube from '@/components/Youtube/Youtube'

import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  Youtube,
  code: (props) => <chakra.span fontWeight="bold" {...props} />,
  a: (props) => <chakra.a target="_blank" {...props} />,
}

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
