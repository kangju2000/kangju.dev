import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

import MDXContent from './MDXContent'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import Giscus from '@/components/Giscus/Giscus'
import { fadeIn, staggerTwo } from '@/constants/animations'

import type { Post } from 'contentlayer/generated'

interface MDXPostProps {
  post: Post
}

const MDXPost = ({ post }: MDXPostProps) => {
  return (
    <ChakraMotion variants={staggerTwo} initial="initial" animate="animate">
      <Stack spacing="50px">
        <ChakraMotion variants={fadeIn}>
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
              <Text fontSize="sm" fontWeight="700" color="gray.100">
                {post.dateFormatted} | {post.readTime.text}
              </Text>
            </Center>
          </Center>
        </ChakraMotion>

        <ChakraMotion variants={fadeIn}>
          <MDXContent code={post.body.code} />
        </ChakraMotion>
        <Giscus />
      </Stack>
    </ChakraMotion>
  )
}

export default MDXPost
