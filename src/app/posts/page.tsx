import { Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'

import PostCard from './components/PostCard'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import List from '@/components/List/List'

export default function PostsPage() {
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <Stack spacing="24px">
      <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Heading as="h1" fontSize="3xl" mb="8px">
          포스트
        </Heading>
        <Text>개발 관련 포스트를 작성합니다.</Text>
      </ChakraMotion>
      <Spacer />
      <ChakraMotion>
        <List
          gap="32px"
          items={sortedPosts}
          renderItem={(post, index) => (
            <ChakraMotion
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <PostCard key={post.slug} post={post} />
            </ChakraMotion>
          )}
          renderEmpty={() => <div>포스트가 없습니다.</div>}
        />
      </ChakraMotion>
    </Stack>
  )
}
