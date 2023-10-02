import { Box, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'

import PostCard from './components/PostCard'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import List from '@/components/List/List'

export default function PostsPage() {
  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Stack spacing="24px">
        <Box>
          <Heading as="h1" fontSize="3xl" mb="8px">
            포스트
          </Heading>
          <Text>개발 관련 포스트를 작성합니다.</Text>
        </Box>
        <Spacer />
        <List
          gap="24px"
          items={allPosts}
          renderItem={(post) => <PostCard key={post.slug} post={post} />}
          renderEmpty={() => <div>포스트가 없습니다.</div>}
        />
      </Stack>
    </ChakraMotion>
  )
}
