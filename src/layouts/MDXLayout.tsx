'use client'

import { Heading } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Youtube from '@/components/Youtube/Youtube'

import type { DocumentTypes } from '.contentlayer/generated/types'

const components: MDXComponents = {
  Youtube,
}

interface MDXLayoutProps {
  content: DocumentTypes
}

const MDXLayout = ({ content }: MDXLayoutProps) => {
  const MDXComponent = useMDXComponent(content.body.code)

  return (
    <div>
      <Heading as="h1" fontSize="5xl" fontWeight="bold" mb="24px">
        {content.title}
      </Heading>
      <Prose>
        <MDXComponent components={components} />
      </Prose>
    </div>
  )
}

export default MDXLayout
