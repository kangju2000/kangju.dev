'use client'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { DocumentTypes } from 'contentlayer/generated'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Youtube from '@/components/Youtube/Youtube'

const components: MDXComponents = {
  h1: (props) => <Text as="h1" fontSize="5xl" fontWeight="bold" mt="32px" mb="24px" {...props} />,
  h2: (props) => <Text as="h2" fontSize="3xl" fontWeight="bold" mt="24px" mb="18px" {...props} />,
  h3: (props) => <Text as="h3" fontSize="2xl" fontWeight="bold" mt="18px" mb="16px" {...props} />,
  h4: (props) => <Text as="h4" fontSize="xl" fontWeight="bold" mt="16px" mb="14px" {...props} />,
  h5: (props) => <Text as="h5" fontSize="lg" fontWeight="bold" {...props} />,
  h6: (props) => <Text as="h6" fontSize="md" fontWeight="bold" {...props} />,
  p: (props) => <Text as="p" fontSize="md" {...props} />,
  hr: (props) => <Divider my={4} {...props} />,
  br: ({ ...props }) => <Box as="br" h="24px" {...props} />,
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
      <MDXComponent components={components} />
    </div>
  )
}

export default MDXLayout
