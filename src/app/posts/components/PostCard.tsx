import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import type { Post } from 'contentlayer/generated'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Flex
        align="center"
        gap="32px"
        cursor="pointer"
        _hover={{
          opacity: 0.8,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <Box
          w="180px"
          h="180px"
          pos="relative"
          flexShrink={0}
          borderRadius="16px"
          overflow="hidden"
        >
          <Image
            src={post.thumbnail}
            alt="썸네일"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box overflow="hidden">
          <Heading as="h3" size="lg" mb="12px">
            {post.title}
          </Heading>
          <Text as="p" mb="12px" _dark={{ color: 'gray.400' }} _light={{ color: 'gray.600' }}>
            {post.description}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {format(new Date(post.date), 'yy.MM.dd')}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default PostCard