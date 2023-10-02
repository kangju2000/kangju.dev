import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
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
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
        align={{
          base: 'flex-start',
          sm: 'center',
        }}
        gap={{
          base: '16px',
          sm: '24px',
        }}
        cursor="pointer"
        _hover={{
          opacity: 0.8,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <Box
          w={{
            base: '100%',
            sm: '150px',
          }}
          h="150px"
          pos="relative"
          flexShrink={0}
          borderRadius="16px"
          overflow="hidden"
        >
          <Image
            src={post.thumbnail}
            alt="썸네일"
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 480px) 100%, 150px"
            fill
            priority
          />
        </Box>
        <Stack overflow="hidden">
          <Text as="h2" fontSize="3xl" fontWeight="bold" lineHeight="1.4" noOfLines={2}>
            {post.title}
          </Text>
          <Text as="p" fontSize="14px" _dark={{ color: 'gray.400' }} _light={{ color: 'gray.600' }}>
            {post.description}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {format(new Date(post.date), 'yy.MM.dd')}
          </Text>
        </Stack>
      </Flex>
    </Link>
  )
}

export default PostCard
