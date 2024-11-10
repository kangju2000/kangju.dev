import { Box, Spacer } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Prose from './Prose'
import CustomLink from '@/components/common/CustomLink'
import Admonition from '@/components/mdx/Admonition'
import Image from '@/components/mdx/Image'
import TOC from '@/components/mdx/TOC'
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
    <Box id="mdx-content">
      <Prose>
        <TOC />
        <MDXComponent components={components} />
      </Prose>
      <Spacer h="100px" />
    </Box>
  )
}

export default MDXContent
