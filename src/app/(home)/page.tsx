import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { allLogs, allPosts } from 'contentlayer/generated'
import Link from 'next/link'

import FeaturedLog from '../log/components/FeaturedLog'
import PostCard from '../posts/components/PostCard'
import BlurImage from '@/components/common/BlurImage'
import ChakraMotion from '@/components/common/ChakraMotion'
import { GithubIcon, LinkedInIcon } from '@/components/common/Icons/LogoIcons'
import List from '@/components/common/List'

export default function Home() {
  const recentPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2)
  const recentLogs = allLogs
    .sort((a, b) => b.dateFormatted.localeCompare(a.dateFormatted))
    .slice(0, 5)

  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Flex gap="24px" h={{ base: '100px', md: '130px' }}>
        <Box pos="relative" flexShrink={0} h="inherit" aspectRatio={1}>
          <BlurImage
            src="https://avatars.githubusercontent.com/u/23312485?v=4"
            alt="kangjuhyeok"
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            fill
            priority
          />
        </Box>
        <Box display="flex" flexDir="column" justifyContent="space-around">
          <Box>
            <Text fontSize="md" color="gray.500">
              Frontend Developer
            </Text>
            <Heading size="lg">강주혁</Heading>
          </Box>
          <Flex gap="10px" mt="15px">
            <Link href="https://github.com/kangju2000/" target="_blank">
              <GithubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/kangju2000/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Divider my="30px" />

      <Flex justify="space-between" align="center" mb="30px">
        <Heading size="md">최근 포스트</Heading>
        <Link href="/posts">
          <Text as="span" color="gray.500" fontSize="sm">
            모든 포스트 보기 →
          </Text>
        </Link>
      </Flex>
      <List items={recentPosts} renderItem={(post) => <PostCard post={post} />} />

      <Divider my="30px" />

      <Flex justify="space-between" align="center" mb="30px">
        <Heading size="md">최근 로그</Heading>
        <Link href="/log">
          <Text as="span" color="gray.500" fontSize="sm">
            모든 로그 보기 →
          </Text>
        </Link>
      </Flex>

      <List items={recentLogs} renderItem={(log) => <FeaturedLog log={log} />} gap="10px" />
    </ChakraMotion>
  )
}
