import { Stack } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'

import PostCard from './components/PostCard'
import List from '@/components/List/List'

export default function PostsPage() {
  return (
    <Stack>
      <List
        gap="24px"
        items={allPosts}
        renderItem={(post) => <PostCard key={post.slug} post={post} />}
        renderEmpty={() => <div>포스트가 없습니다.</div>}
      />
    </Stack>
  )
}
