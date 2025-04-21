import { Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { useMemo } from 'react'

import PostCard from './components/PostCard'
import ChakraMotion from '@/components/common/ChakraMotion'
import List from '@/components/common/List'
import { fadeIn } from '@/constants/animations'

export default function PostsPage() {
  const sortedPosts = useMemo(() => {
    return [...allPosts].sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  }, [])

  return (
    <ChakraMotion variants={fadeIn} initial="initial" animate="animate" exit="exit">
      <Stack spacing="24px">
        <Heading as="h1" fontSize="3xl" mb="8px">
          포스트
        </Heading>
        <Text>개발 관련 포스트를 작성합니다.</Text>

        <Spacer />

        <List
          gap="32px"
          items={sortedPosts}
          renderItem={(post) => <PostCard key={post.slug} post={post} />}
          renderEmpty={() => <div>포스트가 없습니다.</div>}
        />
      </Stack>
    </ChakraMotion>
  )
}
