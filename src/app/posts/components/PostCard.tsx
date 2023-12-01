import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import Link from 'next/link'

import BlurImage from '@/components/common/BlurImage'
import ChakraMotion from '@/components/common/ChakraMotion'

import type { Post } from 'contentlayer/generated'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <ChakraMotion
        display={{
          sm: 'flex',
        }}
        alignItems={{
          sm: 'center',
        }}
        gap={{
          sm: '24px',
        }}
        cursor="pointer"
        whileHover={{
          scale: 1.01,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Box
          w={{ sm: '160px' }}
          h={{ sm: '160px' }}
          aspectRatio={{
            base: 16 / 9,
            sm: 1 / 1,
          }}
          mb={{ base: '16px', sm: '0' }}
          pos="relative"
          flexShrink={0}
          borderRadius="16px"
          overflow="hidden"
        >
          <BlurImage
            src={post.thumbnail}
            alt="썸네일"
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 480px) 100vw, 160px"
            fill
          />
        </Box>
        <Stack overflow="hidden">
          <Heading
            as="h2"
            fontSize={{
              base: 'xl',
              sm: '2xl',
            }}
          >
            {post.title}
          </Heading>
          <Text
            as="p"
            fontSize={{
              base: 'sm',
              sm: 'md',
            }}
            _dark={{ color: 'gray.400' }}
            _light={{ color: 'gray.600' }}
          >
            {post.description}
          </Text>
          <Text
            fontSize={{
              base: 'xs',
              sm: 'sm',
            }}
            color="gray.500"
          >
            {format(new Date(post.date), 'yy.MM.dd')}
          </Text>
        </Stack>
      </ChakraMotion>
    </Link>
  )
}

export default PostCard
