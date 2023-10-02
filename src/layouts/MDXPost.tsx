import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

import MDXContent from './MDXContent'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'

import type { Post } from 'contentlayer/generated'

interface MDXPostProps {
  post: Post
}

const MDXPost = ({ post }: MDXPostProps) => {
  return (
    <Stack spacing="50px">
      <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
              as="h2"
              mb={{
                base: '12px',
                sm: '18px',
              }}
              wordBreak="break-all"
            >
              {post.title}
            </Heading>
            <Text fontSize="sm" color="gray.300">
              {post.dateFormatted} | {post.readTime.text}
            </Text>
          </Center>
        </Center>
      </ChakraMotion>

      <ChakraMotion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        <MDXContent code={post.body.code} />
      </ChakraMotion>
    </Stack>
  )
}

export default MDXPost
