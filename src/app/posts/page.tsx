import { Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import PostCard from './components/PostCard'
import ChakraMotion from '@/components/common/ChakraMotion'
import List from '@/components/common/List'
import { fadeIn, fadeInRight, staggerOne } from '@/constants/animations'

export default function PostsPage() {
  const sortedPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <Stack spacing="24px">
      <ChakraMotion variants={fadeIn} initial="initial" animate="animate" exit="exit">
        <Heading as="h1" fontSize="3xl" mb="8px">
          포스트
        </Heading>
        <Text>개발 관련 포스트를 작성합니다.</Text>
      </ChakraMotion>
      <Spacer />
      <ChakraMotion>
        <List
          variants={staggerOne}
          initial="initial"
          animate="animate"
          gap="32px"
          items={sortedPosts}
          renderItem={(post) => (
            <ChakraMotion variants={fadeInRight}>
              <PostCard key={post.slug} post={post} />
            </ChakraMotion>
          )}
          renderEmpty={() => <div>포스트가 없습니다.</div>}
        />
      </ChakraMotion>
    </Stack>
  )
}
