import { Stack } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'

import PostCard from './components/PostCard'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import List from '@/components/List/List'

export default function PostsPage() {
  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Stack>
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
