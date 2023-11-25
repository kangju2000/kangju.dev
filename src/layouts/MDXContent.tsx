import { useMDXComponent } from 'next-contentlayer/hooks'

import Prose from './Prose'
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
      <MDXComponent code={code} components={components} />
    </Prose>
  )
}

export default MDXContent
