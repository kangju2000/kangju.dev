'use client'

import { chakra } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Admonition from '@/components/Admonition/Admonition'
import Youtube from '@/components/Youtube/Youtube'

import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  Youtube,
  code: (props) => <chakra.span fontWeight="bold" {...props} />,
  a: (props) => <chakra.a {...props} />,
  Admonition,
  Image: (props) => (
    <Image
      width={0}
      height={0}
      alt={props.alt || '이미지'}
      sizes="100vw"
      style={{
        width: props.width || '100%',
        height: props.height || 'auto',
        borderRadius: '8px',
        margin: '24px 0',
        objectFit: 'cover',
      }}
      {...props}
    />
  ),
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
