import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'

import MDXContent from './MDXContent'

import type { Post } from 'contentlayer/generated'

interface MDXPostProps {
  post: Post
}

const MDXPost = ({ post }: MDXPostProps) => {
  return (
    <Stack spacing="50px">
      <Center
        pos="relative"
        w="100%"
        minH="200px"
        p="24px"
        flexDirection="column"
        borderRadius="16px"
        overflow="hidden"
      >
        <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.500" zIndex="1" />
        <Image
          src={post.thumbnail}
          alt="thumbnail"
          style={{
            objectFit: 'cover',
          }}
          fill
        />
        <Center flexDirection="column" zIndex="1" h="100%" color="white" textAlign="center">
          <Heading
            as="h1"
            fontSize={{
              base: '3xl',
              sm: '5xl',
            }}
            fontWeight="bold"
            mb={{
              base: '12px',
              sm: '18px',
            }}
            wordBreak="break-all"
          >
            {post.title}
          </Heading>
          <Flex>
            {post.dateFormatted} | {post.readTime.text}
          </Flex>
        </Center>
      </Center>

      <MDXContent code={post.body.code} />
    </Stack>
  )
}

export default MDXPost